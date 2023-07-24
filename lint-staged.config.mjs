import path from "node:path";

const buildEslintCommand = (filenames) =>
  `pnpm lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const config = {
  "**/*.{js,jsx,ts,tsx,mdx}": [buildEslintCommand],
  "**/*": "prettier --write --ignore-unknown",
};

export default config;
