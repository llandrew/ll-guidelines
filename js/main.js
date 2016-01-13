(function($) {

  function whichTransitionEvent() {
    var t,
        el = document.createElement('fakeelement');

    var transitions = {
      'transition'       : 'transitionend',
      'OTransition'      : 'oTransitionEnd',
      'MozTransition'    : 'transitionend',
      'WebkitTransition' : 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent();

  $('nav').stickyNavbar();

  $('li.nav__item').click(function(e) {
    e.preventDefault();

    var content = $('div#content__' + $(this).attr('data-tab')),
        sections = content.find('section, h2, h3, h4, p, pre, blockquote, ul, li');

    if (content.css('opacity') > 0)
      return true;
    
    $('div.content').css('display', 'none').removeClass('open');
    $('div.content section').removeClass('open');
    
    content.css('display', 'block').toggleClass('open');

    for (var i = 0; i < sections.length; i++) {
      // setTimeout(
      //   (function(index) {
      //     return function() {
      //       var section = sections.eq(index),
      //           sectionBottom = section.offset().top + section.height(),
      //           windowBottom = $(window).scrollTop() + $(window).height();

            //if ( sectionBottom < windowBottom ) {
              // sections.eq(i)
              //   .addClass('open');
            //}
      //     }
      //   })(i),
      //   i * 175
      // );
    };

    $('li.nav__item').removeClass('active');

    $(this).addClass('active');
  });

  // window.onscroll = function() {

  //   var sections =  $('div.content.open')
  //                     .find('section,h2,h3,h4,p,pre,blockquote,ul,li').not('.open'),
  //       lastOpen =  $('div.content.open')
  //                     .find('section.openh2.open,h3.open,h4.open,p.open,pre.open,blockquote.open,ul.open,li.open').last(),
  //       lastOpenBottom = lastOpen.offset().top + lastOpen.height(),
  //       windowBottom   = $(window).scrollTop() + $(window).height();

  //   if (lastOpenBottom > windowBottom)
  //     return false;

  //   for (var i = 0; i < sections.length; i++) {

  //     var section       = sections.eq(i),
  //         sectionBottom = section.offset().top + section.height();

  //     if (sectionBottom > windowBottom)
  //       return false;

  //     setTimeout(
  //       (function(section) {
  //         section.addClass('open');
  //       })(section),
  //       i * 375
  //     );

  //   }
  // }

  $('section h2').click(function(e) {
    e.preventDefault();

    $(this).parent('section').toggleClass('expanded');
  });
})(jQuery);