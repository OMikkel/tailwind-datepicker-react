[![NPM Version](https://img.shields.io/npm/v/tailwind-datepicker-react?color=green)](https://www.npmjs.com/package/tailwind-datepicker-react)
[![NPM Minified Size](https://img.shields.io/bundlephobia/min/tailwind-datepicker-react)](https://www.npmjs.com/package/tailwind-datepicker-react)
[![GitHub deployments](https://img.shields.io/github/deployments/OMikkel/tailwind-datepicker-react/github-pages?label=Demo%20Website%20Deployment)](https://omikkel.github.io/tailwind-datepicker-react/)

# Tailwind-datepicker-react

A Tailwindcss/Flowbite datepicker component built as a React component with types

Date logic from [VanillaJS-datepicker](https://github.com/mymth/vanillajs-datepicker)

## [Demo](https://omikkel.github.io/tailwind-datepicker-react/)

![thumbnail](https://i.imgur.com/k6gVad8.png)

## Installation

1. Install the package

```bash
npm install tailwind-datepicker-react
```

```bash
yarn add tailwind-datepicker-react
```

2. Add the styles to your `tailwind.config.js` file

```js
module.exports = {
    ...
    content: [
        ...
        "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
    ],

};

```

3. Import the component and use it

```js
import Datepicker from "tailwind-datepicker-react"
```
