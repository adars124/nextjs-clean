import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';

export default function StockWikiPage() {
  return (
    <Card>
      <CardBody>
        <h1 className="text-3xl font-bold mb-6">Stock Wiki</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our comprehensive stock market wiki. Here you'll find
          definitions and explanations for common stock market terms and
          concepts.
        </p>
        {/* Add your wiki content here */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Common Terms</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold">Bull Market</dt>
            <dd className="text-gray-600">
              A market condition in which stock prices are rising or expected to
              rise.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Bear Market</dt>
            <dd className="text-gray-600">
              A market condition in which stock prices are falling or expected
              to fall.
            </dd>
          </div>
          {/* Add more terms as needed */}
        </dl>
      </CardBody>
    </Card>
  );
}
