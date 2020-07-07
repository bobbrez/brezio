---
title: Building a Full Stack Product
seriesTitle: Full Stack Product
seriesSlug: full-stack-product-00-building-a-full-stack-product
seriesNext: full-stack-product-01-environment-setup
date: '2020-06-24'
description: A tutorial series on how to build a full stack product end-to-end with React Native and Serverless
tags: ['react', 'js', 'tutorials', 'react native', 'serverless']
cover: './preview.png'
---

Digital products have lots of moving parts that come together for a final result. This tutorial series will walk though one process for standing up all the different components necessary to launch a simple product which includes Apps (iOS and Android), a web presence, a backend (i.e. database, unified profiles, search, etc...) and more.

## Product vs App
We will be focusing on building a product, which requires more then just the actual binary delivered to the app stores. There are a wealth of much better tutorials out there that will walk though building an app (we will use some of them). The intent of this series is to show how to connect the different puzzle pieces together for a final result that encompasses what is needed to deliver to market.

## The Process
There is a lot to learn, hundreds of tutorials per technology multiplied by thousands of ways to apply them. It is easy to fall down a rabbit holes and lose sight of the final goal. To help keep on track, I recommend is starting with a simple product that has the major components for many common products and expanding from there. The intent is to learn new tools and components along the way to something that can actually be deployed (versus a toy to start all over again from scratch.)

This series is structured as a series of steps to building a product similar to how one would do it in the wild. While we will start with developing parts of the app at first, we will move back and fourth with the goal of constructing the product in an iterative fashion. This will show both the technical aspects as well as how to iterate on a product; in a typical organization you spend more time iterating on a product then you do starting for scratch with a clear path A-to-B. 

Each step will start with an introduction to the general concept to understand what is intended to be accomplished. It will then include some "spike" work to understand the technology in isolation. Usually this will be pointers to other tutorials. There are some great resources out there, so there is no reason to reinvent the wheel here. Plus seeing a wealth of resources, usually the technology producer themselves, will expose you where to look when you get stuck (we all get stuck!). We will work to adapt the concept to our product. Finally, at the end of each tutorial, there will be a checkpoint which will include things to test for, questions to answer, and challenges for additional expansion.

# CoachMe
We're going to build a product that will enable people to find or become remote coaches for others. This is a classic two-sided market product, where the value is in connecting two parties together based on specific criteria. We will build iOS and Android apps for the primary user interface. A simple web view will allow for user actions like account management. Because this product will require searching a common set of data (e.g. Coaches), we will create a backend to access the shared data. Additionally we will work to wire up the appropriate tools monitoring how users are engaging with the product so that we can inform 

## User Stories

There is a lot more that can be read to understand how to write great user stores, and how to derive the value your product will bring to market. For the purposes of this series, we will start with this simple set of user stores. 

* `[CM-1]` As a Coach, I can make a sharable profile that advertises my interests
* `[CM-2]` As a User, I can connect with a Coach based on a specific interest that I have
* `[CM-3]` As a User, I can request a meeting with a specific Coach
* `[CM-4]` As a Coach, I can accept a User's request
* `[CM-5]` As a Coach, I can easily communicate a communication channel to the User
* `[CM-6]` As a Coach, I can reject a User's request

## System Architecture & Notes

* We will be creating mostly a thin client that will allow Users and Coaches to interact. Data will be held in services on a centralized backend.
* In general, we will utilize as many pre-existing tools and services as possible to keep the product as narrowly focused as possible. This is not always the most cost-effective option, especially at larger scales, however in most early stage products time to market is the most important commodity. 
* We will be focusing on writing mostly in modern Javascript and its ecosystem (i.e. Node, React Native, etc...) so that we can minimize the need to be a polyglot and increase the ability to be impactful as an individual.
* The backend will be hosted and deployed on AWS, many of the tools we will be using have direct, or nearly similar, analogs on Google Cloud, Microsoft Azure, or any of the other major cloud hosting platforms.

# Series

1. Starting App Development (Coming Soon)