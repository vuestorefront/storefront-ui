import VsfFooter from '~/output/blocks/VsfFooter/VsfFooter.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfFooterExample() {
    const categories = [
        {
            label: 'How to buy',
            subcategories: [
                {
                    label: 'Payment methods',
                    link: '/payment'
                },
                {
                    label: 'Order pickup',
                    link: '/'
                },
                {
                    label: 'Purchase status',
                    link: '/'
                },
                {
                    label: 'Track orders',
                    link: '/'
                },
                {
                    label: 'Returns',
                    link: '/'
                },
            ],
        },
        {
            label: 'Help',
            subcategories: [
                {
                    label: 'Help centers',
                    link: '/'
                },
                {
                    label: 'Security & fraud',
                    link: '/'
                },
                {
                    label: 'Feedback',
                    link: '/'
                },
                {
                    label: 'Contact',
                    link: '/'
                },
            ],
        },
        {
            label: 'Services',
            subcategories: [
                {
                    label: 'Gift cards',
                    link: '/'
                },
                {
                    label: 'Order pickup',
                    link: '/'
                },
                {
                    label: 'Purchase status',
                    link: '/'
                },
                {
                    label: 'Track orders',
                    link: '/'
                },
            ],
        },
        {
            label: 'About',
            subcategories: [
                {
                    label: 'About us',
                    link: '/'
                },
                {
                    label: 'Order pickup',
                    link: '/'
                },
                {
                    label: 'Purchase status',
                    link: '/'
                },
                {
                    label: 'Track orders',
                    link: '/'
                },
                {
                    label: 'Returns',
                    link: '/'
                },
            ],
        },
    ];
    const socialMedia = [
        {
            label: 'Facebook',
            link: '/'
        },
        {
            label: 'Twitter',
            link: '/'
        },
        {
            label: 'Instagram',
            link: '/'
        },
        {
            label: 'Pinterest',
            link: '/'
        },
        {
            label: 'Youtube',
            link: '/'
        }
    ];
    const contactOptions = [
        {
            label: 'Help center',
            link: '/',
            details: [
                'Find answers online anytime'
            ]
        },
        {
            label: 'Live chat',
            link: '/',
            details: [
                'Mon–Fri, 5am–10pm PT',
                'Sat–Sun, 6am–9pm PT'
            ]
        },
        {
            label: '1 234 567 8901',
            link: '/',
            details: [
                'Mon–Fri, 5am–10pm PT',
                'Sat–Sun, 6am–9pm PT'
            ]
        },
    ];
    const bottomLinks = [
        {
            label: 'Terms',
            link: '/'
        },
        {
            label: 'Privacy policy',
            link: '/'
        },
    ];
    const { state, controls } = prepareControls(
        [
            {
                title: 'Categories',
                type: 'json',
                modelName: 'categoriesModel',
                propType: '[]',
                propDefaultValue : '[]'
            },
            {
                title: 'Social media',
                type: 'json',
                modelName: 'socialMediaModel',
                propType: '[]',
                propDefaultValue : '[]'
            },
            {
                title: 'Contact options',
                type: 'json',
                modelName: 'contactOptionsModel',
                propType: '[]',
                propDefaultValue : '[]'
            },
            {
                title: 'Bottom links',
                type: 'json',
                modelName: 'bottomLinksModel',
                propType: '[]',
                propDefaultValue : '[]'
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

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfFooter 
            categories={state.get.categoriesModel} 
            socialMedia={state.get.socialMediaModel} 
            companyName={state.get.companyNameModel}
            contactOptions={state.get.contactOptionsModel}
            bottomLinks={state.get.bottomLinksModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
