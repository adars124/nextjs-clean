import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn('bg-gray-800 text-white py-8', className)} {...props}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              Stock Sessions is dedicated to helping you master the art of stock
              market investing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/insights" className="hover:text-blue-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-blue-300">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@stocksessions.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Stock Sessions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
