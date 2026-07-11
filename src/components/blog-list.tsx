import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import type { Post } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-32 pb-16 md:pt-44">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Blog</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
              Latest posts
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-400">
              Insights on SEO, website performance, and technical optimization.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-sm text-neutral-500">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post._id} className="group border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700">
                  <a href={`/blog/${post.slug.current}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden border-b border-neutral-800">
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage)}
                          alt={post.mainImage.alt || post.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                          <span className="text-xs text-neutral-600">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 p-4">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex gap-3">
                          {post.categories.map((cat, idx) => (
                            <span key={idx} className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-sm font-medium text-neutral-100 group-hover:text-white">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        {post.author && <span>{post.author.name}</span>}
                        {post.author && post.publishedAt && <span>·</span>}
                        {post.publishedAt && (
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </>
  )
}
