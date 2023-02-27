import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

import { promise as glob } from 'glob-promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileContents = await glob(path.join('**', '*.tsx'), {
    cwd: path.join(process.cwd(), 'pages', 'showcases'),
  });

  res.status(200).json(fileContents);
}
