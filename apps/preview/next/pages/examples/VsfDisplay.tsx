/* eslint-disable @next/next/no-img-element */
// Disabled due to issue with placement of the Next Image
import { VsfDisplay, VsfDisplayDirection } from '@storefront-ui/react/components/VsfDisplay';
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
    },
  );

  return (
    <ComponentExample controls={{ controls, state }}>
      <div>
        <VsfDisplay {...state.get} className="bg-gray-100" slotMedia={<img src={banner_placeholder.src} alt="" />}>
          {/* TODO: use DisplayContent for this example after it's implemented */}
          <div className="pb-4">
            <h1 className="text-4xl font-medium">Banner title</h1>
          </div>
          <div className="pb-6">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <VsfButton type="button">Buy now</VsfButton>
        </VsfDisplay>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
