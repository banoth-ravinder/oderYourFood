# Zenport React Challenge

This Challenge is aimed to help us assess your `React` skills.

<!-- toc -->

- [Setup](#setup)
- [Libraries used](#libraries-used)
- [Description](#description)
- [Requirements](#requirements)
- [Submission](#submission)
- [FAQs](#faqs)

<!-- tocstop -->

## Setup

As this test is to evaluate `React` skills, we are not focusing on tooling setup (webpack, babel, etc...).

```bash
yarn install
yarn dev
```

### Libraries used

- Ant design
- styled-components
- NextJS

## Description

We want you to help resolve tasks / issues on a multi step form. This form is aimed to help a user order food from a restaurant. The wireframes are available [at this link](https://www.figma.com/file/RsvCqxq86NkWDfW01G6gYa/Coding-Challenge?node-id=1%3A2) or in the [wireframes](https://github.com/zenportinc/frontend-react-challenge/tree/master/wireframes) folder.

Data is provided in the [data folder](https://github.com/zenportinc/frontend-react-challenge/tree/master/src/modules/ZenportEats/data) folder and images are provided in the [public folder](https://github.com/zenportinc/frontend-react-challenge/tree/master/public) folder. Fonts used are available at [Google Fonts](https://fonts.google.com/), and any additional icons are available at [Ant Design Icons](https://ant.design/components/icon/).

### Requirements

- On the second step of the form, we want to filter food items by type

  - on the topmost part of the form, there are tabs indicating the types of food
  - when a food type is selected, only food items of that type should be shown on the list
  - if the food type is active and clicked again, all the food items should show

- On the second step of the form, there is a bug when creating or deleting a new person on the form. The people seem to just disappear into oblivion.
  - click on the add button on the order total section or the x button on the right of the person's name
- On the second step of the form, we want the newly created name counts to always be higher than the last created name
  - if the last name on the list is Person 5 then the newest name should be Person 6
  - if the last name on the list is Person 10 and I delete Person 3 and Person 4 then newest names should be Person 11 and Person 12 respectively
- when clicking on the logo on the navbar, it should go back to page 1

### Notes

- User can't proceed if there are no items in their order.
- Please commit after each step so progress is visible
- This shouldn't take more than 30 minutes

## Submission

- Submit a working link of your code repository (github / gitlab / bitbucket, etc.)
- ( Optional ) Submit a link of the deployed app (github.io / vercel / surge, etc.)

## FAQs

- Library Usage
  - You are free to use any 3rd party library you want, although we might ask for justification.
