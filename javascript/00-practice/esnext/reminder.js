class Reminder {
    constructor(text) {
      this.text = text;
    }
  
    remindMe(delay) {
      setTimeout(function() {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
      }, delay * 1000);
    }
  }

  const reminder1 = new Reminder('El reminder esta chachi');
  reminder1.remindMe(1)