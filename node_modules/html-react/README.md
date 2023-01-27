# html-react
Wrappers for doing regular HTML in React without JSX. Basically it uses `React.createElement` behind the scenes to create the HTML elements and the only real feature is that instead of doing:

```javascript
React.createElement('span', props, children)
```

You can do:

```javascript
$span(props, children)
```

which is a lot shorter. Having the symbol for the element begin with a `$` is just a naming convention.

## Classname
As another convenience, if you want to create an element with just the `className` property (like is common if you use the awesome [TailwindCSS](https://tailwindcss.com/)), you can supply it as a string instead of the props object, so actually you can go from this:

```javascript
React.createElement('div', { className: 'container' }, 'inside container')
```

to:

```javascript
$div('container', 'inside container')
```

## ES6 Module
The files in this package use the `.mjs` extension to work with ES6 module support in Node.js. You will currently need to run node with the `--experimental-modules` option to enable the support. 

## SVG
I addition to all the HTML tags, this package has all the standard SVG tags built in, which can be imported at the `/svg`path:
```javscript
import { $circle } from 'html-react/svg'
```

## Simple Example
To see how it looks in practice when you a not using JSX, here is a simple example in the form of a (TailwindCSS) Container component:

```javascript
import React from 'react';
import { $div } from 'html-react';

export class Container extends React.Component {
  render() {
    const { className, children } = this.props;

    return $div(`container m-auto px-4 ${className}`, children);
  }
}
export const $Container = (props, ...children) => React.createElement(Container, props, ...children);
```

This code could be simplified, but the main point is that it illustrates the basic structure.
