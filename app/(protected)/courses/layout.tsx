import React from 'react';
import { TagList } from '@/components/common/TagList';

const courseCategories = ['beginner', 'intermediate', 'advanced'];

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <TagList tags={courseCategories} baseUrl="/courses" />
        </nav>
        {children}
      </div>
    </section>
  );
}
