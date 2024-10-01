import React from 'react';
import { NewsCard } from '@/components/news/NewsCard';
import { dummyNews } from '@/lib/constants';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Market News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
