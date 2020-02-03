/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require("ts-jest/presets");

// eslint-disable-next-line no-undef
module.exports = {
  ...tsjPreset,
  setupTestFrameworkScriptFile: `${__dirname}/jest/setupTests.js`,
  moduleNameMapper: {
    ...tsjPreset.moduleNameMapper,
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `${__dirname}/jest/fileMock.js`,
    "\\.(css|less)$": `${__dirname}/jest/styleMock.js`,
  },
};
