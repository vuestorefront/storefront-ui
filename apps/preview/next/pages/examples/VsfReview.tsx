import VsfReview from '@sfui/sfui/frameworks/react/components/VsfReview';
import VsfRating from '@sfui/sfui/frameworks/react/components/VsfRating';
import VsfTag from '@sfui/sfui/frameworks/react/components/VsfTag';
import { VsfTagSizes, VsfTagVariants } from '@sfui/sfui/frameworks/react/components/VsfTag/types';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIcons/types';
import { VsfIconCheck } from '@sfui/sfui/frameworks/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'title',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'text',
        modelName: 'content',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'text',
        modelName: 'date',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'author',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'charLimit',
        propDefaultValue: '',
        propType: 'number',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'showMoreText',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'showLessText',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'boolean',
        modelName: 'slotAuthorSuffix',
        propType: 'boolean',
      },
    ],
    {
      title: 'Lorem Ipsum is simply dummy text',
      // eslint-disable-next-line no-irregular-whitespace
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`,
      date: '16 days ago',
      author: 'Username',
      charLimit: 700,
      showMoreText: 'Read more',
      showLessText: 'Read less',
      slotAuthorSuffix: false,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfReview
          title={state.get.title}
          date={state.get.date}
          author={state.get.author}
          content={state.get.content}
          charLimit={state.get.charLimit}
          showMoreText={state.get.showMoreText}
          showLessText={state.get.showLessText}
          slotRating={<VsfRating value={3} max={5} />}
          slotAuthorSuffix={
            state.get.slotAuthorSuffix && (
              <VsfTag size={VsfTagSizes.sm} variant={VsfTagVariants.primary} label="Verified purchaser">
                <VsfIconCheck size={VsfIconSizeEnum.xs} />
              </VsfTag>
            )
          }
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
