import React from 'react';

type CourseDetailsProps = {
  course: {
    description: string;
    syllabus: string[];
    duration: string;
    instructor: string;
  };
};

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-2">Course Description</h2>
        <p className="text-gray-700">{course.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Syllabus</h2>
        <ul className="list-disc pl-5 space-y-1">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Course Information</h2>
        <p className="text-gray-700">
          <strong>Duration:</strong> {course.duration}
        </p>
        <p className="text-gray-700">
          <strong>Instructor:</strong> {course.instructor}
        </p>
      </section>
    </div>
  );
};
