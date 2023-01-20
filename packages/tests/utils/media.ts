/// <reference path="../../../node_modules/@percy/cypress/types/index.d.ts" />
type FixtureEncoding = Parameters<typeof cy['fixture']>[1];

export const useImage = (path: string, encoding: FixtureEncoding = 'base64') =>
  cy.fixture(path, encoding).then((img) => {
    if (encoding === 'base64') return base64Image(img);
    return img;
  });

const base64Image = (base64: string) => `data:image/png;base64,${base64}`;
