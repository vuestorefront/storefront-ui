export const isBrowser = typeof window !== 'undefined';
export const isReduceMotionEnabled = isBrowser && window?.matchMedia('(prefers-reduced-motion: reduce)').matches;

declare global {
  interface Navigator {
    userAgentData?: {
      platform: string;
      brands: {
        brand: string;
        version: string;
      }[];
    };
  }
}

function testPlatform(re: RegExp) {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(window.navigator['userAgentData']?.platform || window.navigator.platform)
    : false;
}

function testUserAgent(re: RegExp) {
  if (typeof window === 'undefined' || window.navigator == null) {
    return false;
  }
  return (
    window.navigator['userAgentData']?.brands.some((brand: { brand: string; version: string }) =>
      re.test(brand.brand),
    ) || re.test(window.navigator.userAgent)
  );
}

export const isMac = testPlatform(/^Mac/i);
export const isAndroid = testUserAgent(/Android/i);
export const isSafari = testUserAgent(/^((?!chrome|android).)*safari/i);
