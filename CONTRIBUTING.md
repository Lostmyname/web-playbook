## Contributing

The repo is a fork of the [create-react-app](https://github.com/facebookincubator/create-react-app) monorepo but only contains  a custom version of the [react-scripts](https://www.npmjs.com/package/react-scripts) package.

### Running locally

Before publishing to npm you can develop locally:

```sh
cd packages/react-scripts # run tooling from its own folder
npm link && npm link @lostmyname/react-scripts # make package available to itself in template/ (also installs own dependencies)
node ./bin/react-scripts <start|build|test> # run own npm bin scripts
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
git fetch upstream
git merge upstream/master

## The upstream repo contains other packages, which have been deleted from this repo.
## This command removes changes to them from the merge.
git status --porcelain | awk '{if ($1=="DU") print $2}' | xargs git rm

## Select changes that won't break @lostmyname/react-scripts
git commit ''
```
