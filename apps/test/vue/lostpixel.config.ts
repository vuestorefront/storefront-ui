import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  customShots: {
    currentShotsPath: './cypress/screenshots',
  },
  // OSS mode
  generateOnly: true,
  failOnDifference: true,
};
