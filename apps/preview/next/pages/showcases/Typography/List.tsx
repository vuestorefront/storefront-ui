import { ShowcasePageLayout } from '../../showcases';

export default function List() {
  return (
    <ul className="prose">
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </ul>
  );
}

// #endregion source
List.getLayout = ShowcasePageLayout;
