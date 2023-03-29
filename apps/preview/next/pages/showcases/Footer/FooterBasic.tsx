import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfIconContactSupport,
  SfIconFacebook,
  SfIconHelp,
  SfIconInstagram,
  SfIconCall,
  SfIconPinterest,
  SfIconTwitter,
  SfIconYoutube,
  SfButton,
  SfLink
} from '@storefront-ui/react';
import classNames from 'classnames';

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
    icon: 'SfIconFacebook',
  },
  {
    label: 'Twitter',
    link: '/',
    icon: 'SfIconTwitter',
  },
  {
    label: 'Instagram',
    link: '/',
    icon: 'SfIconInstagram',
  },
  {
    label: 'Pinterest',
    link: '/',
    icon: 'SfIconPinterest',
  },
  {
    label: 'Youtube',
    link: '/',
    icon: 'SfIconYoutube',
  },
];
const contactOptions = [
  {
    label: 'Help center',
    link: '/',
    details: ['Find answers online anytime'],
    icon: 'SfIconHelp',
  },
  {
    label: 'Live chat',
    link: '/',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: 'SfIconContactSupport',
  },
  {
    label: '1 234 567 8901',
    link: '/',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: 'SfIconCall',
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

const iconsMap: {
  [key: string]: any;
} = {
  SfIconFacebook,
  SfIconTwitter,
  SfIconInstagram,
  SfIconPinterest,
  SfIconYoutube,
  SfIconHelp,
  SfIconContactSupport,
  SfIconCall,
};
export default function FooterBasic() {
  return (
    <div className="pt-10 bg-gray-100">
      <div className="grid justify-center grid-cols-[1fr_1fr] medium:grid-cols-[repeat(4,1fr)] px-4 medium:px-6 pb-10 max-w-[1536px] mx-auto">
        {categories.map((category) => (
          <p className="min-w-[25%] extra-small:min-w-[50%] extra-small:pb-4" key={category.label}>
            <div className="text-lg font-medium leading-7 text-gray-900 font-body">{category.label}</div>
            {category.subcategories?.map((subcategory) => (
              <p className="py-2 text-gray-600 font-body" key={subcategory.label}>
                <SfLink href={subcategory.link}>
                  <a>{subcategory.label}</a>
                </SfLink>
              </p>
            ))}
          </p>
        ))}
      </div>
      <hr />
      <div className="py-10 large:flex large:mx-auto max-w-[1536px]">
        {contactOptions.map((contactOption) => {
          const Icon = iconsMap[contactOption.icon];
          return (
            <div className="mx-auto my-4 text-center" key={contactOption.label}>
              <Icon size="lg" />
              <p className="py-1 my-2 text-lg font-medium leading-7 text-gray-900 font-body">
                <SfLink href={contactOption.link}>
                  <a>{contactOption.label}</a>
                </SfLink>
              </p>
              {contactOption.details?.map((option) => (
                <p className="text-sm leading-5 text-gray-600 font-body" key={option}>
                  {option}
                </p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="bg-gray-900 justify-end px-4 py-10 large:flex large:py-6 max-w-[1536px] mx-auto">
        <div className="flex justify-center py-2 large:self-start">
          {socialMedia.map((social) => {
            const Icon = iconsMap[social.icon];
            return (
              <p className="mr-4 text-white" key={social.label}>
                <SfLink href={social.link}>
                  <a aria-label={`Go to ${social.label} page`}>
                    <Icon />
                  </a>
                </SfLink>
              </p>
            );
          })}
        </div>
        <div className="flex justify-center gap-6 py-2 my-4 large:ml-auto large:my-0">
          {bottomLinks.map((bottomLink) => (
            <p className="text-white font-body" key={bottomLink.label}>
              <SfLink href={bottomLink.link}>
                <a>{bottomLink.label}</a>
              </SfLink>
            </p>
          ))}
        </div>
        <p className="py-2 text-sm leading-5 text-center text-white/50 font-body large:ml-6">Vue Storefront</p>
      </div>
    </div>
  );
}

// #endregion source
FooterBasic.getLayout = ShowcasePageLayout;
