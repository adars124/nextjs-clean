import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CustomImage } from '@/components/ui/CustomImage';

type InsightCardProps = {
  insight: {
    slug: string;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    category: string;
  };
};

export const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <Card className="h-full flex flex-col">
      <CustomImage
        src={insight.image}
        alt={insight.title}
        aspectRatio="16:9"
        className="h-48"
      />
      <CardBody className="flex-grow flex flex-col">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 uppercase bg-blue-100 rounded-full mb-2">
          {insight.category}
        </span>
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {insight.title}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          {insight.author} • {insight.date}
        </p>
        <p className="text-gray-700 mb-4 flex-grow">{insight.excerpt}</p>
        <Button
          href={`/insights/${insight.slug}`}
          variant="outline"
          size="sm"
          className="w-full mt-auto"
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};
