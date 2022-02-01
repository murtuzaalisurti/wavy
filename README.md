# Wavy Text Animation Library

This will work in React js or any other library which supports Node JS.
## Usage

### Step 1
```js
const wavy = require('@murtuzaalisurti/wavy');
```

### Step 2
Invoke the below function with the required arguments as shown below in your javascript file! Let's understand these arguments which are passed to the function!
```js
wavy.wavy(html_element, {words: ["word-1", "word-2", "word-n"]}, {color: 'font-color'});
```

The first argument you should pass is an html element in which you want to place the words! It's like a wrapper element!
Example for first argument:
```js
wavy.wavy(document.querySelector(".text"), second_argument, third_argument);
```

The second argument you should pass is an object with a property of `words` set to a value of an `array` containing as many words as you want to display. There is no word limit.
Example for second argument:
```js
wavy.wavy(document.querySelector(".text"), {words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]}, third_argument);
```

The third argument you should pass is an object with a options to set the color of the `text`. The color values can be `hex`, `rgb` or standard `css values`.
Example for third argument:
```js
wavy.wavy(document.querySelector(".text"), {words: ["Wavy", "Text", "Animation", "Library", "JavaScript"]}, {color: "green"});
```

This library is hosted on [jsdelivr](https://www.jsdelivr.com/) CDN. 