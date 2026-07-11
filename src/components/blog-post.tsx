import { ArrowLeft } from 'lucide-react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import PortableText from '@/components/portable-text'
import type { Post } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <HeroHeader />
      <main className="pt-32 pb-16 md:pt-44">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="mb-12">
            <div className="mb-6">
              {post.categories && post.categories.length > 0 && (
                <div className="mb-4 flex gap-3">
                  {post.categories.map((cat, idx) => (
                    <span key={idx} className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                      {cat.title}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image)}
                        alt={post.author.name}
                        className="size-6 border border-neutral-800 object-cover"
                      />
                    )}
                    <span className="font-medium text-neutral-400">{post.author.name}</span>
                  </div>
                )}
                {post.publishedAt && (
                  <>
                    <span>·</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </>
                )}
              </div>
            </div>

            {post.mainImage && (
              <div className="aspect-[16/9] overflow-hidden border border-neutral-800">
                <img
                  src={urlFor(post.mainImage)}
                  alt={post.mainImage.alt || post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </header>

          <div className="text-sm">
            {post.body && <PortableText content={post.body} />}
          </div>

          <footer className="mt-16 border-t border-neutral-800 pt-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200"
            >
              <ArrowLeft className="size-4" />
              Back to all posts
            </a>
          </footer>
        </article>
      </main>
      <FooterSection />
    </>
  )
}
