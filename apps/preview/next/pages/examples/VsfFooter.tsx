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
import Link from 'next/link';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import LinkWrapper from '@sfui/sfui/frameworks/react/components/LinkWrapper';

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
      icon: <VsfIconFacebook />,
    },
    {
      label: 'Twitter',
      link: '/',
      icon: <VsfIconTwitter />,
    },
    {
      label: 'Instagram',
      link: '/',
      icon: <VsfIconInstagram />,
    },
    {
      label: 'Pinterest',
      link: '/',
      icon: <VsfIconPinterest />,
    },
    {
      label: 'Youtube',
      link: '/',
      icon: <VsfIconYoutube />,
    },
  ];
  const contactOptions = [
    {
      label: 'Help center',
      link: '/',
      details: ['Find answers online anytime'],
      icon: <VsfIconHelp size={VsfIconSizeEnum.lg} />,
    },
    {
      label: 'Live chat',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: <VsfIconChat size={VsfIconSizeEnum.lg} />,
    },
    {
      label: '1 234 567 8901',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: <VsfIconPhone size={VsfIconSizeEnum.lg} />,
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
    ],
    {
      categoriesModel: categories,
      socialMediaModel: socialMedia,
      companyNameModel: '© 2022 Vue Storefront',
      contactOptionsModel: contactOptions,
      bottomLinksModel: bottomLinks,
    },
  );

  const categoriesSide = () =>
    state.get.categoriesModel.map((category) => (
      <div className="vsf-footer__categories" key={category.label}>
        <span className="vsf-footer__label--category">{category.label}</span>
        {category.subcategories?.map((subcategory) => (
          <Link href={subcategory.link} key={subcategory.label}>
            <a className="vsf-footer__label--subcategory">{subcategory.label}</a>
          </Link>
        ))}
      </div>
    ));
  const contactOptionsSide = () =>
    state.get.contactOptionsModel.map((contactOption) => (
      <div className="vsf-footer__contact" key={contactOption.label}>
        {contactOption.icon}
        <Link href={contactOption.link} key={contactOption.label}>
          <a className="vsf-footer__label--contact">{contactOption.label}</a>
        </Link>
        {contactOption.details?.map((option) => (
          <span className="vsf-footer__contact--option" key={option}>
            {option}
          </span>
        ))}
      </div>
    ));
  const socialMediaSide = () =>
    state.get.socialMediaModel.map((social) => (
      <Link href={social.link} key={social.label}>
        <a className="vsf-footer__label--social-media" aria-label={`Go to ${social.label} page`}>
          {social.icon}
        </a>
      </Link>
    ));
  const bottomLinksSide = () =>
    state.get.bottomLinksModel.map((bottomLink) => (
      <Link href={bottomLink.link} key={bottomLink.label}>
        <a className="vsf-footer__label--bottom-links">{bottomLink.label}</a>
      </Link>
    ));

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfFooter
          categories={categoriesSide()}
          socialMedia={socialMediaSide()}
          companyName={state.get.companyNameModel}
          contactOptions={contactOptionsSide()}
          bottomLinks={bottomLinksSide()}
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
