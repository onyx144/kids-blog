export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
  content: string;
}

export interface NewsListResponse {
  news: NewsItem[];
  total?: number;
  page?: number;
  limit?: number;
}

export interface NewsResponse {
  news: NewsItem;
}

export interface ArticleApiItem {
  id: number;
  slug: string;
  title: string;
  content: string;
  category: string;
  author_name?: string;
  image?: string;
  created_at: string;
}

export interface ArticlesResponse {
  articles: ArticleApiItem[];
}

