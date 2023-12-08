import { ShowcasePageLayout } from '../../showcases';

export default function Headings() {
  return (
    <div className="prose">
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
    </div>
  );
}

// #endregion source
Headings.getLayout = ShowcasePageLayout;
