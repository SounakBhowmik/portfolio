import type { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link href={props.href || '#'} {...props} className="text-accent hover:underline" />
  ),
  img: (props: { src?: string; alt?: string }) => (
    <Image src={props.src || ''} alt={props.alt || ''} width={900} height={500} className="rounded-xl" />
  )
};
