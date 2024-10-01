import React from 'react';
import { ToolCard } from '@/components/tools/ToolCard';
import { financialTools } from '@/lib/navs/tools';

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Financial Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialTools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} />
        ))}
      </div>
    </div>
  );
}
