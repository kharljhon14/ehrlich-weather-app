'use client';

import { Spinner } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const session = useSession();

  if (session.status === 'loading')
    return (
      <div className="hidden items-center justify-center md:flex">
        <Spinner
          label="Loading..."
          size="lg"
        />
      </div>
    );

  return (
    <div className="hidden text-center md:block">
      <h2 className="mb-4 text-2xl font-extrabold text-purple-600">
        Welcome, {session.data?.user?.name}!
      </h2>
      <span className="text-gray-500">{session.data?.user?.email}</span>
    </div>
  );
}
