export const atlasRepoURL: string = 'https://github.com/geniusyield/TODO'
export const exampleProjectURL: string = `${atlasRepoURL}/examples/bet-ref`
export const docsRepoURL: string = 'https://github.com/geniusyield/atlas-docs'

// TODO: Review the following constants (and their usage).
export const description =
  "My detailed reading notes from computer science books";
const isProduction = process.env.NODE_ENV === "production";
export const assetPrefix = isProduction ? "/reading-notes" : "";
