import { VsfIconHome } from '@storefront-ui/react/components/VsfIcons/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <VsfIconHome size="sm" />
      <VsfIconHome />
      <VsfIconHome size="lg" />
      <VsfIconHome size="xl" />
      <VsfIconHome size="2xl" />
      <VsfIconHome size="3xl" />
      <VsfIconHome size="4xl" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
