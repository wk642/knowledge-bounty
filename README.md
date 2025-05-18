<!-- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->

# Tornado

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&letterSpacing=1px&duration=6000&pause=999&color=F78F00&center=true&vCenter=true&width=435&lines=%F0%9F%8C%AA%EF%B8%8F+Tornado%F0%9F%8C%AA%EF%B8%8F)](https://git.io/typing-svg)

## :dart: OBJECTIVES

Welcome to 🌪️Tornado🌪️ the gamified blog. (Work in progress)

**History** of why this app is called Tornado. At the time of planning for this app, I was up in the middle of the night, where one screen I was staring at the maps watching this tornado get closer and closer to us, and making sure that kiddo and I would get into shelter at the right time until we are in the clear. Which lead me into expanding my planning from a simple blog app, into a gamified blog app. Speaking to a mentor about my planning process, she suggested I should call this app Tornado, so in honor of that tornado, here we are! Welcome to Torando.

Let's making blogs fun! Users will be able to do the following:

- [ ] Browswe the different articles
- [ ] Utilize AI to get a text summarization of the blog post.
- [ ] Sign into their Google account so that they can be part of the game.
- [ ] Earn badges for completing different tasks
- [ ] Earn "tornados", which is a point system
- [ ] Level up
- [ ] See their statics
- [ ] Save and bookmark posts

## :heavy_check_mark: PREREQUISITES

- [ ] Postgres
- [ ] Express
- [ ] React
- [ ] Node

## :movie_camera: Demo
![demo](https://github.com/user-attachments/assets/601ea0c3-c1d3-4e0a-9eae-ef97540bf51d)

## :runner: How to run this

  1. Clone this project
    `git clone https://github.com/wk642/tornado.git`
  2. Go into this folder in your terminal or vscode and run the following:
    `npm install`
  3. To load my database and table
    `npm run loadDB`
  4. If you would like to have some mock data in it so you can see how it runs
    `npm run seed`

## :brain: Follow what happens in my head during this project

**What is a blog to me?**
> It is a place where users can post up short or long articles or link to other resources on things they are interested in.*

- [ ] Database Schema
![schema](https://github.com/user-attachments/assets/2834120c-ca23-47e5-b367-ddebc45c454c)

### Things to install

- [x] npm `npm install`
- [x] express `npm install express`
- [x] cors `npm install cors`
- [x] concurrently `npm install concurrently`
- [x] nodemon `npm install nodemon`
- [x] pg-promise `npm install pg-promise`
- [x] [tailwinds](https://tailwindcss.com/docs/installation/using-vite) `npm install tailwindcss @tailwindcss/vite`
- [ ] Google Authentication
  - [ ] jwt-decoder
  - [ ] routes
  - [ ] routes-dom
- [x] Jest Testing - going to try unit testing this time
  - [x] What I did to get it to work this time:
    - [x] `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react`
    - [x]  `npm install --save-dev @testing-library/react @testing-library/dom`
    - [x] `npm i jest-environment-jsdom`

## :bulb: Nice to haves

- [ ] Add Google login so that we can save user's data
- [ ] Implement badges
- [ ] Implement levels
- [ ] fix api for text summarization
- [ ] look at issues to complete more AI implementations

## :mag_right: Spike Doc

- [ ] 429 error handling, how do I cache or store data from api so I do not run into qny 429 errors
Coming soon
