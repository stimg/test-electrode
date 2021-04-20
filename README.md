# Building large react apps

By Emmanuel Henri
https://www.linkedin.com/learning/react-building-large-apps

Use electrode lib for the application.
> "Electrode is a platform for building universal React/Node.js applications with standardized structure, best practices, and modern technologies baked in. Electrode focuses on performance, component reusability, and simple deployment to multiple cloud providers—so you can focus on what makes your app unique."
https://www.electrode.io

### Install environments and yeoman
     sudo npm i -g yo generator-electrode xclap-cli

Install boiler plate with the yeoman:

    yo electrode

My config: 
```
? Application Name large-react
? Description Building large react application
? Project homepage url 
? Which framework for the server? HapiJS
? Author's Name Alexey Zerkalenkov
? Author's Email a.zerkalenkov@smart-image.eu
? Author's Homepage 
? Package keywords (comma to split) 
? Would you like to make a Progressive Web App? Yes
? Use double quotes or single quotes? '
? Would you like to create a new directory for your project? No
? Would you like to generate .flowconfig for flow usage? No
? Would you like to enable critical CSS? No
? Would you like to enable support for CSS Module (requires postcss)? No
? Would you like to enable postcss for processing CSS? No
? Would you like to use jest for unit tests? Yes
? Would you like to use mocha? Yes
? Would you like to use typescript? No
? Would you like to use sinon? Yes
? Would you like to use eslint? Yes
? GitHub username or organization stimg
? Your email (optional): a.zerkalenkov@smart-image.eu
? Your website (optional): 
? Which license do you want to use? Apache 2.0
```

Use electrode electrify to visualize the sizes of node modules and assets:
https://github.com/electrode-io/electrode-electrify

This is a great tool for code optimization and performance improvements in the big applications.

## Project structure and modularization

### Elements of the enterprise architecture

1. Container (Docker) -- contains everything you need for development.
2. CI / CD (Travis) -- checks you code fro errors.
3. NPM Modules
4. State management -- Redux
5. SSR -- server-side rendering, improve performance
6. PWA -- progressive web app, offer capabilities like native apps (offline, push messages)
7. Testing an linting (Jest, Mocha, Karma, ESLint)

### Project organization
I. By types of files:
   - Components
   - Actions
   - Reducers
   - ...

II. By features or functions:
   - Contact List --> Component, Actions, Reducers, ...
   - Company list --> Component, Actions, Reducers, ...
   - Add new contact -->  Component, Actions, Reducers, ...
   - ...

III. Lifting state up:
```
                                                  |--- props ---> Component
 Contact List --> Container (State connection) -->|--- props ---> Component
                                                  |--- props ---> Component                                
```

### Modules with NPM packages.

You can create a separate NPM packages for some part of your code, publish them to the npmjs.org and use it in your projects. There are public and private modules.

### Docker containers

Use Docker containers with the preinstalled environmment to be sure you app development can be performed on any OS.

## Application management

### State management
Use Redux or MobX to manage application state.

**Redux** promotes the use of functional programming, immutability, one store, and unit directional data flow.

**MobX** promotes the use of object-oriented programming, mutable state, which is the opposite of Redux, and observables to sync data. 

You can also use Redux with Thunk or Saga.

With Thunk, you can do this, but unfortunately, there is the issue of side effects which goes against the goal of Redux and its pure functional approach.

**Redux-Saga** Library was built to support needs like API calls and make them predictable. 

You could use Thunk if you prefer a simpler approach and do not need the benefits of Saga, but as we're talking about a growing application where actions become much more involved, Saga is a better choice. 

### Testing

Use Jest, Mocha, Enzym, Chai.

Use Travis CI (http://travis-ci.org) to set up autmatical testing when you change code and make pushes into the repository.
