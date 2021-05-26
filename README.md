
# Ripple effect for elements

1kb gzipped vue-directive for enabling ripple effect on elements.

## [](https://github.com/najmubadr/vue-ripple-dir#how-to-install)How to install?

```
npm install vue-ripple-dir

```

## [](https://github.com/najmubadr/vue-ripple-dir#how-to-use)How to use?

```
import ripple from "vue-ripple-dir";

export default {
    directives: {
        ripple
    }
}

```

Now just bind it to your element:

```
<div v-ripple>Click me</div>

```

You can declare it global aswell

```
import ripple from "vue-ripple-dir";

Vue.directive("ripple", ripple);

```

## [](https://github.com/najmubadr/vue-ripple-dir#options)Options

You can invert the color:

```
<div v-ripple="{ color: invert }">Click me</div>

```

Or the time of the ripple transition in milliseconds:

```
<div v-ripple="{ duration: 500 }">Click me</div>

```

The default ripple color is:  `rgba( 0, 0, 0, 0.5)`
The inverted ripple color is:  `rgba( 255, 255, 255, 0.5)`

The default duration time is:  1000ms

## Keywords

-   [ripple](https://github.com/search?q=ripple)
-   [vue.js](https://github.com/search?q=vue.js)
