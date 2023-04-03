import { ShowcasePageLayout } from '../../showcases';

// #region source
import { SfButton } from '@storefront-ui/react';
import banner_placeholder from '@assets/banner_placeholder.png';
const bannerDetails = [
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image:
    },
  {
    title: 'Pack it Up',
    subtitle: 'BE ACTIVE',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image:
    },
  {
    title: 'Fresh and Bold',
    subtitle: 'NEW COLLECTION',
    description: 'Add a pop up color to your outfit',
    callToAction: 'Discover now',
    image:
    },
]
export default function VerticalBanner() {
  
  return (
    <div className="">
    {bannerDetails.map(({title, subtitle, description, callToAction, image}) => (
    <div className="">
      <div className="flex items-center mx-auto ">
        <div className="flex flex-col min-w-[188px] md:min-w-[320px] basis-2/4 items-start md:overflow-hidden"><img src={image} alt="" /></div>
        <div className="flex flex-col items-center p-4 text-center md:p-10 md:flex md:basis-2/4">
          <p className="mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase">{subtitle}</p>
          <p className="mb-4 text-2xl font-medium md:text-4xl">{title}</p>
          <p className="mb-6">{description}</p>
          <SfButton>{callToAction}</SfButton>
        </div>
      </div>
    </div>
    )
    )
    }
    </div>
  );
}

// #endregion source

VerticalBanner.getLayout = ShowcasePageLayout;
