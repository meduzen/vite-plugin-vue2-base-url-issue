# `vite-plugin-vue2` doesn’t honor Vite `base` option

This repository contains a minimal reproduction of the issue (link to the issue coming soon) using both Vue 2 and Vue 3.

## The issue

The [`vite-plugin-vue2`](npmjs.com/package/vite-plugin-vue2) plugin for Vite doesn’t honor [Vite `base` URL](https://vitejs.dev/config/#base) option, while [`@vitejs/plugin-vue`](https://www.npmjs.com/package/@vitejs/plugin-vue) does.

## Example app

You use Vite `base` setting to indicate a base URL (e.g. your app is deployed under `/my-spa/`) and expect the plugin to prepend the base path to any [public](https://vitejs.dev/config/#publicdir) path encountered in a Vue `<template>`.

For example, with the [following directory structure](/vue-2):

```bash
├── dist (build)
├── public (default Vite `publicDir`, copied as is in `outDir`)
│   │── images
│   │   └── some-pic.png
├── src
│   ├── App.vue
│   └── index.js
└── index.html
```

and with `App.vue`:

```html
<template>
    <img src="/images/some-pic.png">
</template>
```

## Expectations

`src="/images/some-pic.png"` should become `src="/my-spa/images/some-pic.png"`.

But [once compiled](vue-2/dist/vue-2-demo/assets/index.111647f0.js), it stays `src="/images/some-pic.png"`:

```js
{src:"/images/some-pic.png",alt:""}
```

On the other side, the Vue 3 plugin for Vite [compiles it fine](vue-3/dist/vue-3-demo/assets/index.1971754a.js):

```js
var u="/vue-3-demo/images/some-pic.png"
````

This can also be verified in the browser live by running `npm run serve` in `/vue-2` or `/vue-3`.

## Vite config

### Vue 2

```js
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  base: '/vue-2-demo/',
  build: {
    outDir: `./dist/vue-2-demo`,
    emptyOutDir: true,
  },

  plugins: [createVuePlugin()],
})
```

### Vue 3

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-3-demo/',
  build: {
    outDir: `./dist/vue-3-demo`,
    emptyOutDir: true,
  },

  plugins: [vue()],
})
```
