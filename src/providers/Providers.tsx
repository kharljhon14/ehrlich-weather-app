'use client';

import { NextUIProvider } from '@nextui-org/react';
import type { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
