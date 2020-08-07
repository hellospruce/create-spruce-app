# eslint-config-spruce-app

Following Airbnb's popular styleguide [ESlint packages](https://github.com/airbnb/javascript/tree/master/packages) with support for TypeScript, React, Next.js & Prettier.

## How to use

Install `eslint-config-spruce-app` and it's dependencies:

```bash
// yarn
npx install-peerdeps @hellospruce/eslint-config-spruce-app --dev

// npm
npx install-peerdeps @hellospruce/eslint-config-spruce-app --save-dev
```

### Base (NO React support)

```js
// .eslintrc.js
module.exports = {
  extends: ["@hellospruce/eslint-config-spruce-app"],
};
```

### React

```js
// .eslintrc.js
module.exports = {
  extends: [
    "react-app", // Remove if not bootstrapped with CRA
    "@hellospruce/eslint-config-spruce-app/react",
  ],
};
```

### Next

```js
// .eslintrc.js
module.exports = {
  extends: ["@hellospruce/eslint-config-spruce-app/next"],
};
```
