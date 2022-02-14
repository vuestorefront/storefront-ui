export const dataTestDisplay = (id) => {
  if (process.env.NODE_ENV === "production") return undefined;
  return id;
};
