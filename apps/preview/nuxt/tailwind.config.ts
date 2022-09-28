import { Config } from 'tailwindcss';
import config from '@sfui/tailwind-config/index.json';

export default <Config>{
  ...(config as unknown as Config),
};
