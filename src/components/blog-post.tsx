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
      <main className="pt-32 pb-16">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12">
            <div className="mb-6">
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {post.categories.map((cat, idx) => (
                    <span key={idx} className="text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                      {cat.title}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image)}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <span className="font-medium">{post.author.name}</span>
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
              <div className="overflow-hidden rounded-xl aspect-[16/9]">
                <img
                  src={urlFor(post.mainImage)}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          <div className="text-lg">
            {post.body && <PortableText content={post.body} />}
          </div>

          <footer className="mt-16 pt-8 border-t">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all posts
            </a>
          </footer>
        </article>
      </main>
      <FooterSection />
    </>
  )
}
