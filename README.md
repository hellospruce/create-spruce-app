# Create Spruce App

Inspired from the [create-react-app](https://github.com/facebook/create-react-app) monorepo.

## Packages

### [eslint-config-spruce-app](packages/eslint-config-spruce-app/README.md)

ESlint configuration used in Spruce apps.

## Goals

- [x] Single repo for maintaining & publishing packages used in Spruce development projects
- [ ] A CLI tool package like `create-react-app`, e.g desired outcome: `npx spruce-scripts --template next` to bootstrap our starter projects (and stop them from polluting our github with template repos)

## Notes

This project using a monorepo architecture with [Lerna](https://github.com/lerna/lerna) & [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to bundle tools used for bootstrapping Spruce apps under the same repo.

This will be easier to maintain & version. There are also added benefits with the Lerna workflow in development when packages in this repo depend on one another.

One "gotcha" for me with Lerna & workspaces was that the key is to always use `lerna` from the **root directory** to execute commands that interact with the node_modules, such as `yarn add <package>`.

Don't

```bash
yarn install <package>
```

Do

```bash
lerna add <package> --scope <package>
```

`--scope` targets the local package to add the dependency too.

Don't

```bash
cd packages/<package>
// run some command that uses a package in node_modules, e.g
npx tsc --init
```

Do

```bash
lerna exec ’tsc —init’ —scope @hellospruce/test-app
```

Strangely, there is no command for removing a package like `lerna remove`. To remove a package there are 2 options.

```bash
lerna exec 'yarn remove foo' --scope=<package>
// or, remove packages from package.json files
lerna bootstrap --scope @org-name/package-name --no-ci --force-local
```

### Resources

- [monorepos-by-example-part-1](https://codeburst.io/monorepos-by-example-part-1-3a883b49047e)
- [airbnb-javascript monorepo](https://github.com/airbnb/javascript)
- [typescript-eslint monorepo](https://github.com/typescript-eslint/typescript-eslint)
- [create-react-app monorepo](https://github.com/facebook/create-react-app)
