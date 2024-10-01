import React from 'react';
import Link from 'next/link';

type TagListProps = {
  tags: string[];
  baseUrl: string;
};

export const TagList: React.FC<TagListProps> = ({ tags, baseUrl }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`${baseUrl}/${tag}`}>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300">
              {tag}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
