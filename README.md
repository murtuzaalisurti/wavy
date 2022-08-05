# Wavy Text Animation Library

A JavaScript Library which allows you to animate infinite words in an infinite loop in a modern wavy way!

[![download badge](https://badgen.net/npm/dt/@murtuzaalisurti/wavy/?color=blue&icon=npm&labelColor=black&scale=1.1)](https://www.npmjs.com/package/@murtuzaalisurti/wavy)
[![github release](https://badgen.net/github/release/murtuzaalisurti/wavy/?labelColor=black&color=green&scale=1.1&icon=github)](https://github.com/murtuzaalisurti/wavy/releases)
[![Featured on Openbase](https://badges.openbase.com/js/featured/@murtuzaalisurti/wavy.svg?token=1kjnfJTvqtnXHprCgwkJyjFVymPGFCcbEXlIltpZktE=)](https://openbase.com/js/@murtuzaalisurti/wavy?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

![image](https://i.imgur.com/SLcvTrS.gif)

## Options

- [JS library for Browser](#for-browsers)
- [NPM package](#npm-package)

---

## NPM package - Usage

### - Install the package

```bash
npm i @murtuzaalisurti/wavy
```

### - Import the package

```js
const wavy = require('@murtuzaalisurti/wavy');
```

OR

```js
import wavy from '@murtuzaalisurti/wavy';
```

### - Invoke the function

- Invoke the below function with the required arguments as shown below in your javascript file! Let's understand **these arguments** which are passed to the function!

```js

wavy.wavy(
    html_element, // example : document.querySelector('.text')
    {
        words: ["word-1", "word-2", "word-n"]
    }, 
    {
        color: 'font-color', // hsl, rgb, hex, rgba, css standard values
        fontSize: 'font-size', // any valid unit
        fontFamily: 'font-family', // any valid font family 
        transform: 'scale(x)' // example : scale(1.5)
    }
);

```

- The **first argument** you should pass is an html element in which you want to place the words! It's like a wrapper element!

- Example for first argument:

```js

wavy.wavy(document.querySelector(".text"), second_argument, third_argument);

```

- The **second argument** you should pass is an object with a property of `words` set to a value of an `array` containing as many words as you want to display. There is no word limit. These words will be animated in an infinite loop!

- Example for second argument:

```js

wavy.wavy(document.querySelector(".text"), {words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]}, third_argument);

```

- The **third argument** you should pass is an object with some options to set the color, fontSize, fontFamily and scale properties of the `text`. Here are all the properties that you can modify:

```js
//these are default values

{
    color: 'black', // you can also use rgb, hsl, rgba, hex
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    transform: scale(1.5)
}

```

- Example for third argument:

```js

wavy.wavy(
    document.querySelector(".text"), 
    {
        words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]
    },
    {
        color: 'green', 
        fontSize: '2rem', 
        fontFamily: 'Poppins, sans-serif', 
        transform: 'scale(1.8)'
    }
);

```

> *NOTE: The first two arguments are mandatory!

---

## For Browsers - Usage

> Below instructions are for Vanilla JS. For `npm package`, please follow the instructions mentioned [here](#npm-package).

### - Fetch the library from CDN

In order to use it, insert the following `<script>` tag in the `<head>` tag of your HTML document.

```html

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@murtuzaalisurti/wavy/production.min.js"></script>

```

> NOTE :- In order to fetch the latest version of the library, perform a hard reload (CTRL + SHIFT + R) in your browser to bypass the file stored in disk cache. If you don't do this, your browser will load an older version of the library from disk cache!

OR

```html

<!-- UNPKG -->
<script src="https://unpkg.com/@murtuzaalisurti/wavy@latest/production.min.js"></script>

```

---

### - Invoke function

- Invoke the below function with the required arguments as shown below in your javascript file! Let's understand **these arguments** which are passed to the function!

```js

wavy(
    html_element, // example : document.querySelector('.text')
    {
        words: ["word-1", "word-2", "word-n"]
    }, 
    {
        color: 'font-color', // hsl, rgb, hex, rgba, css standard values
        fontSize: 'font-size', // any valid unit
        fontFamily: 'font-family', // any valid font family 
        transform: 'scale(x)' // example : scale(1.5)
    }
);

```

- The **first argument** you should pass is an html element in which you want to place the words! It's like a wrapper element!

- Example for first argument:

```js

wavy(document.querySelector(".text"), second_argument, third_argument);

```

- The **second argument** you should pass is an object with a property of `words` set to a value of an `array` containing as many words as you want to display. There is no word limit. These words will be animated in an infinite loop!

- Example for second argument:

```js

wavy(document.querySelector(".text"), {words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]}, third_argument);

```

- The **third argument** you should pass is an object with some options to set the color, fontSize, fontFamily and scale properties of the `text`. Here are all the properties that you can modify:

```js
//these are default values

{
    color: 'black', // you can also use rgb, hsl, rgba, hex
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    transform: scale(1.5)
}

```

- Example for third argument:

```js

wavy(
    document.querySelector(".text"), 
    {
        words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]
    },
    {
        color: 'green', 
        fontSize: '2rem', 
        fontFamily: 'Poppins, sans-serif', 
        transform: 'scale(1.8)'
    }
);

```

> **NOTE: The first two arguments are mandatory!**

---

### Demo

> Try it on [CodePen](https://codepen.io/seekertruth/pen/ExmGJjE)!
