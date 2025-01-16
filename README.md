# 🚀 Nuxt Starter Template

This template comes with preinstalled tools and packages to build and deploy your **MVP** fast and reliably.

## 📋 Prerequisites
- [pnpm](https://pnpm.io/)

## 🛠️ Copy this template
### Using npx
```sh
npx create-nuxt-starter <project-name>
```
### Manual
```sh
git clone git@github.com:V1laZ/nuxt-project-starter.git
cd nuxt-project-starter
rm -rf .git
git init
git add .
git commit -m "init"
pnpm install
```
Feel free to rename the folder

## 💻 Recommended VS Code extensions
⚠️ I highly suggest **disabling Prettier**, as ESLint will handle the formatting instead.

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Language support for Vue
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS tooling for VS Code
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - View a Git Graph of your repository and perform Git actions from graph
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=YoavBls.pretty-ts-errors) - Makes typescript errors more human-readable
- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) - Manage PRs and do code reviews inside VS Code
- [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - Efficiently manage dependencies

## Features

### 🎨 Tailwind
[Tailwind](https://tailwindcss.com/) is a **utility-first CSS framework** packed with classes like *flex*, *pt-4*, *text-center* and *rotate-90* that can be composed to build any design, directly in your markup.

### 🔍 ESLint
[ESLint](https://eslint.org/) statically **analyzes your code** to quickly find **problems**. 

This template comes with **preinstalled plugins** for 
[Nuxt](https://eslint.nuxt.com/packages/module) and [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss). You can customize them in [eslint.config.mjs](./eslint.config.mjs)

### 🎭 PrimeVue
[PrimeVue](https://primevue.org/) is a **modular component library** built for Vue.

This template ensures that it works **nicely with** **Tailwind** without interfering with each other.

#### 🌓 Dark Mode
The **default** behavior is set for a manual switch. You can do so by doing `document.documentElement.classList.toggle('dark')`. Read more in [Tailwind docs](https://tailwindcss.com/docs/dark-mode) and [PrimeVue docs](https://primevue.org/theming/styled/#darkmode) on how to handle dark mode.

### 🎯 Nuxt Icon
[Nuxt Icon](https://github.com/nuxt/icon) allows you to use **200,000+** ready to use icons in your application. 

You can use any dataset from [Icônes](https://icones.js.org/). Be sure to download it with `npm i -D @iconify-json/collection-name` to improve your end-user experience. By default this template comes with the [svg-spinners dataset](https://icones.js.org/collection/svg-spinners).

### 🔄 GitHub Workflows
This template comes with 2 preconfigured [workflows](./.github/workflows/) for **GitHub**:
- **Typecheck** - checks for typescript errors
- **Lint Check** - checks for lint errors based on the ESLint config

They are set to run on every **Pull Request**

### 🛡️ Nuxt Security
[Nuxt Security](https://github.com/nuxt-modules/security) automatically configures your app to follow **OWASP security patterns** and principles.

### 🖼️ Nuxt Image
[Nuxt Image](https://github.com/nuxt/image) is plug-and-play image optimization for Nuxt apps. Resize and transform your images using built-in optimizer or your favorite images CDN.