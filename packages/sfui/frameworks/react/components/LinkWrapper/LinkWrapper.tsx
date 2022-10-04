import Link from 'next/link';
import type { LinkWrapperProps } from './types';

export default function LinkWrapper({ link, children, tag }: LinkWrapperProps) {
  return tag === 'Link' ? <Link href={link}>{children}</Link> : <>{children}</>;
}
