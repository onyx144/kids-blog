
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'Заголовок статті',
      required: true,
    },
    date: {
      type: 'date',
      description: 'Дата публікації',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['дозвілля', 'батьки', 'здоровя', 'навчання', 'спорт', 'творчість', 'тварини', 'зроби-сам', 'жарти', 'клас'],
      description: 'Категорія статті',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'Короткий опис статті',
      required: true,
    },
    author: {
      type: 'string',
      description: 'Автор статті',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Головне зображення для статті',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Чи є ця стаття рекомендованою',
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
