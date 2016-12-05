var jquery = require('jquery');
var director = require('director');

module.exports = (function (router) {
  router(jquery, window, document);
} (function ($, w, d) {
  $(function () {
    $sections = $('.route-section');

    $sections.hide();
    $sections.css('visibility', 'visible');

    var logRoute = function () {
      console.log('Current route: ' + window.location.hash.slice(2));
    }

    var allroutes = function() {
      var route = window.location.hash.slice(2);
      var $activeSection = $('.route-section.active');
      var $currentSection = $('[data-route=' + route + ']');

      if ($activeSection.length) {
        $activeSection.removeClass('active');
        $activeSection.hide(250);

        $currentSection.addClass('active');
        $currentSection.show(250);
      } else {
        $currentSection.addClass('active')
        $currentSection.show(250);
      }
    };

    var routes = {
      '/home': logRoute,
      '/vote': logRoute,
      '/results': logRoute,
    };

    var router = director.Router(routes);

    router.configure({
      on: allroutes,
    });

    router.init(['/home']);
  });
}));