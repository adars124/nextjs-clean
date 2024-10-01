import React from 'react';
import Link from 'next/link';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type StockpediaCardProps = {
  section: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
};

export const StockpediaCard: React.FC<StockpediaCardProps> = ({ section }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardBody className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="text-blue-500 mr-3">{section.icon}</div>
          <h2 className="text-xl font-semibold">{section.title}</h2>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{section.description}</p>
        <Link href={`/stockpedia/${section.id}`} className="mt-auto">
          <Button variant="primary" size="sm" className="w-full">
            Explore
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};
