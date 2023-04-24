import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfThumbnail, SfThumbnailSize } from '@storefront-ui/qwik';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfThumbnailSize),
          propDefaultValue: SfThumbnailSize.base,
          description: 'Component size',
          propType: 'SfThumbnailSize',
        },
      ] satisfies ControlsType,
      state: {
        size: SfThumbnailSize.base,
      },
    };
  });

  return (
    <ComponentExample>
      <SfThumbnail {...examplesState.data.state} class="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
    </ComponentExample>
  );
});
