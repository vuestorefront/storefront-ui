import VsfDivider from '../../output/blocks/VsfDivider/VsfDivider';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDivider />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
