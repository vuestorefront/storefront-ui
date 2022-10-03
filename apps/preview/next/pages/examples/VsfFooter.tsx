import VsfFooter from '@sfui/sfui/frameworks/react/components/VsfFooter';
import {
  VsfIconChat,
  VsfIconFacebook,
  VsfIconHelp,
  VsfIconInstagram,
  VsfIconPhone,
  VsfIconPinterest,
  VsfIconTwitter,
  VsfIconYoutube,
} from '@sfui/sfui/frameworks/react/components/VsfIcons';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIconBase/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const categories = [
    {
      label: 'How to buy',
      subcategories: [
        {
          label: 'Payment methods',
          link: '/payment',
        },
        {
          label: 'Order pickup',
          link: '/',
        },
        {
          label: 'Purchase status',
          link: '/',
        },
        {
          label: 'Track orders',
          link: '/',
        },
        {
          label: 'Returns',
          link: '/',
        },
      ],
    },
    {
      label: 'Help',
      subcategories: [
        {
          label: 'Help centers',
          link: '/',
        },
        {
          label: 'Security & fraud',
          link: '/',
        },
        {
          label: 'Feedback',
          link: '/',
        },
        {
          label: 'Contact',
          link: '/',
        },
      ],
    },
    {
      label: 'Services',
      subcategories: [
        {
          label: 'Gift cards',
          link: '/',
        },
        {
          label: 'Order pickup',
          link: '/',
        },
        {
          label: 'Purchase status',
          link: '/',
        },
        {
          label: 'Track orders',
          link: '/',
        },
      ],
    },
    {
      label: 'About',
      subcategories: [
        {
          label: 'About us',
          link: '/',
        },
        {
          label: 'Order pickup',
          link: '/',
        },
        {
          label: 'Purchase status',
          link: '/',
        },
        {
          label: 'Track orders',
          link: '/',
        },
        {
          label: 'Returns',
          link: '/',
        },
      ],
    },
  ];
  const socialMedia = [
    {
      label: 'Facebook',
      link: '/',
    },
    {
      label: 'Twitter',
      link: '/',
    },
    {
      label: 'Instagram',
      link: '/',
    },
    {
      label: 'Pinterest',
      link: '/',
    },
    {
      label: 'Youtube',
      link: '/',
    },
  ];
  const contactOptions = [
    {
      label: 'Help center',
      link: '/',
      details: ['Find answers online anytime'],
    },
    {
      label: 'Live chat',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    },
    {
      label: '1 234 567 8901',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    },
  ];
  const bottomLinks = [
    {
      label: 'Terms',
      link: '/',
    },
    {
      label: 'Privacy policy',
      link: '/',
    },
  ];
  const { state, controls } = prepareControls(
    [
      {
        title: 'Categories',
        type: 'json',
        modelName: 'categoriesModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        title: 'Social media',
        type: 'json',
        modelName: 'socialMediaModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        title: 'Contact options',
        type: 'json',
        modelName: 'contactOptionsModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        title: 'Bottom links',
        type: 'json',
        modelName: 'bottomLinksModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        title: 'Company name',
        type: 'text',
        modelName: 'companyNameModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'WithHelpIcon',
        type: 'boolean',
        modelName: 'withHelpIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithChatIcon',
        type: 'boolean',
        modelName: 'withChatIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithContactIcon',
        type: 'boolean',
        modelName: 'withContactIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithFacebookIcon',
        type: 'boolean',
        modelName: 'withFacebookIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithTwitterIcon',
        type: 'boolean',
        modelName: 'withTwitterIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithPinterestIcon',
        type: 'boolean',
        modelName: 'withPinterestIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithYoutubeIcon',
        type: 'boolean',
        modelName: 'withYoutubeIconModel',
        propType: 'boolean',
      },
      {
        title: 'WithInstagramIcon',
        type: 'boolean',
        modelName: 'withInstagramIconModel',
        propType: 'boolean',
      },
    ],
    {
      categoriesModel: categories,
      socialMediaModel: socialMedia,
      companyNameModel: '© 2022 Vue Storefront',
      contactOptionsModel: contactOptions,
      bottomLinksModel: bottomLinks,
      withHelpIconModel: true,
      withChatIconModel: true,
      withContactIconModel: true,
      withFacebookIconModel: true,
      withTwitterIconModel: true,
      withPinterestIconModel: true,
      withYoutubeIconModel: true,
      withInstagramIconModel: true,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfFooter
          categories={state.get.categoriesModel}
          socialMedia={state.get.socialMediaModel}
          companyName={state.get.companyNameModel}
          contactOptions={state.get.contactOptionsModel}
          bottomLinks={state.get.bottomLinksModel}
          helpIcon={state.get.withHelpIconModel && <VsfIconHelp size={VsfIconSizeEnum.lg} />}
          chatIcon={state.get.withChatIconModel && <VsfIconChat size={VsfIconSizeEnum.lg} />}
          contactIcon={state.get.withContactIconModel && <VsfIconPhone size={VsfIconSizeEnum.lg} />}
          facebookIcon={state.get.withFacebookIconModel && <VsfIconFacebook />}
          twitterIcon={state.get.withTwitterIconModel && <VsfIconTwitter />}
          pinterestIcon={state.get.withPinterestIconModel && <VsfIconPinterest />}
          youtubeIcon={state.get.withYoutubeIconModel && <VsfIconYoutube />}
          instagramIcon={state.get.withInstagramIconModel && <VsfIconInstagram />}
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
