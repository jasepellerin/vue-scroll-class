# vue-scroll-class #

A [Vue.js](https://vuejs.org/) directive to add a class to an based on vertical scroll.

## Installation ##

`npm i -S vue-scroll-class`

## Import ##

```javascript
import VueScrollClass from 'vue-scroll-class';
```

## Add to Vue ##

Register to Vue globally:

```javascript
Vue.directives('scroll-class': VueScrollClass);
```

Register to a specific Vue instance:

```javascript
  const app = new Vue({
  ...
  directives: {
    'scroll-class': VueScrollClass,
  },
  ...
});
```

## Usage ##

vue-scroll-class defaults to adding the class 'sticky' to the attached element after the page has been scrolled 100px:
```html
<div v-scroll-class>I'll get the class 'sticky' after 100px!</div>
```

To override these defaults, add a class name or a different number of pixels in the appropriate place:

```html
<div v-scroll-class:differentClass=645>I'll get the class 'differentClass' after 645px!></div>
```
