# Nuxt Starter Template

This template comes with preinstalled tools and packages to build and deploy your **MVP** fast and reliably.

## Prerequisites
- [Bun](https://bun.sh/)

## Copy this template
```bash
bun create V1laZ/nuxt-project-starter <project-name>
```

## Features

### Tailwind
[Tailwind](https://tailwindcss.com/) is a **utility-first CSS framework** packed with classes like *flex*, *pt-4*, *text-center* and *rotate-90* that can be composed to build any design, directly in your markup.

### ESLint
[ESLint](https://eslint.org/) statically **analyzes your code** to quickly find **problems**. 

This template comes with **preinstalled plugins** for 
[Nuxt](https://eslint.nuxt.com/packages/module) and [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss). You can customize them in [eslint.config.mjs](./eslint.config.mjs)

### PrimeVue
[PrimeVue](https://primevue.org/) is a **modular component library** built for Vue.

This template ensures that it works **nicely with** **Tailwind** without interfering with each other.

#### Dark Mode
The **default** behavior is set for a manual switch. You can do so by doing `document.documentElement.classList.toggle('dark')`. Read more in [Tailwind docs](https://tailwindcss.com/docs/dark-mode) and [PrimeVue docs](https://primevue.org/theming/styled/#darkmode) on how to handle dark mode.

### Nuxt Icon
[Nuxt Icon](https://github.com/nuxt/icon) allows you to use **200,000+** ready to use icons in your application. 

You can use any dataset from [Icônes](https://icones.js.org/). Be sure to download it with `npm i -D @iconify-json/collection-name` to improve your end-user experience. By default this template comes with the [svg-spinners dataset](https://icones.js.org/collection/svg-spinners).

