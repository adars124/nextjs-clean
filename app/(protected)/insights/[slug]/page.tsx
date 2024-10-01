import React from 'react';
import { notFound } from 'next/navigation';
import { Card, CardBody, CardImage } from '@/components/ui/Card';
import { TagList } from '@/components/common/TagList';
import { AuthorInfo } from '@/components/insights/AuthorInfo';
import { dummyInsights } from '@/lib/constants';

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = dummyInsights.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <Card>
      <CardImage src={insight.image} alt={insight.title} />
      <CardBody className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{insight.title}</h1>
        <TagList tags={[insight.category]} baseUrl="/insights" />
        <p className="text-gray-600 text-base mt-2 mb-4">
          {insight.author} • {insight.date}
        </p>
        <div
          className="prose lg:prose-xl mb-8"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        <AuthorInfo
          name={insight.author}
          avatar={`https://avatar.iran.liara.run/public/boy`}
          bio="Expert market analyst with over 10 years of experience in the financial sector."
        />
      </CardBody>
    </Card>
  );
}
