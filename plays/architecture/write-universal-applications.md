# Write universal applications

Universal JavaScript is code that can be run on the server or client.

This possibility allows us to build most of the application without being concerned about what environment it will be executed in.

There are of course differences between how an app is treated on the server versus the client so split code into 3 folders:

```
📁 client
📁 server
📁 universal
```

Write most application code in the universal folder. The client and server code is more about how to resolve the application in a way that works in their respective environments.

A helpful rule of thumb is to never import modules from another enivornment.

## Integrating environments

Where state needs to be shared between client and server use libraries that can are able to persist state.

For example, [react-router](https://github.com/ReactTraining/react-router) can resolve the location state from `req.url` or `window.location`. It provides environment specific modules for this.

## Universal rendering in practise

This figure shows univeral rendering, state resolution and state rehydration using [react](https://facebook.github.io/react/), [react-router](https://github.com/ReactTraining/react-router), [redux](http://redux.js.org/) and [react-jobs](https://github.com/ctrlplusb/react-jobs).

![Universal technical diagram](https://i.imgur.com/jYSe0ke.png)
