import VsfGallery from '../../output/blocks/VsfGallery/VsfGallery';
import VsfIconHot from '../../output/blocks/VsfIcons/VsfIconHot';
import VsfTag from '../../output/blocks/VsfTag/VsfTag';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
    <div className="e-page">
      <div className="e-page-component">
        <VsfGallery
          images={state.get.imagesModel}
          control={state.get.controlModel}
          thumbsLeft={state.get.thumbsLeftModel}
          contain={state.get.containModel}
          counter={state.get.counterModel}
          slotImage={
            state.get.badgeModel ? (
              <div className="absolute top-0 left-0 z-10">
                <VsfTag variant="info" badge={true} slotPrefix={<VsfIconHot className="vsf-icon-full" />}>
                  <span className="font-medium">-50%</span>
                </VsfTag>
              </div>
            ) : null
          }
        ></VsfGallery>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
