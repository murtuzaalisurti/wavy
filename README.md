# Wavy Text Animation Library
A JavaScript Library which allows you to animate infinite words in an infinite loop in a modern wavy way!

[![](https://img.shields.io/static/v1?label=npm&message=package&color=green&logo=npm)](https://www.npmjs.com/package/@murtuzaalisurti/wavy)

![image](https://i.imgur.com/SLcvTrS.gif)

## Usage

### Install the package

```
npm i @murtuzaalisurti/wavy
```

### Import the package

```js
const wavy = require('@murtuzaalisurti/wavy');
```

OR
```js
import wavy from '@murtuzaalisurti/wavy';
```

or else, you can use it directly from CDN :
```js
import wavy from 'https://cdn.skypack.dev/@murtuzaalisurti/wavy';
```

## Invoke the function

- Invoke the below function with the required arguments as shown below in your javascript file! Let's understand **these arguments** which are passed to the function!

```js

wavy.wavy(html_element, {words: ["word-1", "word-2", "word-n"]}, {color: 'font-color'});

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

color: 'black', // you can also use rgb, hsl, rgba, hex
fontSize: '1rem',
fontFamily: 'sans-serif',
transform: scale(1.5)

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

## Demo

> Try it [here](https://codepen.io/seekertruth/pen/ExmGJjE)