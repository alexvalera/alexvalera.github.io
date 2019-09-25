'use strict';

var GROUPS = ['friends', 'family', 'millenials', 'grand parents', 'kids', 'mothers', 'fathers', 'techies', 'hipsters', 'old schoolers', 'artists', 'musicians', 'teachers', 'students', 'lawyers', 'accountants', 'doctors', 'otakus', 'nurses', 'everyone'];

var main = {
  init: function init() {
    this.animateLanding();
  },
  animateLanding: function animateLanding() {
    if (document.querySelector('body').classList.contains('home')) {
      this.iterateGroups(document.querySelector('.homepage-header__groups'), GROUPS);
    } else {
      document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
    }
    var scrollDownLink = document.querySelector('.homepage-header__icon-link');
    if (scrollDownLink) {
      scrollDownLink.addEventListener('click', function () {
        var firstWorkSection = document.querySelector('.work-image-section');
        $("html, body").animate({ scrollTop: $(firstWorkSection).position().top });
      });
    }
  },
  iterateGroups: function iterateGroups(elem, groups, index) {
    var _this = this;

    setTimeout(function () {
      index = index == undefined ? 0 : index;
      elem.innerText = groups[index];
      if (index != groups.length - 1) {
        _this.iterateGroups(elem, groups, index + 1);
      } else {
        document.querySelector('.homepage-header__subtitle-container').classList.add('anim-slide-up', 'show');
        document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
      }
    }, 100);
  }
};

main.init();
