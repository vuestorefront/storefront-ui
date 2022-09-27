import type { VsfDividerProps } from './types';

export default function VsfDivider({ className = '', ...attributes }: VsfDividerProps) {
  return <hr className={`vsf-divider ${className}`} {...attributes} />;
}
