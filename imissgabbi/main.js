const countdown =  {
  selectors : {
    'months': '.countdown__months',
    'days': '.countdown__days',
    'hours': '.countdown__hours', 
    'minutes': '.countdown__minutes', 
    'seconds': '.countdown__seconds',  
  },
  init: function() {
    this.grabToday();
    this.initCountdown();
  },
  grabToday: function() {
    this.today = new Date();
  },
  initCountdown: function() {
    const dayText = document.querySelector(this.selectors.days); 
    const hourText = document.querySelector(this.selectors.hours);
    const minuteText = document.querySelector(this.selectors.minutes); 
    const secondText = document.querySelector(this.selectors.seconds); 

    const countdownDate = new Date("Jun 28, 2019 12:00:00").getTime();
    let countdownTimer = setInterval(function() {
      // Get todays date and time
      let now = new Date().getTime();
      
      // Find the distance between now an the count down date
      let distance = countdownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      dayText.innerText = days; 
      hourText.innerText = hours; 
      minuteText.innerText = minutes; 
      secondText.innerText = seconds;
      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(countdownTimer);
      }
    }, 1000);
  }
}; 

countdown.init();


const chat = {

  init:function() {
    const database = firebase.database();
    let messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', function(snapshot) {
      let messages = snapshot.val();
      $('.messages').html('');
      for (let entry in messages) {
        let markup = `<div class = "messages__block">
          <span class = "messages__author">
            ${messages[entry].name}
          </span>
          <p class = "messages__msg">
            ${messages[entry].message}
          </p>
        </div>`; 
        $('.messages').append(markup);
      }

    });
    this.addListeners(database);
    this.scrollToBottomOfMessages(2000);
  }, 

  addListeners: function(db) {
    const form = document.querySelector('.chat'); 
    const input = document.querySelector('.input-text'); 
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const radioVal = this.getUser();
      const messageVal = document.querySelector('.input-text').value; 
      let data = {
        name : radioVal,
        message: messageVal
      };
      let newMsgKey = db.ref().child('messages').push().key;
      let updates = {};
      updates['/messages/' + newMsgKey] = data;
      firebase.database().ref().update(updates);
      input.value = '';
      this.scrollToBottomOfMessages(0);
    });
  }, 

  getUser: function() {
    let alex = document.querySelector('.alex-input'); 
    let gabbi = document.querySelector('.gabbi-input'); 
    if (alex.checked) {
      return 'Alex'; 
    }
    else if (gabbi.checked) {
      return 'Gabbi';
    }
    else {
      return null;
    }
  }, 

  scrollToBottomOfMessages: function(sec) {
    const chat = document.querySelector('.messages'); 
    setTimeout(function() {
      chat.scrollTo(0, chat.scrollHeight);
    }, sec);
    
  }

};

chat.init();
