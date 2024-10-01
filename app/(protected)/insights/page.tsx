import React from 'react';
import { InsightCard } from '@/components/insights/InsightCard';
import { dummyInsights } from '@/lib/constants';
import { Spinner } from '@/components/ui/Spinner';

export default function InsightsPage() {
  if (!dummyInsights) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Market Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyInsights.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </div>
  );
}
