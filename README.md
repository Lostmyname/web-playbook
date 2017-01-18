# web-playbook

> _(noun)_ a book containing a team's strategies and plays

This repo is the foundation of how we build for the web. It documents, by example, our key plays (architectural patterns for building web apps). In addition the playbook provides a single unified infrastructure.

So this is a living project: the tooling in this repo powers our web applications day to day and all our architectural patterns are tried, tested and documented here first - this is their canonical home.

You can [run](#development) the playbook locally or use it to [generate](#creating-a-new-app) a new app or playground. The generated project comes with tooling and boilerplate code pre-packaged and ready to boot.

## Contents 

- [Infrastructure](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/)
- [Architecture](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/template)

## Creating a new app

Boot up a new app using the [create-react-app](https://www.npmjs.com/package/create-react-app) CLI tool.

```sh
npm install -g create-react-app

create-react-app --scripts-version @lostmyname/react-scripts my-app
cd my-app/
npm start
```

## Development

The repo is a fork of the [create-react-app](https://github.com/facebookincubator/create-react-app) monorepo but only contains  a custom version of the [react-scripts](https://www.npmjs.com/package/react-scripts) package.

### Running locally

Before publishing to npm you can develop locally:

```sh
cd packages/react-scripts
npm install
node ./bin/react-scripts <start|build|test>
```

(The paths configuration [detects](https://github.com/lostmyname-labs/react-scripts/blob/master/packages/react-scripts/config/paths.js#L79) if react-scripts is being run in development).

### Releasing a new version

Submit changes in a PR. Once they're merged into master:

```sh
npm version <major|minor|patch>
npm publish
git push
```

### Upstream changes

It's a good idea to assess and stay up-to-date with upstream changes:

```sh
git remote add upstream https://github.com/facebookincubator/create-react-app.git

## Merge upstream changes into a new branch so that the changes can be reviewed in a PR.
git checkout -b feature/upstream
git merge upstream master

## The upstream repo contains other packages, which have been deleted from this repo.
## This command removes changes to them from the merge.
git status --porcelain | awk '{if ($1=="DU") print $2}' | xargs git rm

## Select changes that won't break @lostmyname/react-scripts
git commit ''
```
