import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useTools = () => {
  const path = usePathname();
  const [tool, setTool] = useState<string>('');

  useEffect(() => {
    const toolName =
      path.split('/tools/')[1].replace('-', ' ').toUpperCase() + ' CALCULATOR';
    setTool(toolName);
  });

  return {
    path,
    tool,
    setTool,
  };
};

export default useTools;
