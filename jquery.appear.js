var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function appeared(selector) {
    return $(selector).filter(function() {
      return $(this).is(':appeared');
    });
  }

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = appeared(selectors[index]);

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  }

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':'].appeared = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());

}
/*
     FILE ARCHIVED ON 08:17:25 Dec 27, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:17:48 Nov 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.544
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 12.855
  LoadShardBlock: 137.463 (3)
  PetaboxLoader3.datanode: 142.545 (4)
  load_resource: 121.372
  PetaboxLoader3.resolve: 47.763
*/