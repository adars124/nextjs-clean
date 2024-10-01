import React from 'react';
import { TagList } from '@/components/common/TagList';

const insightCategories = ['fundamental', 'technical', 'investing'];

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <TagList tags={insightCategories} baseUrl="/insights" />
        </nav>
        {children}
      </div>
    </section>
  );
}
