import { ReactElement } from 'react';
import ShowcaseLayout from '../layouts/Showcases';

function ExamplePage() {
  return <div>This is page with examples of all available components</div>;
}

export function ShowcasePageLayout(page: ReactElement) {
  return <ShowcaseLayout>{page}</ShowcaseLayout>;
}

ExamplePage.getLayout = ShowcasePageLayout;

export default ExamplePage;
