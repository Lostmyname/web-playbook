# @lostmyname/react-scripts

A fork of the [react-scripts](https://www.npmjs.com/package/react-scripts) package from the [create-react-app](https://github.com/facebookincubator/create-react-app) monorepo.

## Features

- [Application template](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/template)
- [webpack configs](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/config)

## Creating a new app

Boot up a new app using the [create-react-api](https://www.npmjs.com/package/create-react-app) CLI tool.

```sh
npm install -g create-react-app

create-react-app --scripts-version @lostmyname/react-scripts my-app
cd my-app/
npm start
```

## Maintenance

### Releasing a new version

Submit changes in a PR. Once they're merged into master

```sh
npm version <major|minor|patch>
npm publish
git push
```

### Upstream changes

It's a good idea to assess and stay up-to-date with upstream changes.

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
