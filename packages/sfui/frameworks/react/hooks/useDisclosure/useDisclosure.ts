import { useState, useCallback } from 'react';
import type { UseDisclosureOptions } from '@storefront-ui/react';

export function useDisclosure({ initialValue = false }: UseDisclosureOptions = {}) {
  const [isOpen, setOpen] = useState<boolean>(initialValue);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((currentOpen) => !currentOpen), []);

  return { isOpen, open, close, toggle };
}
