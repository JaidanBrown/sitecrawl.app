import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'w4ipj9kf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export function urlFor(source: any) {
  const baseUrl = `https://cdn.sanity.io/images/w4ipj9kf/production/`
  if (!source?.asset?._ref) return ''
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split('-')
  return `${baseUrl}${id}-${dimensions}.${format}`
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: {
    asset: { _ref: string }
    alt?: string
  }
  publishedAt: string
  body?: any[]
  author?: {
    name: string
    image?: { asset: { _ref: string } }
  }
  categories?: { title: string }[]
}
