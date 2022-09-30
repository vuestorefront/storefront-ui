import { ReactElement } from 'react';
import { ExampleLayout } from '~/layouts/ExamplesOld';

function ExamplePage() {
  return <div>This is page with examples of all available components</div>;
}

export function ExamplePageLayout(page: ReactElement) {
  return <ExampleLayout>{page}</ExampleLayout>;
}

ExamplePage.getLayout = ExamplePageLayout;

export default ExamplePage;
