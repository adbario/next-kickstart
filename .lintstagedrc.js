const path = require("path");

const buildEslintCommand = (filenames) =>
  `pnpm lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "**/*.{js,jsx,ts,tsx,mdx}": [buildEslintCommand],
  "**/*.ts?(x)": () => "pnpm check-types",
  "**/*": "prettier --write --ignore-unknown",
};
