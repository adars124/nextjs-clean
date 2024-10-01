import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { CustomImage } from '@/components/ui/CustomImage';
import { Button } from '@/components/ui/Button';

type NewsCardProps = {
  news: {
    id: string;
    title: string;
    source: string;
    date: string;
    image: string;
    snippet: string;
    url: string;
  };
};

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CustomImage
        src={news.image}
        alt={news.title}
        aspectRatio="16:9"
        className="h-48"
      />
      <CardBody className="p-4 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          {news.source} • {news.date}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">{news.snippet}</p>
        <Button
          href={news.url}
          variant="outline"
          size="sm"
          className="mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article
        </Button>
      </CardBody>
    </Card>
  );
};
