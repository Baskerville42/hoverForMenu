# jquery.hoverForMenu.js

Simple jQuery plugin for easy navigation through drop-down menus.

### How to use
```javascript
$('#mainmenu > ul > li').hoverForMenu({
  onMouseEnter: {
    t: 300, // Timeout for mouse enter callback, default val 300ms.
    fn: function () { // Mouse enter callback.
      $('.dropdown', this).addClass('visible');
    }
  },
  onMouseLeave: {
    t: 300, // Timeout for mouse leave callback, default val 300ms.
    fn: function () { // Mouse leave callback.
      $('.dropdown', this).removeClass('visible');
    }
  }
});
```

Do not use the `:hover` state in CSS to display the drop-down menu!. This is not compatible with this plugin.

### Demo
This is [JSFiddle](https://jsfiddle.net/Baskerville42/pj0y0gm1/) with demo.
