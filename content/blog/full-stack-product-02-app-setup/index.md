---
title: App Setup
seriesTitle: Full Stack Product Series
seriesSlug: full-stack-product-01-environment-setup
seriesPrev: full-stack-product-00-building-a-full-stack-product
date: '2020-06-24'
description: A tutorial series on how to build a full stack product end-to-end with React Native and Serverless
tags: ['react', 'js', 'tutorials', 'react native', 'serverless']
cover: './preview.png'
---
Now lets start getting something up. I like to start with the pieces closest to the user, generally the UI. Starting UI first allows for user testing and getting a better sense of what needs to be done earlier, before working on more integrated pieces. 

_A quick aside_: A tremendous amount of time can, and probably should, be spent understanding _what_ and _why_ to build something before _how_ to build it. At the same time, a blank slate will have few insights to offer. This is where rapid prototyping can offer a ton of support. [Paper prototyping](https://www.uxpin.com/studio/blog/paper-prototyping-the-practical-beginners-guide/), [Sketch](https://www.sketch.com/) and [InVision](https://www.invisionapp.com/), or even [good ol' PowerPoint](https://keynotopia.com/guides-ppt/) are all great ways to move quickly and get _something_ in front of humans for feedback. Once there is a good understanding, starting to prototype in something "more real" can have huge benefits as you move along.

## Hello React Native

Follow [Setting up the development environment](https://reactnative.dev/docs/environment-setup) from React Native to get your machine setup with local development. Since we're not looking to use any custom or native libraries off the start, the `Expo CLI Quickstart` should be a fine start. In a future tutorial we will be ejecting from Expo, but it is a good idea to start as simple as possible first.

When setting up the app with Expo for the first time, choose the `blank (TypeScript)` option.
```
❯ expo init CoachMe
? Choose a template:
  ----- Managed workflow -----
  blank                 a minimal app as clean as an empty canvas
❯ blank (TypeScript)    same as blank but with TypeScript configuration
  tabs                  several example screens and tabs using react-navigation
  ----- Bare workflow -----
  minimal               bare and minimal, just the essentials to get you started
  minimal (TypeScript)  same as minimal but with TypeScript configuration
```

## Running your app

The React Native project you generated has a lot under the hood. We will explore it in more detail in a future section, but at this point you should be able to run the hello world app that you generated. You can do this in a few ways:

### Via the Expo App on your device

* Download the Expo Client for [iOS](https://apps.apple.com/us/app/expo-client/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)
* Scan the QR code presented in your terminal / browser when you launched your app locally on your computer
* You should see your app load

### iOS Simulator

* You will need [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) installed. 
* Once it is setup, you should be able to have the Expo browser launch the iOS app.
* If you are looking to publish to the App Store, you will also need a [Apple Developer Program](https://developer.apple.com/programs/) account.

### Android Simulator
You will need to install Android Studio and do some setup. [Android emulator setup for expo on mac](https://nabendu.blog/posts/android-emulator-setup-for-expo-on-mac-4n1j/) is a good walkthough of what to do.

## CheckIn

Now that your app is working, this is a good spot to checkin your code. Initialize the project with Git and checkin what you have here.

## Edit, Test, Cycle

Now that you have the app setup and running, here comes some of the magic of React Native. You can quickly make changes in your app and see them reflected. In the app you should see a message `Open up App.tsx to start working on your app!`. Follow that instruction, make a text change to say `Hello World` within the `<Text></Text>` blocks. Once you save your file, you should see the apps automatically refresh. If it does not update, check that you are running expo service in a terminal of your development machine.

## Add Components

Spend some time adding components to your app. They do not need to do anything at this point, they are just for show. Check out the React Native Docs on [Core Components and APIs](https://reactnative.dev/docs/components-and-apis) to get some inspiration.


# Checkpoint

Before moving on, you should be able to:
* [ ] Run the app in the iOS simulator 
* [ ] Run the app in the Android simulator
* [ ] Launch the app on a live device via the Expo app
* [ ] Add a button, some more text, or an Alert to your app