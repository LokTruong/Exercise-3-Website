// // Event handing for scrolling animations
// function isElementInViewport(elem) {
//     var $elem = $(elem);
// }

// Looking at Stack Overflow approach towards scroll position events

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to change the state.
// function checkState() {
//     var $elem = $('.model_S .model_Y .model_3 .model_X .solar_panels .solar_roof .accessories');

//     // If the state hasn't already been changed
//     if ($elem.hasClass('start'))
//         return;

//     if (isElementInViewport($elem)) {
//         // Change the state
//         $elem.addClass('start');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkState();
// });