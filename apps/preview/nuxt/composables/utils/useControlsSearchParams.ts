import { watch, computed, reactive } from 'vue';
import { useSearchParams } from '@storefront-ui/preview-shared/utils/useSearchParams';

export const useControlsSearchParams = (controlsValues: Record<string, unknown>) => {
  const searchParams = reactive(
    useSearchParams({
      initialValue: {
        'config:bottom-open': true,
        ...controlsValues,
      },
    }),
  );

  Object.keys(controlsValues).forEach((controlName) => {
    watch(
      () => searchParams[controlName],
      (searchParam) => {
        if (controlName in searchParams) controlsValues[controlName] = searchParam;
      },
      { immediate: true },
    );

    watch(
      () => controlsValues[controlName],
      (controlValue) => {
        searchParams[controlName] = controlValue;
      },
    );
  });

  return {
    previewBottomOpen: computed({
      get: () => searchParams['config:bottom-open'],
      set: (v: boolean) => (searchParams['config:bottom-open'] = v),
    }),
  };
};
