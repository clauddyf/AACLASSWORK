class Clock {
  constructor() {
    let tod = new Date();
    this.hh = tod.getHours();
    this.mm = tod.getMinutes();
    this.ss = tod.getSeconds();
    // console.log(this); // this still refers to the clock instance

    // const arrow = () => {
    //   console.log("IN ARROW FUNCtion");
    //   console.log(this);
    // };

    // const normalFunction = function() {
    //   console.log("IN NORMAL FUNCTION");   //this will be undefined
    //   console.log(this);
    // };

    // arrow();
    // normalFunction();

    // setInterval(() => this._tick(), 1000);
    setInterval(this._tick.bind(this), 1000);


    // in set interval, it will look something like this:
    // function setInterval(callback, interval) {
    //   ///
    //   callback()
    // }

  }
  printTime(){
    console.log(`${this.hh}:${this.mm}:${this.ss}`);
  }

  _tick() {
    // console.log('tick');
    // this by default points the window
    // debugger;
    // by doing this._tick.bind(this), we force this to point to the clock instance
    // console.log("in tick, this is: ", this);
    this.printTime();
    this.ss++;
    if (this.ss === 60){
      this.ss = 0;
      this.mm ++;
    }
    if (this.mm === 60){
      this.mm = 0;
      this.hh ++;
    }
    this.hh = this.hh % 24;
    
  }
};

