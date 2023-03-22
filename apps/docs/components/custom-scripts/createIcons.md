# createIcons script

Script job is to generate `vue`/`react` components out of svg icon files.


## How it works?

It looks for every svg file in given directory `input` then mangle them and place them in `output` directory, during work it can optimize svg so component are smaller, using [svgo](https://github.com/svg/svgo) plugin.

NOTE: If `output` directory does not exists it will be created

## CLI params

| Param name            | Type         | Default value | Possible values                        |
|-----------------------|--------------|---------------|----------------------------------------|
| framework             | String       | `vue`         | `vue`, `react`                         |
| input                 | String       | `./assets`    |                                        |
| output                | String       | `./`          |                                        |
| relativePathToIconBase| String       | `../`         |                                        |
| optimize              | Boolean      | `true`        | `true`, `false`                        |

## Description params

### `framework`
Determines what kind of component icon will be produced

### `input`
Path to directory with `*.svg` files

### `output`
Path to directory where generated components will be placed

### `relativePathToIconBase`
Path used inside generated component to `SfBaseIcon` component

Source code(vue): `import SfIconBase, { SfIconSize } from '${relativePathToIconBase}SfIconBase/SfIconBase';`

### `optimize`
Optimizing svg file with [svgo](https://github.com/svg/svgo)
