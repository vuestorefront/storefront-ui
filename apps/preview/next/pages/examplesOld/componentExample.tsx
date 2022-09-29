import Button from '../../output/blocks/Button';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  return (
    <div className="e-page">
      <div className="e-page-component">
        Your component example here <Button text="yay my component has been mounted" />
      </div>
      <div className="e-page-controls">
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here<br />
        your controls here
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
