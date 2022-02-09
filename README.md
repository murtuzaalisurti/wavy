# Wavy Text Animation Library
A JavaScript Library which allows you to animate infinite words in an infinite loop in a modern wavy way!

![image](https://i.imgur.com/SLcvTrS.gif)

## Options

- [Vanilla JS library](#usage)
- [npm package](https://github.com/murtuzaalisurti/wavy/tree/package#wavy-text-animation-library)

---


## Usage

> Below instructions are for Vanilla JS. For `npm package`, please follow the instructions mentioned [here](https://github.com/murtuzaalisurti/wavy/tree/package#wavy-text-animation-library).

## Fetch the library from CDN

In order to use it, insert the following `<script>` tag in the `<head>` tag of your HTML document. 

```html
<script src="https://cdn.jsdelivr.net/gh/murtuzaalisurti/wavy@master/main.js"></script>
```

> NOTE :- In order to fetch the latest version of the library, perform a hard reload (CTRL + SHIFT + R) in your browser to bypass the file stored in disk cache. If you don't do this, your browser will load an older version of the library from disk cache!

---


## Invoke the function

- Invoke the below function with the required arguments as shown below in your javascript file! Let's understand **these arguments** which are passed to the function!

```js

wavy(html_element, {words: ["word-1", "word-2", "word-n"]}, {color: 'font-color'});

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

color: 'black', // you can also use rgb, hsl, rgba, hex
fontSize: '1rem',
fontFamily: 'sans-serif',
transform: scale(1.5)

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


## Demo

> Try it on [CodePen](https://codepen.io/seekertruth/pen/ExmGJjE)!


This library is hosted on [jsdelivr](https://www.jsdelivr.com/) CDN. 