(function ($) {
  /**
   * @file Simple jQuery plugin for easy navigation through drop-down menus.
   * @param {Object} options.onMouseEnter - On mouse enter params.
   * @param {Number} options.onMouseEnter.t - Timeout for mouse enter callback, default val 300ms.
   * @param {Object} options.onMouseEnter.fn - Mouse enter callback.
   * @param {Object} options.onMouseLeave - On mouse leave params.
   * @param {Number} options.onMouseLeave.t - Timeout for mouse leave callback, default val 300ms.
   * @param {Object} options.onMouseLeave.fn  - Mouse leave callback.
   * @author Alexander Tartmin [alexander@tartmin.name]
   * @version 1.0.0
   */

  $.fn.hoverForMenu = function (options) {
    var defaultOptions = {
      onMouseEnter: {
        t: 300,
        fn: function () {
          console.error('You miss set call function!', $(this));
        }
      },
      onMouseLeave: {
        t: 300,
        fn: function () {
          console.error('You miss set call function!', $(this));
        }
      }
    };

    options = $.extend(true, defaultOptions, options);

    return this.each(function () {
      var $this = $(this);
      var timer = null;

      $this.hover(function () {
        _hoverCallback('onMouseEnter');
      }, function () {
        _hoverCallback('onMouseLeave');
      });

      function _hoverCallback(action) {
        clearTimeout(timer);

        timer = setTimeout(function () {
          options[action].fn.call($this);
        }, options[action].t);
      }
    });
  };
})(jQuery);
