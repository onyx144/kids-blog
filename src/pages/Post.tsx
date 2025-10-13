import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowLeft, MessageCircle, Heart, Share2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import fm from 'front-matter'

interface PostMeta {
  title?: string
  category?: string
  date?: string
  author?: string
  image?: string
}

const categoryColors: Record<string, string> = {
  спорт: 'bg-kidsSecondary',
  навчання: 'bg-kidsPrimary',
  творчість: 'bg-kidsYellow',
  жарти: 'bg-kidsPink',
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const [meta, setMeta] = useState<PostMeta | null>(null)
  const [content, setContent] = useState<string>('Завантаження...')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return
    fetch(`/content/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then(text => {
        const cleanText = text.replace(/^\uFEFF/, '').trim()
        const { attributes, body } = fm<PostMeta>(cleanText)
        setMeta(attributes)
        console.log(body);
        setContent(body)
      })
      .catch(err => {
        console.error('❌ Fetch error:', err)
        setError(true)
      })
  }, [slug])

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="text-6xl mb-4">🦊</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Статтю не знайдено</h1>
        <Link to="/" className="text-kidsPrimary underline">Повернутися на головну</Link>
      </div>
    )

  if (!meta)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Завантаження статті...
      </div>
    )

  const categoryColor = categoryColors[meta.category ?? ''] || 'bg-kidsPrimary'

  // Кастомные рендереры для ReactMarkdown
  const renderers = {
    h2: ({node, ...props}: any) => (
      <div className="mb-8 text-center">
        <div className="text-3xl animate-wiggle">🌟</div>
        <h2 className="text-2xl md:text-3xl font-bold text-kidsPrimary mb-4" {...props} />
        <div className="w-16 h-1 bg-gradient-to-r from-kidsPrimary to-kidsSecondary rounded-full mx-auto"></div>
      </div>
    ),
    blockquote: ({node, ...props}: any) => (
      <div className="bg-gradient-to-r from-kidsYellow/20 to-kidsPink/20 border-l-4 border-kidsPrimary p-6 rounded-r-lg mb-6">
        <p className="text-lg italic text-gray-700 mb-0" {...props} />
      </div>
    ),
    li: ({node, ...props}: any) => (
      <li className="flex items-start space-x-3 mb-2">
        <div className="text-kidsPrimary mt-1">🦊</div>
        <span className="text-gray-700 text-lg" {...props} />
      </li>
    ),
    strong: ({node, ...props}: any) => (
      <strong className="font-bold text-gray-800" {...props} />
    ),
    p: ({node, ...props}: any) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />
    ),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="text-4xl animate-bounce-gentle">🦊</div>
            <h1 className="text-2xl font-bold text-kidsPrimary">КідсТиждень</h1>
          </Link>
          <Link
            to={`/category/${meta.category}`}
            className="flex items-center space-x-2 text-gray-600 hover:text-kidsPrimary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="capitalize">{meta.category}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {meta.category && (
            <Badge className={`${categoryColor} text-white border-0 text-lg px-4 py-2 mb-6 capitalize`}>
              {meta.category}
            </Badge>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">{meta.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            {meta.author && (
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{meta.author}</span>
              </div>
            )}
            {meta.date && (
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(meta.date).toLocaleDateString('uk-UA', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            )}
          </div>

          {meta.image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img src={meta.image} alt={meta.title} className="w-full h-64 md:h-96 object-cover" />
            </div>
          )}

          <Card className="mb-12 border-2 border-gray-100">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-kidsPrimary prose-a:text-kidsPrimary">
                <ReactMarkdown remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]} components={renderers}>
                  {content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>

          {/* Comments */}
          <Card className="border-2 border-gray-100 mb-8">
            <CardContent className="p-8 text-center text-gray-700">
              <MessageCircle className="w-6 h-6 mx-auto text-kidsPrimary mb-3" />
              <p>Будьте першим, хто залишить коментар до цієї історії!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <div className="text-4xl mb-2">🦊</div>
          <h4 className="text-2xl font-bold">КідсТиждень</h4>
          <p className="text-gray-400">Дитячі новини, які роблять світ яскравішим!</p>
        </div>
      </footer>
    </div>
  )
}
