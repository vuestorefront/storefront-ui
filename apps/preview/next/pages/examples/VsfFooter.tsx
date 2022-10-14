import VsfFooter, {
  VsfFooterBottomLinks,
  VsfFooterColumn,
  VsfFooterSection,
  VsfFooterSocialMedia,
  VsfFooterLabel,
} from '@sfui/sfui/frameworks/react/components/VsfFooter';
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
import { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@sfui/sfui/shared/types';
import Link from 'next/link';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const iconsMap: {
  [key: string]: any;
} = {
  VsfIconFacebook,
  VsfIconTwitter,
  VsfIconInstagram,
  VsfIconPinterest,
  VsfIconYoutube,
  VsfIconHelp,
  VsfIconChat,
  VsfIconPhone,
};

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
      icon: 'VsfIconFacebook',
    },
    {
      label: 'Twitter',
      link: '/',
      icon: 'VsfIconTwitter',
    },
    {
      label: 'Instagram',
      link: '/',
      icon: 'VsfIconInstagram',
    },
    {
      label: 'Pinterest',
      link: '/',
      icon: 'VsfIconPinterest',
    },
    {
      label: 'Youtube',
      link: '/',
      icon: 'VsfIconYoutube',
    },
  ];
  const contactOptions = [
    {
      label: 'Help center',
      link: '/',
      details: ['Find answers online anytime'],
      icon: 'VsfIconHelp',
    },
    {
      label: 'Live chat',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: 'VsfIconChat',
    },
    {
      label: '1 234 567 8901',
      link: '/',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: 'VsfIconPhone',
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
        type: 'json',
        modelName: 'categoriesModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        type: 'json',
        modelName: 'socialMediaModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        type: 'json',
        modelName: 'contactOptionsModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
        type: 'json',
        modelName: 'bottomLinksModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
      {
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

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfFooter>
          <VsfFooterSection type={VsfFooterSectionType.top}>
            {state.get.categoriesModel.map((category) => (
              <VsfFooterColumn key={category.label}>
                <VsfFooterLabel type={VsfFooterLabelType.category}>{category.label}</VsfFooterLabel>
                {category.subcategories?.map((subcategory) => (
                  <VsfFooterLabel key={subcategory.label}>
                    <Link href={subcategory.link}>
                      <a>{subcategory.label}</a>
                    </Link>
                  </VsfFooterLabel>
                ))}
              </VsfFooterColumn>
            ))}
          </VsfFooterSection>
          <VsfFooterSection type={VsfFooterSectionType.middle}>
            {state.get.contactOptionsModel.map((contactOption) => {
              const Icon = iconsMap[contactOption.icon];
              return (
                <VsfFooterColumn type={VsfFooterColumnType.middle} key={contactOption.label}>
                  <Icon size={VsfIconSizeEnum.lg} />
                  <VsfFooterLabel type={VsfFooterLabelType.contact}>
                    <Link href={contactOption.link}>
                      <a>{contactOption.label}</a>
                    </Link>
                  </VsfFooterLabel>
                  {contactOption.details?.map((option) => (
                    <VsfFooterLabel type={VsfFooterLabelType.contactDescription} key={option}>
                      {option}
                    </VsfFooterLabel>
                  ))}
                </VsfFooterColumn>
              );
            })}
          </VsfFooterSection>
          <VsfFooterSection type={VsfFooterSectionType.bottom}>
            <VsfFooterSocialMedia>
              {state.get.socialMediaModel.map((social) => {
                const Icon = iconsMap[social.icon];
                return (
                  <VsfFooterLabel type={VsfFooterLabelType.socialMedia} key={social.label}>
                    <Link href={social.link}>
                      <a aria-label={`Go to ${social.label} page`}>
                        <Icon />
                      </a>
                    </Link>
                  </VsfFooterLabel>
                );
              })}
            </VsfFooterSocialMedia>
            <VsfFooterBottomLinks>
              {state.get.bottomLinksModel.map((bottomLink) => (
                <VsfFooterLabel type={VsfFooterLabelType.bottomLinks} key={bottomLink.label}>
                  <Link href={bottomLink.link}>
                    <a>{bottomLink.label}</a>
                  </Link>
                </VsfFooterLabel>
              ))}
            </VsfFooterBottomLinks>
            <VsfFooterLabel type={VsfFooterLabelType.companyName}>{state.get.companyNameModel}</VsfFooterLabel>
          </VsfFooterSection>
        </VsfFooter>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
