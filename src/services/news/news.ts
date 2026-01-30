import { get } from '../api';
import type { NewsItem, NewsListResponse } from './type';

export const getAllNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await get<NewsListResponse>('/all-news');
    return response.data.news || [];
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error;
  }
};

export const getNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
  try {
    const response = await get<{ news: NewsItem }>(`/news/${slug}`);
    return response.data.news || null;
  } catch (error) {
    console.error(`Error fetching news by slug ${slug}:`, error);
    return null;
  }
};

export const getFeaturedNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await get<NewsListResponse>('/all-news');
    const allNews = response.data.news || [];
    return allNews.filter((item) => item.featured);
  } catch (error) {
    console.error('Error fetching featured news:', error);
    throw error;
  }
};

export const getNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  try {
    const response = await get<NewsListResponse>('/all-news');
    const allNews = response.data.news || [];
    return allNews.filter((item) => item.category === category);
  } catch (error) {
    console.error(`Error fetching news by category ${category}:`, error);
    throw error;
  }
};

