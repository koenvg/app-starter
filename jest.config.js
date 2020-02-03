// eslint-disable-next-line no-undef
module.exports = {
  projects: ["<rootDir>/packages/*"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  reporters: ["default", ["jest-junit", { outputDirectory: "reports" }]],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/lib/**",
    "!**/node_modules/**",
    "!**/generated/**",
    "!**/*.d.ts",
    "!**/*.stories.tsx",
    "!**/setupTests.ts",
    "!**/serviceWorker.ts",
    "!**/index.ts",
  ],
};
