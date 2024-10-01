import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  className,
  ...props
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      <aside
        className={cn(
          'fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className,
        )}
        {...props}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="mb-4 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
