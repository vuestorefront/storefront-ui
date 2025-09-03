import { ShowcasePageLayout } from '../../showcases';

export default function Paragraph() {
  return <p className="prose">Paragraph text</p>;
}

// #endregion source
Paragraph.getLayout = ShowcasePageLayout;
