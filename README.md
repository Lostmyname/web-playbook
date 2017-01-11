A fork of the `react-scripts` package from `create-react-app` with an
application template and webpack configurations for LMN projects.

## Creating a new app

```
npm install -g create-react-app

create-react-app --scripts-version @lostmyname/react-scripts my-app
cd my-app/
npm start
```

## Maintenance

### Releasing a version

Submit changes in a PR. Once they're merged into master

```
npm version <major|minor|patch>
npm publish
git push
```

### Upstream changes

It's a good idea to assess and stay up-to-date with upstream changes.

```
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
