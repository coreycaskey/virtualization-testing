export default {
  // DO NOT pass filename arguments for tsc:
  // https://github.com/okonet/lint-staged?tab=readme-ov-file#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any_filename_arguments
  "src/**/*.{js,jsx,ts,tsx}": () => [
    "npm run tsc",
    "npm run lint -- --no-warn-ignored",
  ],
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": () => "npm run format",
};
