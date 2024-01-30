'use client';

import { NextUIProvider } from '@nextui-org/react';
import type { PropsWithChildren } from 'react';

import Header from '@/features/Header';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <Header />
      {children}
    </NextUIProvider>
  );
}
