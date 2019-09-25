

const GROUPS = [
  'friends', 
  'family', 
  'millenials', 
  'grand parents',
  'kids', 
  'mothers', 
  'fathers', 
  'techies', 
  'hipsters', 
  'old schoolers', 
  'artists', 
  'musicians', 
  'teachers', 
  'students',
  'lawyers', 
  'accountants', 
  'doctors', 
  'otakus', 
  'nurses',
  'everyone'
];

const main = {
  init() {
    this.animateLanding();
  }, 
  animateLanding() {
    if (document.querySelector('body').classList.contains('home')) {
      this.iterateGroups(document.querySelector('.homepage-header__groups'), GROUPS);
    } else {
      document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
    }
    const scrollDownLink = document.querySelector('.homepage-header__icon-link'); 
    if (scrollDownLink) {
      scrollDownLink.addEventListener('click', ()=>{
        const firstWorkSection = document.querySelector('.work-image-section');
        $("html, body").animate({ scrollTop: $(firstWorkSection).position().top});
      });
    }
  },
  iterateGroups(elem, groups, index) {
    setTimeout(()=> {
      index = index == undefined ? 0 : index;
      elem.innerText = groups[index];
      if (index != groups.length - 1) {
        this.iterateGroups(elem, groups, index+1);  
      }
      else {
        document.querySelector('.homepage-header__subtitle-container').classList.add('anim-slide-up', 'show');
        document.querySelector('.homepage-header__icon-container').classList.add('anim-slide-up', 'show');
      }    
    }, 100);
  }
};

main.init(); 

