export const dataTestDisplay = (id) => {
  return process.env.NODE_ENV === "production" ? undefined : id;
};
