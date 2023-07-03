import { ShowcasePageLayout } from '../../showcases';

export default function Figure() {
  return (
    <figure className="prose">
      <img src="http://localhost:3100/@assets/card-3.png" alt="Example of marketing card" />
      <figcaption>The Nike Air Max 270 in action</figcaption>
    </figure>
  );
}

// #endregion source
Figure.getLayout = ShowcasePageLayout;
