export const deprecationWarning = (componentName, msg) => {
  process.env.NODE_ENV !== "production" &&
    process.env.VUE_APP_NO_DEPRECATED_WARNINGS !== "no-deprecated-warnings" &&
    console.warn(`[StorefrontUI][${componentName}] ${msg}`);
};
