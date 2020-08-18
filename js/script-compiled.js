'use strict';

var GROUPS = ['friends', 'family', 'millenials', 'grand parents', 'kids', 'parents', 'techies', 'hipsters', 'artists', 'musicians', 'teachers', 'students', 'lawyers', 'banks', 'doctors', 'nurses', 'everyone'];

var main = {
  init: function init() {
    this.animateLanding();
    this.addEventListeners();
  },
  addEventListeners: function addEventListeners() {
    var scrollDownLink = document.querySelector('.homepage-header__icon-link');
    var scrollDownText = document.querySelector('.homepage-header__scroll-text');
    var firstWorkSection = document.querySelector('.work-image-section');
    this.addScrollDown(scrollDownLink, firstWorkSection);
    this.addScrollDown(scrollDownText, firstWorkSection);
  },
  addScrollDown: function addScrollDown(scrollNode, firstWorkSection) {
    if (scrollNode) {
      scrollNode.addEventListener('click', function () {
        $("html, body").animate({ scrollTop: $(firstWorkSection).position().top - 100 });
      });
    }
  },
  animateLanding: function animateLanding() {
    if (document.querySelector('body').classList.contains('home')) {
      this.iterateGroups(document.querySelector('.homepage-header__groups'), GROUPS);
    } else if (document.querySelector('.homepage-header__icon-container')) {
      document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
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
