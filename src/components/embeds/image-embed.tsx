import { urlFor } from '@/lib/blog';
import Image from 'next/image';

export function ImageEmbed({ value }: {
  value: {
    image: any;
    alt: string;
    caption?: string;
    layout: string;
  }
}) {
  const layoutClasses = {
    full: 'w-full',
    center: 'max-w-2xl mx-auto',
    left: 'float-left mr-8 max-w-md',
    right: 'float-right ml-8 max-w-md',
  }[value.layout] || 'w-full';

  return (
    <figure className={`my-8 ${layoutClasses}`}>
      <div className="relative w-full">
        <Image
          src={urlFor(value.image).url()}
          alt={value.alt}
          width={1200}
          height={800}
          className="rounded-lg w-full h-auto"
          style={{ aspectRatio: 'auto' }}
        />
      </div>
      {value.caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
} 