import React from 'react';
import { dummyCourses } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { TagList } from '@/components/common/TagList';
import { EnrollmentForm } from '@/components/forms/CourseEnrollment';
import { CourseDetails } from '@/components/courses/CourseDetails';

export default function CoursePage({
  params,
}: {
  params: { courseId: string };
}) {
  const course = dummyCourses.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <TagList tags={[course.level]} baseUrl="/courses" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CourseDetails course={course} />
        </div>
        <div className="md:col-span-1">
          <EnrollmentForm courseId={course.id} price={course.price} />
        </div>
      </div>
    </div>
  );
}
