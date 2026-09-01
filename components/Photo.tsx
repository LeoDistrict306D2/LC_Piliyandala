import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[16/9]',
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  fill: 'h-full w-full',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — nothing can shift the layout as it loads.
 *
 * `fill` exists for bento cells, where the photograph has to take the height
 * the grid gives it rather than dictating its own.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', ratio === 'fill' && 'h-full', className)}>
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2 text-xs text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
