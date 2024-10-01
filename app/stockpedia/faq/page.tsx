import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';

export default function FAQsPage() {
  return (
    <Card>
      <CardBody>
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              What is the stock market?
            </h2>
            <p className="text-gray-600">
              The stock market is a marketplace where publicly traded company
              shares are bought and sold.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              How do I start investing in stocks?
            </h2>
            <p className="text-gray-600">
              To start investing in stocks, you'll need to open a brokerage
              account, fund it, and then you can begin purchasing shares of
              companies.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </CardBody>
    </Card>
  );
}
