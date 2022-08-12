import Breadcrumbs from "~/output/blocks/Breadcrumbs.lite";


export default function ExampleBreadcrumbs() {
  return (
    <div className="ml-4 mt-4">
      <Breadcrumbs breadcrumbs={[{name:"Page 1", link:"/page1"}]} />
    </div>
  );
}
