import VsfCard, { VsfCardSizes } from '@sfui/sfui/frameworks/react/components/VsfCard';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import productImage from '../fixture/product-card.webp';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'title',
        propType: 'string',
        description: 'Set title for card.',
        isRequired: true,
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfCardSizes),
        description: 'Set size variant.',
        propType: 'VsfCardSizes',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'link',
        propType: 'string',
        description:
          'Set link to render as clickable card. Without link the card is static with clickable button only.',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'imgSrc',
        propType: 'string',
        description: 'Set image source.',
        isRequired: false,
      },
      {
        type: 'json',
        propType: 'object',
        modelName: 'imgAttr',
      },
      {
        type: 'text',
        modelName: 'description',
        propType: 'string',
        description: 'Set card description.',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'buttonText',
        propType: 'string',
        description: 'Set button text.',
        isRequired: true,
      },
      {
        type: 'boolean',
        modelName: 'rounded',
        propType: 'boolean',
        description: 'Show rounded variant of card component.',
        isRequired: false,
      },
    ],
    {
      title: 'Title',
      size: VsfCardSizes.base,
      link: '/examples/VsfCard',
      imgSrc: productImage.src,
      imgAttr: { alt: 'Example image to describe card component content', loading: 'lazy' },
      description: 'There are many variations of passages of Lorem Ipsum available',
      buttonText: 'Button',
      rounded: false,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCard
          title={state.get.title}
          size={state.get.size}
          link={state.get.link}
          imgSrc={state.get.imgSrc}
          imgAttr={state.get.imgAttr}
          buttonText={state.get.buttonText}
          description={state.get.description}
          rounded={state.get.rounded}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
