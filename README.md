# web-playbook

If you want to know how to build something for the world wide web at Lost My Name, this is your guide.

It documents, by example, our key plays (patterns for building web apps) and provides a single unified infrastructure.

This is a living project: the tooling in this repo powers our web applications day to day, and all our architectural patterns are tried, tested and documented first here - its their canonical home.

[Read more about it on Medium](https://medium.com/@danieljohngrant/introducing-playbook-8cc7e9efc8e8#.cfk6dlm66)

## The plays

**Prototyping**
- 🆕 [Create a new app (with plays included)](plays/prototyping/create-a-new-app.md)

**Architecture**
- ✏️️ [Create a new play](plays/architecture/create-a-new-play.md)
- 🌎 [Write universal applications](plays/architecture/write-universal-applications.md)

**Tooling**

- 📦 Build with zero config
- 💻 Run a development server

**Code**

- 🎛 Transpile from ES2017+ source code
- 📺 Lint code in IDEs and CI
- 🖌️ Polyfill code on a per browser basis

**Testing**

- 📟 Run E2E tests in real browsers

**Data**

- 📯 Declare data requirements in components

**Accessibility**

- 📲 Appear on smartphone home screens
- ⛑ Control title and meta data from within components

**Performance**

- 👀 Render React on the server
- ✂️ Code splitting
- 🏜 Bundling images and fonts
- 🔬 Analyse compiled code
- 🐘 Cache assets
- 😎 Provide offline support with a service worker

**Security**

- 👮 Mitigate ... (helmet and hpp)
- 🛂 Validate http requests
- 🚫 Handle errors

**Deployment**

- 🛤️ Running CI on Travis
- 🚀 Deploying to Heroku

## Credits

[create-react-app](https://github.com/facebookincubator/create-react-app) - our customised react-scripts package is forked from CRA. The CRA CLI tool is used to build new apps.

[react-universally](https://github.com/ctrlplusb/react-universally) - a great boilerplate from which some ideas were taken, mainly the emojis.

[express-generator](https://github.com/expressjs/generator)
