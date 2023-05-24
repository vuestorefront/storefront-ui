# IDE configuration

## VS Code

When working on this project it will be useful for you to install these extensions:
- [TypeScript Vue Plugin(Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin). Make sure to enable [take-over mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

If you want your code to be formatted in real-time when you're developing it, make sure to add these your [VSCode User Settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson):

```json
    "[javascript]": {
        "editor.defaultFormatter": "Vue.volar",
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
```
