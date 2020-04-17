# Test project for new Energima frontend stack


Here I will test out a few technologies to learn them and see if we can use them at Energima

## Process

### Github Flow

As a workflow I suggest we use Github flow. This aligns well with Cognite and 
we can include tools in the build process that also follow this model, like bots
that make pull requests when dependencies has been updated/has vulnerabilities.

https://guides.github.com/introduction/flow/ 

## Design

### Ant Design Pro

The component library in Cognite is based on Ant Design so it makes sense for us to
use it on our end to complement the Cognite components.

https://pro.ant.design/

### Figma

We need a simple tool to create ui mockups and prototypes. I have had good experience 
with Figma for this before.

https://www.figma.com/

## Languages

The Enigma frontend code is written in Typescript. Typescript is a superset of Javascript
that compiles to Javascript and add typechecking and other useful features.

https://www.typescriptlang.org/

## Quality

### ESLint

We use ESLint for static code checking with the standard settings from create-react-app.
This can be extended later.

https://eslint.org/

### Prettier

Prettier is an opinionated code formatter used before we check in code.

https://prettier.io/

### Storybook

Storybook is used by Cognite to showcase their UI components, but is also a great tool 
to use during our internal development. We use it for manual testing of edge cases 
during development and to communicate our components internally.

https://storybook.js.org/

### Loki

Visual regression test for storybook

https://github.com/oblador/loki

### Cypress

We want to include a simple integration test in our stack. The integration test will
log into a running instance, perform some actions as a normal user would and record 
the results.

https://www.cypress.io/

### Jest

Jest is the standard testing framework for React, built by Facebook. This is also in 
use by Cognite.
 
https://jestjs.io/

### Jest-when

Jest when simplifies function mocking. 

https://www.npmjs.com/package/jest-when

### React testing library

React testing library is a light-weight solution to test react components by rendering
them to dom nodes. The Cognite tests still uses Enzyme for but I belive React testing
framework is better for us. 

https://testing-library.com/docs/react-testing-library/intro

###

## Libraries

### Redux toolkit

Redux toolkit simplifies React Redux development.

https://redux-toolkit.js.org/

## Utilities

### Lodash

Lodash is a simple utility library with many useful everyday functions.

https://lodash.com/

## Automation

### Github Continuous Integration 

We use Github to run our tests after each checkin to master. This is included for 
free with Github and integrates easily. If the test goes well we publish an 
updated storybook.

https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/about-continuous-integration

### Dependabot

Dependabot regularly checks the version number of our dependencies and creates a pull 
request with a new version if it finds one that pass our tests.

https://dependabot.com/

## Tools

### Git

We use Git for version control. It is important that our team are comfortable with
advanced concepts in Git like squashing commits, amending commits and interactive 
rebase. 

https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history

### Github desktop

Simplify your git development workflow.

https://desktop.github.com/