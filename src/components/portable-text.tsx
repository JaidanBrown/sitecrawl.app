import { urlFor } from '@/lib/sanity'

interface Block {
  _type: string
  _key: string
  style?: string
  children?: { _type: string; text: string; marks?: string[] }[]
  listItem?: string
  markDefs?: { _key: string; _type: string; href?: string }[]
  asset?: { _ref: string }
}

interface PortableTextProps {
  content: Block[]
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content) return null

  const renderText = (child: { text: string; marks?: string[] }, markDefs?: { _key: string; _type: string; href?: string }[]) => {
    let text: React.ReactNode = child.text

    if (child.marks) {
      child.marks.forEach((mark) => {
        if (mark === 'strong') {
          text = <strong key={mark}>{text}</strong>
        } else if (mark === 'em') {
          text = <em key={mark}>{text}</em>
        } else {
          const linkDef = markDefs?.find((def) => def._key === mark)
          if (linkDef && linkDef._type === 'link') {
            text = (
              <a href={linkDef.href} className="text-primary underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            )
          }
        }
      })
    }

    return text
  }

  const renderBlock = (block: Block) => {
    if (block._type === 'block') {
      const children = block.children?.map((child, idx) => (
        <span key={idx}>{renderText(child, block.markDefs)}</span>
      ))

      switch (block.style) {
        case 'h1':
          return <h1 key={block._key} className="text-4xl font-bold mt-8 mb-4">{children}</h1>
        case 'h2':
          return <h2 key={block._key} className="text-3xl font-bold mt-8 mb-4">{children}</h2>
        case 'h3':
          return <h3 key={block._key} className="text-2xl font-bold mt-6 mb-3">{children}</h3>
        case 'h4':
          return <h4 key={block._key} className="text-xl font-bold mt-4 mb-2">{children}</h4>
        case 'blockquote':
          return (
            <blockquote key={block._key} className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
              {children}
            </blockquote>
          )
        default:
          if (block.listItem === 'bullet') {
            return <li key={block._key} className="ml-6">{children}</li>
          }
          return <p key={block._key} className="mb-4 leading-relaxed">{children}</p>
      }
    }

    if (block._type === 'image' && block.asset) {
      return (
        <figure key={block._key} className="my-8">
          <img
            src={urlFor({ asset: block.asset })}
            alt=""
            className="rounded-xl w-full"
          />
        </figure>
      )
    }

    return null
  }

  const groupedContent: (Block | Block[])[] = []
  let currentList: Block[] = []

  content.forEach((block) => {
    if (block.listItem === 'bullet') {
      currentList.push(block)
    } else {
      if (currentList.length > 0) {
        groupedContent.push(currentList)
        currentList = []
      }
      groupedContent.push(block)
    }
  })

  if (currentList.length > 0) {
    groupedContent.push(currentList)
  }

  return (
    <div className="prose prose-invert max-w-none">
      {groupedContent.map((item, idx) => {
        if (Array.isArray(item)) {
          return (
            <ul key={idx} className="list-disc mb-4">
              {item.map((block) => renderBlock(block))}
            </ul>
          )
        }
        return renderBlock(item)
      })}
    </div>
  )
}
