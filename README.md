# File extension replace loader for webpack

## Installation

`npm install extension-replace-loader`

## Usage

```javascript
{
  loader: 'extension-replace-loader',
  query: {
    exts: [
      { from: '.css', to: '.scss' },
      { from: '.html', to: '.pug' }
    ]
  }
}
```


Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
