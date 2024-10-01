'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

type EnrollmentFormProps = {
  courseId: string;
  price: number;
};

export const EnrollmentForm: React.FC<EnrollmentFormProps> = ({
  courseId,
  price,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enrollment logic here
    console.log(`Enrolling in course ${courseId} with email: ${email}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Enroll Now</h3>
      <p className="text-gray-700 mb-4">Price: ${price.toFixed(2)}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="email"
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Enroll
        </Button>
      </form>
    </div>
  );
};
