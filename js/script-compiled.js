'use strict';

var GROUPS = ['friends', 'family', 'millenials', 'baby boomers', 'kids', 'mothers', 'fathers', 'techies', 'hipsters', 'old schoolers', 'artists', 'musicians', 'teachers', 'students', 'lawyers', 'accountants', 'doctors', 'otakus', 'nurses', 'everyone'];

var iterateGroups = function iterateGroups($elem, groups, index) {
  setTimeout(function () {
    index = index == undefined ? 0 : index;
    $elem.text(groups[index]);
    if (index != groups.length - 1) {
      iterateGroups($elem, groups, index + 1);
    } else {
      $('.homepage-header__subtitle-container').addClass('anim-slide-up');
      $('.homepage-header__subtitle-container').addClass('show');
      $('.homepage-header__icon-container').addClass('anim-slide-up');
      $('.homepage-header__icon-container').addClass('show');
    }
  }, 100);
};

(function () {
  if ($('body').hasClass('home')) {
    iterateGroups($('.homepage-header__groups'), GROUPS);
  } else {
    $('.homepage-header__icon-container').addClass('anim-slide-up');
    $('.homepage-header__icon-container').addClass('show');
  }
})();
