import { ShowcasePageLayout } from '../../showcases';

export default function Table() {
  return (
    <div className="prose">
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content</td>
            <td>Content</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>Content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// #endregion source
Table.getLayout = ShowcasePageLayout;
