import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { showcasesFilter } from '@storefront-ui/preview-shared/utils/showcases.utils';

import { promise as glob } from 'glob-promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileContents = await glob(path.join('**', '*.tsx'), {
    cwd: path.join(process.cwd(), 'pages', 'showcases'),
  });

  res.status(200).json(showcasesFilter({ files: fileContents, ext: '.tsx' }));
}
