---
title: Environment Setup
seriesTitle: Full Stack Product Series
seriesSlug: full-stack-product-00-building-a-full-stack-product
seriesPrev: full-stack-product-00-building-a-full-stack-product
date: '2020-06-24'
description: A tutorial series on how to build a full stack product end-to-end with React Native and Serverless
tags: ['react', 'js', 'tutorials', 'react native', 'serverless']
cover: './preview.png'
---
Ready to start some development? Excellent! Before we can dive in, we need to get the local development environment setup. These will set us up to write code, test, and cycle quickly. 

## Grab your Mac

We will be working off of a current generation of Mac Book Pro. One advantage to working off a Mac is the ability to dive into XCode when we need to do some specifics around iOS app development. There are certainly ways to get around this if you prefer a Windows or Linux computer, but the fastest way to get running quickly for the widest set of development today is on a Mac. 

## Modern Javascript and Friends

The majority of these tutorials will be done in Javascript and the associated ecosystem. If you are not familiar with it, make sure to take some time to dive into the basics:

1. [The Modern JavaScript Tutorial](https://javascript.info/) is a pretty good spot to start. It covers a lot of ground and can be a bit overwhelming without context.
2. If you are just starting, have this open in a tab and refer to it when you are not sure about a concept. Use [React Native Express](http://www.reactnativeexpress.com/environment) as a quick primer on the basics of modern Javascript and React Native. Sections 1-4 is a solid set of scaffolding, but it is sparse, so make sure you use other resources to dig in deeper. 
3. We will be using [TypeScript](https://www.typescriptlang.org/) as an additional layer on top of Node. While there's a lot of bells and whistles here, we are really going to use it mainly for keeping track of what objects are getting thrown around and linting purposes. Check out the [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) tutorial.
4. We will be using [npm](https://npmjs.com) to manage libraries and packages. If you have not used it before, it will be important familiarize yourself. Check out [A Beginner’s Guide to npm, the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/) and [How To Use Node.js Modules with npm and package.json](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-modules-with-npm-and-package-json) as a start.

## Javascript Environment
I strongly recommend setting up [nodenv](https://github.com/nodenv/nodenv) as a way to isolate and control exactly what version of Node and other libraries you're using. This is not required, but definitely can help. We will be using the current latest version of Node in this series.

## Editor
What editor to use? The current standard editor for these types of things is [Visual Studio Code](https://code.visualstudio.com/). Its a pretty solid editor that will provide a lot of the niceties of a full IDE while remaining pretty light. After installing it, there's a few decent extensions that are worth checking out (and installing):
* [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Checkpoint

Before moving on, you should be able to test your environment works.

* [ ] Answer the questions:  What version of Node are you using? Is it a system version?
* [ ] Create a simple "Hello world" script
* [ ] Create a simple project that uses axios to print a random poem from Poemist (hint: `GET https://www.poemist.com/api/v1/randompoems`)