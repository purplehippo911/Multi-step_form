# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- ## [Recommended IDE Setup](#recommended-ide-setup)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop:

![Desktop](./)


Mobile:

![Mobile](./screenshot.jpg)



### Links

- Solution URL: [mySolution](https://www.frontendmentor.io/solutions/multisteps-form-made-with-vue-and-vite-_zIuR9WshW)
- Live Site URL: [MyLiveSite](https://form-multistep.netflify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue JS](https://vuejs.org/) - JS library
- [VueCli](https://nextjs.org/) - Vue Cli
- [VueRouter](https://nextjs.org/) - For routing purposes in Vue
- [Pinia]() - State management for Vue Application
- [VeeValidate](https://vee-validate.logaretm.com/v4/) - For easier form validation in Vue


### What I learned

I learned how to use Vue Router to route to different routes, either via ´router-link´ or by pushing the view by using `this.$router.push()´. I also got to know my weaknesses and what I should improve on, and that is concepts like form validation and data storage.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```vue
<script setup>

defineProps ({
    informationTitle:String,
    informationText:String
})
</script>

<template>
    <section class="information__section">
        <div class="container row">
            <h2 class="information__title"> {{ informationTitle }} </h2>
            <p class="information__text"> {{ informationText }} </p>
        </div>
    </section>
</template>
```


### Continued development

I'm going to focus on improving my knowledge about Vue, try making fullstack applications with NodeJs and make more projects with Python.


### Useful resources

- [Blog article about how to make a circle in CSS](https://blog.hubspot.com/website/css-border-radius-circle) - This helped me with making a perfectly round circle.

- [Mozilla DOCs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) - This is an amazing article which helped me to recall how to use `grid-template-areas` and `grid-areas` for aligning multiple elements in Grid. I'd recommend this website to anyone  that needs help understanding things and concepts in CSS, JavaScript and HTML.
- [Vue Router Docs](https://router.vuejs.org/guide/#router-view) - This is an amazing article which helped me to recall how to use Vue Router correctly to route to different views in my app.
- [Take control of background images by Kevin Powell](https://www.youtube.com/watch?v=3T_Jy1CqH9k) - This is a amazing video which helped me to understand how to use `background-image`'s correctly without the picture being cropped to much and how to make the images look better.

## Author

- Website - [MyWebsite](https://www.purplehippo911.github.io/website)
- Frontend Mentor - [@foxynoxy](https://www.frontendmentor.io/profile/purplehippo911)
- Twitter - [@muggie43](https://www.twitter.com/muggie43)
- LinkedIn - [myLinkedIn](https://www.linkedin.com/in/omer-a-26815825b)

## Acknowledgments

(Binh2's version)[https://github.com/Binh2/multi-step-form/blob/main/src/views/InfoView.vue]


## Recommended IDE Setup

This template should help get you started developing with Vue 3 in Vite.

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
