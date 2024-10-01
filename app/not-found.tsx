import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardBody className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">404</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Button href="/" variant="primary" className="w-full">
              Go back to homepage
            </Button>
            <Link
              href="/insights"
              className="text-blue-600 hover:underline block"
            >
              Browse our latest insights
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
