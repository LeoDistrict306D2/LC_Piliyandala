'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';
import { cn } from '@/lib/utils';

/**
 * Reveal wrapper. Brisk and unfussy — an institutional site should feel
 * responsive rather than theatrical.
 *
 * Renders visible; the hook hides it after mount only when animating is safe.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}ms` }) : undefined}
    >
      {children}
    </div>
  );
}
