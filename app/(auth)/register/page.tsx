'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardBody } from '@/components/ui/Card';
import { AuthForm } from '@/components/forms/AuthForm';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <CardBody>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <div className="mt-8">
            <AuthForm isLogin={false} onSubmit={handleSubmit} />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
