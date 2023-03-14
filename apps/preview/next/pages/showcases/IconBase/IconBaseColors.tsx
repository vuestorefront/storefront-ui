import { VsfIconThumbUp } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <>
      <VsfIconThumbUp className="text-red-600" />
      <VsfIconThumbUp className="text-purple-500" />
      <VsfIconThumbUp className="text-cyan-700" />
      <span className="text-gray-500">
        <VsfIconThumbUp />
      </span>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
