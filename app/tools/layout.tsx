import React from 'react';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </section>
  );
}
