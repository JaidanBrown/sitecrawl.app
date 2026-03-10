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
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest insights on SEO, website performance, and technical optimization.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post._id} className="group">
                  <a href={`/blog/${post.slug.current}`} className="block">
                    <div className="overflow-hidden rounded-xl border bg-card mb-4 aspect-[16/9]">
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage)}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex gap-2">
                          {post.categories.map((cat, idx) => (
                            <span key={idx} className="text-xs font-medium text-primary/80">
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-semibold group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
