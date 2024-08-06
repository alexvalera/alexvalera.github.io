

const GROUPS = [
  'friends',
  'family',
  'gen-z',
  'millenials',
  'grand parents',
  'kids',
  'parents',
  'techies',
  'hipsters',
  'artists',
  'musicians',
  'teachers',
  'students',
  'lawyers',
  'banks',
  'doctors',
  'nurses',
  'everyone'
];

const main = {
  init() {
    this.animateLanding();
    this.addEventListeners();
  },
  addEventListeners() {
    const scrollDownLink = document.querySelector('.homepage-header__icon-link');
    const scrollDownText = document.querySelector('.homepage-header__scroll-text');
    const firstWorkSection = document.querySelector('.work-image-section');
    this.addScrollDown(scrollDownLink, firstWorkSection);
    this.addScrollDown(scrollDownText, firstWorkSection);
  },
  addScrollDown(scrollNode, firstWorkSection) {
    if (scrollNode) {
      scrollNode.addEventListener('click', () => {
        $("html, body").animate({ scrollTop: $(firstWorkSection).position().top - 100 });
      });
    }
  },
  animateLanding() {
    if (document.querySelector('body').classList.contains('home')) {
      this.iterateGroups(document.querySelector('.homepage-header__groups'), GROUPS);
    } else if (document.querySelector('.homepage-header__icon-container')) {
      document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
    }
  },
  iterateGroups(elem, groups, index) {
    setTimeout(() => {
      index = index == undefined ? 0 : index;
      elem.innerText = groups[index];
      if (index != groups.length - 1) {
        this.iterateGroups(elem, groups, index + 1);
      }
      else {
        document.querySelector('.homepage-header__subtitle-container').classList.add('anim-slide-up', 'show');
        document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
      }
    }, 100);
  }
};

main.init();

