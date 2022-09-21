import { ReactElement } from "react";
import { ExampleLayout } from "~/layouts/Examples";

const ExamplePage = () => {
  return <div>This is page with examples of all available components</div>;
};

export const ExamplePageLayout = (page: ReactElement) => <ExampleLayout>{page}</ExampleLayout>;

ExamplePage.getLayout = ExamplePageLayout;

export default ExamplePage;
