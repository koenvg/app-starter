import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TableComponent } from './TableComponent';
import { withTheme } from './withTheme';

addDecorator(withInfo({ inline: true, TableComponent }));
addDecorator(withTheme);

addParameters({
    options: {
      /**
       * name to display in the top left corner
       * @type {String} 
       */
      name: 'Component Repository',
    },
  });

// automatically import all files ending in *.stories.tsx
configure((require as any).context('../src', true, /\.stories\.tsx?$/), module)