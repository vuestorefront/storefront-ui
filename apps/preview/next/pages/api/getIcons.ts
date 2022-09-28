import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const iconPath = path.join(
    process.cwd(),
    '..',
    '..',
    '..',
    'node_modules',
    '@sfui',
    'sfui',
    'frameworks',
    'react',
    'components',
    'VsfIcons',
  );
  const fileContents = fs.readdirSync(iconPath, 'utf8').reduce((prev, current) => {
    if (current.endsWith('.tsx')) {
      const currentArray = current.split('.') as never[];
      return prev.concat(currentArray[0]);
    }
    return prev;
  }, []);

  res.status(200).json(fileContents);
}
