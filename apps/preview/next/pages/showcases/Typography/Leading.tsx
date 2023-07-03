import { ShowcasePageLayout } from '../../showcases';

export default function Leading() {
  return (
    <div className="prose">
      <span className="lead">Leading text</span>
    </div>
  );
}

// #endregion source
Leading.getLayout = ShowcasePageLayout;
