# web-playbook

> _(noun)_ a book containing a team's strategies and plays

This repo is the foundation of how we build for the web. It documents, by example, our key plays (architectural patterns for building web apps). In addition the playbook provides a single unified infrastructure.

So this is a living project: the tooling in this repo powers our web applications day to day, and all our architectural patterns are tried, tested and documented here first - this is their canonical home.

You can [run the playbook locally](CONTRIBUTING.md#development) or use it to [generate a new app or playground](#creating-a-new-app). The generated app comes complete with tooling and boilerplate code, ready for you to start building your next project or proof of concept immediately.

## Packages

- [react-scripts (infrastructure)](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/)
- [react-scripts/template (architecture)](https://github.com/lostmyname-labs/create-lmn-app/tree/master/packages/react-scripts/template)

## Creating a new app

Boot up a new app using the [create-react-app](https://www.npmjs.com/package/create-react-app) CLI tool.

```sh
npm install -g create-react-app
create-react-app --scripts-version @lostmyname/react-scripts my-app
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to get up and running in your dev environment and how to make contributions.
