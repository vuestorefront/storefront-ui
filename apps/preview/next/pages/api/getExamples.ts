import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileContents = await fs.readdir(path.join(process.cwd(), 'pages', 'examples'), 'utf8');

  res.status(200).json(
    fileContents
      .map((f) => f.split('.')[1] === 'tsx' && f.split('.')[0])
      .filter(Boolean)
      .sort(),
  );
}
