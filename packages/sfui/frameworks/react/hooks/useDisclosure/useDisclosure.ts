import { useState, useCallback } from 'react';

import { UseDisclosureOptions } from './types';

export function useDisclosure(options: UseDisclosureOptions = {}) {
  const { initialState = false } = options;
  const [isOpen, setOpen] = useState<boolean>(initialState);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((currentOpen) => !currentOpen), []);

  return { isOpen, open, close, toggle };
}
