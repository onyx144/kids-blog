import { get } from '../api';
import type { ArticleApiItem, ArticlesResponse, NewsItem } from './type';

const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const mapArticleToNews = (article: ArticleApiItem): NewsItem => {
  const plainContent = stripHtml(article.content || '');
  return {
    slug: article.slug,
    title: article.title,
    date: article.created_at,
    description: plainContent.slice(0, 160),
    author: article.author_name || 'Редакція',
    category: article.category || 'новини',
    image: article.image || '/images/no-image.jpg',
    featured: false,
    content: article.content || '',
  };
};

export const getAllNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await get<ArticlesResponse>('/articles.php');
    const allArticles = response.data.articles || [];
    return allArticles.map(mapArticleToNews);
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error;
  }
};

export const getNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
  try {
    const response = await get<ArticlesResponse>('/articles.php');
    const allArticles = response.data.articles || [];
    console.log('[news:getNewsBySlug] raw response data:', response.data);
    const article = allArticles.find((item) => item.slug === slug);
    return article ? mapArticleToNews(article) : null;
  } catch (error) {
    console.error(`Error fetching news by slug ${slug}:`, error);
    return null;
  }
};

export const getFeaturedNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await get<ArticlesResponse>('/articles.php');
    console.log('[news:getFeaturedNews] raw response data:', response.data);
    const allArticles = response.data.articles || [];
    return allArticles.map(mapArticleToNews);
  } catch (error) {
    console.error('Error fetching featured news:', error);
    throw error;
  }
};

export const getNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  try {
    const allNews = await getAllNews();
    return allNews.filter((item) => item.category === category);
  } catch (error) {
    console.error(`Error fetching news by category ${category}:`, error);
    throw error;
  }
};

