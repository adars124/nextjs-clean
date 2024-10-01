import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn('bg-white shadow-md', className)} {...props}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Stock Sessions
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/insights"
                className="text-gray-600 hover:text-blue-600"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-gray-600 hover:text-blue-600"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-600 hover:text-blue-600">
                News
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-gray-600 hover:text-blue-600">
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/stockpedia"
                className="text-gray-600 hover:text-blue-600"
              >
                Stockpedia
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
