import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CustomImage } from '@/components/ui/CustomImage';

type CourseCardProps = {
  course: {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    price: number;
    level: string;
  };
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="h-full flex flex-col">
      <CustomImage
        src={course.thumbnail}
        alt={course.title}
        aspectRatio="16:9"
        className="h-48"
      />
      <CardBody className="flex-grow flex flex-col">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 uppercase bg-green-100 rounded-full mb-2">
          {course.level}
        </span>
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {course.title}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          Instructor: {course.instructor}
        </p>
        <p className="text-gray-700 font-bold mt-auto">
          ${course.price.toFixed(2)}
        </p>
        <Button
          href={`/courses/${course.id}`}
          variant="primary"
          size="sm"
          className="w-full mt-4"
        >
          View Course
        </Button>
      </CardBody>
    </Card>
  );
};
