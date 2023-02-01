/* eslint-disable @next/next/no-img-element */
// Disabled due to issue with placement of the Next Image
import { VsfDisplay, VsfDisplayDirection } from '@storefront-ui/react/components/VsfDisplay';
import { VsfDisplayContent } from '@storefront-ui/react/components/VsfDisplayContent';
import { VsfButton } from '@storefront-ui//react/components/VsfButton';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';
import banner_placeholder from '../../assets/banner_placeholder.png';

function Example() {
  const { controls, state } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'direction',
        propDefaultValue: VsfDisplayDirection.horizontal,
        description: 'Select direction of content inside component',
        options: Object.values(VsfDisplayDirection),
      },
    ],
    {
      direction: VsfDisplayDirection.horizontal,
      title: 'Banner title',
      subtitle: 'Subtitle',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  );

  return (
    <ComponentExample controls={{ controls, state }}>
      <div>
        <VsfDisplay
          {...state.get}
          className="bg-gray-100 max-w-2xl"
          slotMedia={<img src={banner_placeholder.src} alt="" />}
        >
          <VsfDisplayContent title={state.get.title} subtitle={state.get.subtitle} description={state.get.description}>
            <VsfButton type="button">Browse deals</VsfButton>
          </VsfDisplayContent>
        </VsfDisplay>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
