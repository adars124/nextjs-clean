import React from 'react';
import { TagList } from '@/components/common/TagList';

const newsCategories = [
  'markets',
  'stocks',
  'economy',
  'crypto',
  'commodities',
];

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <TagList tags={newsCategories} baseUrl="/news" />
        </nav>
        {children}
      </div>
    </section>
  );
}
