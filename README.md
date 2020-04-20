# Test project for new Energima frontend stack


Here I will test out a few technologies to learn them and see if we can use them at Energima

## Tasks

<blockquote class="trello-card"><a href="https://trello.com/c/VR5gddOt/17-learn-quality-tools">Learn Quality tools</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>

## Process

### Github Flow

As a workflow I suggest we use Github flow. This aligns well with Cognite and 
we can include tools in the build process that also follow this model, like bots
that make pull requests when dependencies has been updated/has vulnerabilities.

https://guides.github.com/introduction/flow/ 

## Design / Prototyping

### Paper prototyping

We use paper prototyping for early stage contextualizing.

https://www.uxpin.com/studio/blog/paper-prototyping-the-practical-beginners-guide/

### Figma

We need a simple tool to create ui mockups and prototypes. I have had good experience 
with Figma for this before.

https://www.figma.com/

## Languages

### Typescript

The Enigma frontend code is written in Typescript. Typescript is a superset of Javascript
that compiles to Javascript and adds typechecking, Optional chaining, Nullish Coalescing 
and other useful features.

https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/

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

### Istanbul

Istanbul is a test coverage tool that is build into Jest. We use it to automatically
add a test coverage report to each pull request.

https://istanbul.js.org/

## Libraries

### Ant Design Pro

The gui component library in Cognite is based on Ant Design so it makes sense for us to
use it on our end to complement the Cognite components.

https://pro.ant.design/

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

### Visual studio code

Visual studio code is a cross platform and popular development environment.

https://code.visualstudio.com/

### Trello

Not completely sure about this one, but we need some kind of tool to plan and coordinate
our work. I have often used Trello for this.

https://trello.com/

### Create react app

Creates a standard frontend pipeline that is easily upgradable by upgrading the 
version of react-scripts.

https://reactjs.org/docs/create-a-new-react-app.html

### Bit

Bit is an open-source cli tool for collaborating on isolated components across projects 
and repositories. We can use this increase code reuse for our frontend.

https://bit.dev

### Git

We use Git for version control. It is important that our team are comfortable with
advanced concepts in Git like squashing commits, amending commits and interactive 
rebase. 

https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history

### Github desktop

Simplify your git development workflow.

https://desktop.github.com/

### Oh my ZSH!

Improve your terminal shell.

https://ohmyz.sh/

### Postman

Test and explore rest apis.

https://www.postman.com/

### Slack

Slack simplifies communication within a team and integrates well with other tools
in the toolchain.

https://slack.com/

### Chrome dev tools

Chrome DevTools is a set of web developer tools built directly into the Google Chrome 
browser. DevTools helps you identify problems and performance issues in your page.

https://developers.google.com/web/tools/chrome-devtools

### Redux DevTools

Redux devtools lets you debug you redux store in the browser.

https://chrome.google.com/webstore/detail/redux-devtools/

### React Developer Tools

React devtools lets you inspect react components in the browser.

https://chrome.google.com/webstore/detail/react-developer-tools

## Integrations

### Power BI

If needed we can integrate Power BI from microsoft in our interface, if it is easier
to create a business dashboard here.

## Web pages

* https://stackshare.io/
* https://www.thoughtworks.com/radar



