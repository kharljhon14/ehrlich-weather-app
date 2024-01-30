'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

import Header from '@/features/Header';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <Header />
        <div className="mt-36">{children}</div>
      </NextUIProvider>
    </SessionProvider>
  );
}
