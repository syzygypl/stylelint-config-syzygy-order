# stylelint-config-syzygy-order
> SYZYGY [`stylelint`](https://github.com/stylelint/stylelint) config for declaration order.

## Rules

* Based on [Idiomatioc CSS declaration order](https://github.com/necolas/idiomatic-css#declaration-order).
* Requires `content` property to go first (_if set_).   

## Installation

```bash
npm install --save-dev stylelint-config-syzygy-order
```

## Usage

Simply set your `stylelint` config to extend `stylelint-config-syzygy-order`:

```json
{
  "extends": "stylelint-config-syzygy-order"
}
```

### Usage with other configs

**This config contains only rules for declaration order.**
It rather should not be used standalone. You can extend multiple configs.
We recommend to use `stylelint-config-syzygy-order` together with
[`stylelint-config-syzygy-scss`](https://github.com/syzygypl/stylelint-config-syzygy-scss)
or [any other config](https://www.npmjs.com/search?q=stylelint-config&ranking=popularity)
that fits your needs.

Example usage with `stylelint-config-syzygy-scss`:

```json
{
  "extends": [
    "stylelint-config-syzygy-scss",
    "stylelint-config-syzygy-order"
  ]
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
