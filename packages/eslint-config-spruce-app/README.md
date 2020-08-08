# eslint-config-spruce-app

Following Airbnb's popular styleguide [ESlint packages](https://github.com/airbnb/javascript/tree/master/packages) with support for TypeScript, React, Next.js & Prettier.

## How to use

Install `eslint-config-spruce-app` and it's dependencies:

```bash
npx install-peerdeps @hellospruce/eslint-config-spruce-app --dev
```

This package uses the `parserOptions.project` configuration that points to your tsconfig. It expects it to be in the root (if this is not the case, override the option locally).

According to the [docs](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject) for this option, "you must only lint files that are included in the projects as defined by the provided tsconfig.json files".

Therefore, ensure any files that can be linted (`.js`,`.ts`, etc) are either included in your tsconfig.json `"include"`, or are excluded using a .eslintignore file.

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
  extends: ["@hellospruce/eslint-config-spruce-app/react"],
};
```

### CRA (create-react-app)

You can use this with the CRA `eslint-config-react-app`, but the idea of this config is to leverage the Airbnb React Styleguide.

```js
// .eslintrc.js
module.exports = {
  extends: ["react-app", "@hellospruce/eslint-config-spruce-app/react"],
};
```

### Next

```js
// .eslintrc.js
module.exports = {
  extends: ["@hellospruce/eslint-config-spruce-app/next"],
};
```
