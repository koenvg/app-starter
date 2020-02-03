
# Intro

## Requirements
- [nvm](https://github.com/nvm-sh/nvm)
- Run his once nvm is installed `nvm install 12`
- [yarn](https://yarnpkg.com/en/docs/install)

## Major technologies used
- Typescript
- React

## Architecture
- packages/web = Top level application which will wire everything together
- packages/components = Component package which contains all shared components as wel as the main styling
- packages/typescript-config = General settings for typescript, eslint, jest to be used by all other packages
- packages/api-client = This is the GrapQL client.
- packages/api-server = This is the GraphQL back-end for all services.


## Running locally
The setup uses yarn workspaces and the application is divided into separate packages in order to keep everything as clean as possible.

Install dependencies
```
yarn
```

Build the application once, after that you can always use start
```
yarn build
```

Launch the application 
```
yarn start
```

## Unit Testing 

We use jest as a test runner and the base configuration for this can be found in `typescript-config`.
Each package will require its own jest.config.js file in order to run tests.

you can use one of the following commands at top level or in packages which support unit tests.
```
yarn test
yarn test --watch
yarn test --coverage
```

### jest.config.js
```
module.exports = {
  name: 'Components',
  preset: 'typescript-config',
};
```

## VScode
Base settings are committed so all developers work in a similar fashion and have the same guidelines.
Following plugins are recommended but not mandatory when working with this repository. They are listed from most useful to least.
- [ESLint](https://github.com/Microsoft/vscode-eslint)
- [Styled components](https://github.com/styled-components/vscode-styled-components.git)
- [GitLens](https://github.com/eamodio/vscode-gitlens)
- [jest](https://github.com/jest-community/vscode-jest)
- [Bracket Pair Colorizer](https://github.com/CoenraadS/BracketPair)

