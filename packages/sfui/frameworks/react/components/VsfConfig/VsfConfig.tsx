import { createContext, useMemo } from 'react';
import { VsfConfigProp } from './types';

export const VsfConfigContext = createContext<{ linkTag?: VsfConfigProp['linkTag'] }>({});

export default function VsfLink({ linkTag, children }: VsfConfigProp) {
  const value = useMemo(
    () => ({
      linkTag,
    }),
    [linkTag],
  );

  return <VsfConfigContext.Provider value={value}>{children}</VsfConfigContext.Provider>;
}
