import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function DividendCalculator() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardBody>
        <h1 className="text-2xl font-bold mb-6">Dividend Calculator</h1>
        <form className="space-y-4">
          <Input
            type="number"
            label="Stock Price ($)"
            id="stockPrice"
            placeholder="Enter stock price"
          />
          <Input
            type="number"
            label="Annual Dividend ($)"
            id="annualDividend"
            placeholder="Enter annual dividend"
          />
          <Button type="submit" variant="primary" className="w-full">
            Calculate Dividend Yield
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
