const idCreator = function* () {
  let i = 0;
  while (true) yield i++;
};
const idsGenerator = idCreator();

export function generateId() { return idsGenerator.next().value; }