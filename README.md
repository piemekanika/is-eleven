# What is this?

Function that returns true when the given number equals to
[eleven](https://youtu.be/NMS2VnDveP8).

# Why to use

When you have to create a function that check whether the value really 
equals to eleven, there is a big chance to end up with code like this:

```js
const check = val => Number(val) === 11;
```

Seems good, right? But this code doesn't really work the way you expect 
it to work. Let's see an example:

```js
check([11]); // true
```

See? That simple oneliner isn't really a universal solution. And this is
where our package comes to play.

```js
const { isEleven } = require('is-eleven');

isEleven([11]); // false, yay!
```

With is-eleven package, you can forget about javascript's unexpected
behavior and concentrate on the logic in your code instead of type 
checking.

# Installation

```bash
# npm
npm i --save is-eleven

# yarn
yarn add is-eleven
```

# Usage

```js
const { isEleven } = require('is-eleven');
```
# Examples

```js
/* true */
isEleven(11);
isEleven(0b1011);
isEleven('11');
isEleven('  11');

/* false */
isEleven(12);
isEleven([11]);
isEleven(0x11);
isEleven('12');
isEleven('eleven');
isEleven('foo');
isEleven('11foo');
```
