# MenuDocs-lint
> Central shareable eslint config for all MenuDocs projects

## Installation

### npm

```shell
npm i -D eslint-config-tesseract eslint
```

### yarn

```shell
yarn add -D eslint-config-tesseract eslint
```

### GitHub

- npm:

```shell
npm i --save-dev MenuDocs/eslint-config-tesseract eslint
```

- yarn:

```shell 
yarn add -D MenuDocs/eslint-config-tesseract eslint
```

## Standard ESLint rules

```json
{
    "extends": "tesseract"
}
```

### Pre-requisites

- [ESLint](https://eslint.org)

## Setting up ESLint rules

ESLint may display a lot of warnings and errors about your code when you start using it, but don't let this startle you. In order to get started, follow these steps:

1) Create a file in your root directory named `.eslintrc.json` (where your main project file is located).
2) Copy the code below into the file.
```json
{
    "extends": "tesseract"
}
```
