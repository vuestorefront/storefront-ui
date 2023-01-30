/* eslint-disable @next/next/no-img-element */
// Disabled due to issue with placement of the Next Image
import { VsfHero, VsfHeroDirection } from '@storefront-ui/react/components/VsfHero';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfDisplayContent } from '@storefront-ui/react/components/VsfDisplayContent';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';
import hero_img from '../../assets/fixture/hero_img.png';
import hero_bg_mobile from '../../assets/fixture/hero_bg_mobile.png';
import hero_bg_desktop from '../../assets/fixture/hero_bg_desktop.png';

function Example() {
  const { controls, state } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'direction',
        propDefaultValue: VsfHeroDirection.horizontal,
        description: '',
        options: Object.values(VsfHeroDirection),
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'bgImgMobileSrc',
        propDefaultValue: undefined,
        description: '',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'bgImgDesktopSrc',
        propDefaultValue: undefined,
        description: '',
      },
    ],
    {
      direction: VsfHeroDirection.horizontal,
      bgImgMobileSrc: hero_bg_mobile.src,
      bgImgDesktopSrc: hero_bg_desktop.src,
      subtitle: 'Special offer',
      title: 'Hot deals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  );

  return (
    <ComponentExample controls={{ controls, state }}>
      <div>
        <VsfHero {...state.get} slotMedia={<img src={hero_img.src} alt="" className="vsf-hero-img" />}>
          <VsfDisplayContent title={state.get.title} subtitle={state.get.subtitle} description={state.get.description}>
            <VsfButton type="button">Buy now</VsfButton>
          </VsfDisplayContent>
        </VsfHero>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
