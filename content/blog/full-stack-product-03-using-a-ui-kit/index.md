---
title: Using a UI Kit
seriesTitle: Full Stack Product Series
seriesIndex: 3
seriesSlug: full-stack-product-01-environment-setup
seriesPrev: full-stack-product-02-app-setup
date: '2020-06-27'
description: A tutorial series on how to build a full stack product end-to-end with React Native and Serverless
tags: ['react', 'js', 'tutorials', 'react native', 'serverless']
cover: './preview.png'
---
As you have gotten a chance to play a little with React Native, you may have noticed that it comes with a pretty barebones UI toolkit. At first is enough to get away with the basics, but can be a lot of work to later update with consistent branding (event worse for future rebrandings) and expand to create dynamic experiences that most people have come to expect. 

In this section we will add a UI kit that will give us some flexibility for consistent and useful UIs. 

## UI Kitten

There are a number of different UI kits for React Native available, we will be working with [UI Kitten](https://akveo.github.io/react-native-ui-kitten/). It is a nice component library based on the [Eva Design System](https://eva.design/). It makes it easy to work with designs created in [Sketch](https://www.sketch.com/), which allows designers to mock up and wireframe UIs before writing code.

Start a new React Native spike and Follow the [Manual Installation](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#new-apps) tutorial to get the basics for UI Kitten installed. You _can_ go with the fully automated version, but this is a good logical fragmentation point to understand what react native. Continue though the "Branding" and "Icon Package" sections minimally.

⚠️ Make sure to read about how to install the svg package.

Take some time to play with light vs dark themes, and generating your own. Read though the [Components Overview](https://akveo.github.io/react-native-ui-kitten/docs/components/components-overview) to get a sense for what additional components are available and try some of them out.

# TypeScript Errors & Warnings
In VS Code you should see some TypeScript issues presented. It will be pretty common to get TypeScript errors along the way throughout this series. Take some time to try to resolve them, but since they are primarily there for developer benefit, timebox this effort to stay on track.

# Checkpoint

Before moving on, you should be able to:
* [ ] See the updated UI with the custom branding
* [ ] Display an icon
* [ ] Resolve some of the TypeScript issues

# Coach Me

Follow the same process as above to:
* Integrate UI Kitten into your CoachMe app
* Configure the Application Root
* Create a branding for your app (the reference app will use the default orange theme from Eva)
* Display a welcome message
* Display a custom LoginButton component

## Reference Product

Take a look at the reference product [CoachMe-App @ 94d1c8b](https://github.com/bobbrez/CoachMe-App/tree/94d1c8b012a6a984002318270622e4ba94bd9309) to see if you have something similar.

### Refactoring

Internalizing concepts like Sandi Metz's [Breaking Up the Behemoth](https://www.sandimetz.com/blog/2017/9/13/breaking-up-the-behemoth) and Martin Fowler's [Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html), we should start with the simplest thing possible and evolve the design as necessary. There are a series of commits that do this for the home screen and login button.

Reviewing the [Reference App's History](https://github.com/bobbrez/CoachMe-App/commits/master):

* [38f1217](https://github.com/bobbrez/CoachMe-App/commit/38f12172f54dc885575aa12289916257e54b5449) - Adds the UI Kitten packages and custom template definition.
* [3850803](https://github.com/bobbrez/CoachMe-App/commit/38508033799a24600b5e9eaad65445d5590bedde) - Starts to implement UI Kitten for the app, but continues to use React Native's components. It is possible to mix and match UI components, but it can cause complexities with theming.
* [7edd7c9](https://github.com/bobbrez/CoachMe-App/commit/7edd7c9949eb5f675bf2b3c7251f998c1a54cbed) - Cut over to see the UI Kitten's `Text` component in action. Looks much better.
* [5e3db1b](https://github.com/bobbrez/CoachMe-App/commit/5e3db1b29a6dadf5cc3fc673609ca5cb89425a49) - Just adds some welcome text. Notice how UI Kitten's `Text` component has a `category` parameter, React Native's does not.
* [9e10a7e](https://github.com/bobbrez/CoachMe-App/commit/9e10a7e02b4878268d006c8105105d973fca482b) - We create a new component for the LoginButton. If this were just a simple component, using `Button` directly is reasonable. As a component gains more complexity it makes sense to break it out into a custom component (i.e. `LoginButton`).
* [265e863](https://github.com/bobbrez/CoachMe-App/commit/265e863f45ca0b84cf21418783c19b870f0c5daf) - Add a icon to the button. In this case, the `LoginIcon` is a wrapper for `Icon`. The `accessoryLeft` property of `Button` looks for a functional component, _not_ an instance (review the [Button API](https://akveo.github.io/react-native-ui-kitten/docs/components/button/api#button) for more details).
* [d50c73b](https://github.com/bobbrez/CoachMe-App/commit/d50c73b171538296a825e1df2f8490da55823463) - TypeScript is going to throw an error (`Parameter 'props' implicitly has an 'any'`) for `LoginIcon`. To fix this error we need to give it a parameter definition. The easiest way is to do this with the existing `IconProps` type from UI Kitten. If the library did not have a definition, we would need to create one or ignore the error.
* [eab4d8d](https://github.com/bobbrez/CoachMe-App/commit/eab4d8dcf50a864d5028e4cddff4b0070c63acc2) - The button is just a bit too close to the text. We add an inline style here to get some space. Be careful with inline styles, they can become a bit of a mess if they are shotgunned throughout a project.
* [65827a0](https://github.com/bobbrez/CoachMe-App/commit/65827a03aec8e476b9d1f72314a3f615960a703c) - Actually utilize the custom theme
* [08ad82d](https://github.com/bobbrez/CoachMe-App/commit/08ad82d2f7c2f46bb6ace4161fb739192d4a409d) - The `App` component is becoming pretty heavy with a lot of responsibilities. Refactoring out a `HomeScreen` component gives a clearer separation of concerns.
* [a43ce8a](https://github.com/bobbrez/CoachMe-App/tree/a43ce8a403cb8ffbadb96140e001461b07d6ef7a) - Refactoring the `App` component to be a bit more uniform with a more terse function definition.
* [94d1c8b](https://github.com/bobbrez/CoachMe-App/commit/94d1c8b012a6a984002318270622e4ba94bd9309) - Pulling out the `HomeScreen` component into a separate file reduces the complexity for the `App` component and creates a clearer separation of concerns. The `components` directory is a common place to find these types of things.

# Checkpoint

Before moving on, you should be able to:
* [ ] Run the CoachMe app in the iOS simulator 
* [ ] Run the CoachMe app in the Android simulator
* [ ] Launch the CoachMe app on a live device via the Expo app
* [ ] Have a welcome message and login button.