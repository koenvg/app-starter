require("@testing-library/jest-dom/extend-expect");
require("jest-styled-components");

global.window.document.createRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => [],
    commonAncestorContainer: document.createElement("div"),
  };
};
