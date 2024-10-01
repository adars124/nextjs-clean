'use client';

import useTools from '@/hooks/useTools';

export default function ToolPage() {
  const { tool } = useTools();

  return (
    <div>
      <h2>TOOL NAME: {tool}</h2>
    </div>
  );
}
