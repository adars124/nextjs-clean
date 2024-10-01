import React from 'react';
import { StockpediaCard } from '@/components/stockpedia/StockpediaCard';
import { stockpediaSections } from '@/lib/navs/stockpedia';

export default function StockpediaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stockpedia</h1>
      <p className="text-gray-600 mb-8">
        Your comprehensive guide to stock market terminology, frequently asked
        questions, and important disclaimers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockpediaSections.map((section) => (
          <StockpediaCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
