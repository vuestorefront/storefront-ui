import { ShowcasePageLayout } from '../../showcases';

export default function Quote() {
  return (
    <figure className="prose">
      <blockquote>Quote Text</blockquote>
      <figcaption>—Signature</figcaption>
    </figure>
  );
}

// #endregion source
Quote.getLayout = ShowcasePageLayout;
