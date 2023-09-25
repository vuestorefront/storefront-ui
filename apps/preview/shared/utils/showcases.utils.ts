const ignoredFiles = ['Alert/Alert'];

export const showcasesFilter = ({ files, ext }: { files: string[]; ext: string }) =>
  files.filter((filePath) => !ignoredFiles.find((ignoredFile) => filePath.includes(`${ignoredFile}${ext}`)));
