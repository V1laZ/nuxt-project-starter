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

## 🔥 Run, build and deploy
**Dev server**
```
npx nuxi dev
```
**Build**
```
npx nuxi build
```
**Deploy**
```
npx nuxthub deploy
```

## 💻 Recommended VS Code extensions
> [!IMPORTANT]
I highly suggest **disabling Prettier**, as ESLint will handle the formatting instead.

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Language support for Vue
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS tooling for VS Code
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - View a Git Graph of your repository and perform Git actions from graph
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=YoavBls.pretty-ts-errors) - Makes typescript errors more human-readable
- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) - Manage PRs and do code reviews inside VS Code
- [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - Efficiently manage dependencies

## Features

### 🌍 Nuxt Hub
[NuxtHub](https://hub.nuxt.com/) allows you to easily deploy your application worldwide for **free!** ✨

You can deploy your project with just one command:
```sh
npx nuxthub deploy
```
🚀 That's it! Your page is now live and accessible to everyone.

---

### 🎨 Tailwind
[Tailwind](https://tailwindcss.com/) is a **utility-first CSS framework** packed with classes like *flex*, *pt-4*, *text-center* and *rotate-90* that can be composed to build any design, directly in your markup.

---

### 🔍 ESLint
[ESLint](https://eslint.org/) statically **analyzes your code** to quickly find **problems**. 

This template comes with **preinstalled plugins** for 
[Nuxt](https://eslint.nuxt.com/packages/module) and [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss). You can customize them in [eslint.config.mjs](./eslint.config.mjs)

---

### 🎭 PrimeVue
[PrimeVue](https://primevue.org/) is a **modular component library** built for Vue.

This template ensures that it works **nicely with** **Tailwind** without interfering with each other.

#### 🌓 Dark Mode
The **default** behavior is set for a manual switch. You can do so by doing `document.documentElement.classList.toggle('dark')`. Read more in [Tailwind docs](https://tailwindcss.com/docs/dark-mode) and [PrimeVue docs](https://primevue.org/theming/styled/#darkmode) on how to handle dark mode.

---

### 🎯 Nuxt Icon
[Nuxt Icon](https://github.com/nuxt/icon) allows you to use **200,000+** ready to use icons in your application. 

You can use any dataset from [Icônes](https://icones.js.org/). Be sure to download it with `npm i -D @iconify-json/collection-name` to improve your end-user experience. By default this template comes with [svg-spinners](https://icones.js.org/collection/svg-spinners) and [Phosphor](https://icones.js.org/collection/ph) datasets.

---

### 🔄 GitHub Workflows
This template comes with 2 preconfigured [workflows](./.github/workflows/) for **GitHub**:
- **Typecheck** - checks for typescript errors
- **Lint Check** - checks for lint errors based on the ESLint config

They are set to run on every **Pull Request**

---

### 🛡️ Nuxt Security
[Nuxt Security](https://nuxt-security.vercel.app/) automatically configures your app to follow **OWASP security patterns** and principles.

---

### 🔐 Nuxt Auth Utils
[Nuxt Auth Utils](https://github.com/atinux/nuxt-auth-utils) allows you to easily add authentication to Nuxt applications with secured & sealed cookies sessions.

---

### 🖼️ Nuxt Image
[Nuxt Image](https://image.nuxt.com/) is plug-and-play image optimization for Nuxt apps. Resize and transform your images using built-in optimizer or your favorite images CDN.

---

### 🗃️ Drizzle ORM
[Drizzle](https://orm.drizzle.team/) allows you to create **fast**, **performant** and **typesafe** SQL queries. Learn how to integrate it with NuxtHub in the [official documentation](https://hub.nuxt.com/docs/recipes/drizzle).

---

### 🛠️ VueUse
[VueUse](https://vueuse.org/) is a collection of **Essential Vue Composition Utilities**. 

Packed with 200+ composables for:
- 🔄 State Management
- 📱 Sensors & Device APIs
- 🎯 Animation & Motion
- 💾 Browser Storage
- ⚡ Performance & Timing

---

### 🔍 Zod
[Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference
