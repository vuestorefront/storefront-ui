import VsfGallery from '../../output/blocks/VsfGallery/VsfGallery.lite';
// import VsfIconHot from '../../output/blocks/VsfIcons/VsfIconHot.lite';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Control',
        type: 'select',
        options: ['thumbs', 'bullets'],
        modelName: 'controlModel',
        propType: 'string',
      },
      {
        title: 'Thumbs Left',
        type: 'boolean',
        modelName: 'thumbsLeftModel',
        propType: 'boolean',
      },
      {
        title: 'Contain',
        type: 'boolean',
        modelName: 'containModel',
        propType: 'boolean',
        propDefaultValue: 'false',
        description: "Set 'object-fit: contain' attribute in main grid. Default attribute value: 'cover'",
      },
      {
        title: 'Counter',
        type: 'boolean',
        modelName: 'counterModel',
        propType: 'boolean',
      },
      {
        title: 'Badge',
        type: 'boolean',
        modelName: 'badgeModel',
        propType: '---',
        description: "Only for demonstration purpose. Badge is injected via 'image' slot",
      },
      {
        title: 'Images',
        type: 'json',
        modelName: 'imagesModel',
        propType: '(GalleryImageType | string)[]',
      },
    ],
    {
      controlModel: '',
      thumbsLeftModel: false,
      containModel: false,
      counterModel: false,
      badgeModel: false,
      imagesModel: [
        'https://via.placeholder.com/400x550',
        'https://via.placeholder.com/550',
        'https://via.placeholder.com/550x300',
        'https://via.placeholder.com/350x550',
        'https://via.placeholder.com/350x300',
        'https://via.placeholder.com/450x200',
        'https://via.placeholder.com/400x550',
        'https://via.placeholder.com/550',
        'https://via.placeholder.com/550x300',
        'https://via.placeholder.com/350x550',
        'https://via.placeholder.com/350x300',
        'https://via.placeholder.com/450x200',
      ],
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfGallery
        images={state.get.imagesModel}
        control={state.get.controlModel}
        thumbsLeft={state.get.thumbsLeftModel}
        contain={state.get.containModel}
        counter={state.get.counterModel}
      ></VsfGallery>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
