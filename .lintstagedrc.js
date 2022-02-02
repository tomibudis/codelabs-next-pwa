module.exports = {
  '**/*.js?(x)': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '**/*.{css,scss}': () => `npx stylelint **/*.{css,scss}`,
}