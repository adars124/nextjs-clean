import React from 'react';
import Image from 'next/image';

type AuthorInfoProps = {
  name: string;
  avatar: string;
  bio: string;
};

export const AuthorInfo: React.FC<AuthorInfoProps> = ({
  name,
  avatar,
  bio,
}) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={avatar || '/images/default-avatar.png'} // Use a default local image
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};
