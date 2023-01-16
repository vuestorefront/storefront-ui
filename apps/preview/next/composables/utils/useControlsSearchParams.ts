import { Dispatch, SetStateAction, useMemo } from 'react';
import { useMount, useMountedState, useUpdateEffect } from 'react-use';
import { useSearchParams } from '@storefront-ui/preview-shared/utils/useSearchParams';
import { objectsDiff } from '@storefront-ui/preview-shared/utils/object.utils';

export const useControlsSearchParams = <T extends Record<string, unknown>>(controlsState: {
  get: T;
  set: Dispatch<SetStateAction<T>>;
}) => {
  const isMounted = useMountedState();
  const searchParams = useMemo(
    () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSearchParams({
        initialValue: {
          'config:bottom-open': true,
          ...controlsState.get,
        },
        onStateChange() {
          controlsState.set({ ...searchParams });
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useMount(() => {
    const diffObj = objectsDiff(searchParams, controlsState.get);
    if (Object.keys(diffObj).length) controlsState.set({ ...controlsState.get, ...diffObj });
  });

  useUpdateEffect(() => {
    const diffObj = objectsDiff(controlsState.get, searchParams);
    if (Object.keys(diffObj).length) Object.assign(searchParams, diffObj);
  }, [controlsState.get]);

  return {
    previewBottomOpen: [
      isMounted() ? searchParams['config:bottom-open'] : true,
      (newPreviewBottomOpenValue: boolean) => {
        searchParams['config:bottom-open'] = newPreviewBottomOpenValue;
      },
    ] as const,
  };
};
