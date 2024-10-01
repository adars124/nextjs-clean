import React from 'react';
import Link from 'next/link';
import { CourseCard } from '@/components/courses/CourseCard';
import { dummyCourses } from '@/lib/constants';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
}
