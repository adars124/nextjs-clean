'use client';

import React from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardBody className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          <div className="space-y-4">
            <Button onClick={reset} variant="primary" className="w-full">
              Try again
            </Button>
            <Button href="/" variant="outline" className="w-full">
              Go back to homepage
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
