import React from 'react';
import { ThemeProvider, styled } from '../src/components/themeProvider/ThemeProvider';


const Container = styled.div`
#story-root {
  display: flex;
  margin: 2em;

  > div {
    display: flex;
  }
}
`;

export const withTheme = (storyFn) => <ThemeProvider><Container>{storyFn()}</Container></ThemeProvider>;
