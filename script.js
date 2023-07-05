// Define the Pomodoro timer object
const pomodoroTimer = {
  totalTime: 25 * 60, // Total time in seconds for each Pomodoro session
  breakTime: 5 * 60, // Break time in seconds
  isRunning: false, // Flag to track if the timer is running
  timerInterval: null, // Reference to the setInterval function

  startTimer: function () {
    if (!this.isRunning) {
      this.isRunning = true;
      this.updateTimerUI();
      this.timerInterval = setInterval(() => {
        this.totalTime--;
        this.updateTimerUI();
        if (this.totalTime <= 0) {
          this.completeTimer();
        }
      }, 1000);
    }
  },

pauseTimer:function(){
    if(this.isRunning){
        clearInterval(this.timerInterval);
        this.isRunning=false;
    }
},

resetTimer:function(){
    this.pauseTimer();
    this.totalTime=25*60;
    this.updateTimerUI();
},

completeTimer:function(){
    clearInterval(this.timerInterval);
    this.isRunning=false;
    alert("pomodoro session complete");
    this.startbreak();
},

startbreak:function(){
    this.totalTime=5*60;
    this.updateTimerUI();
    alert("take a break");

},

updateTimerUI:function(){
    const minute=Math.floor(this.totalTime/60);
    const seconds=this.totalTime%60;
    const formattedTime=`${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    document.getElementById("timer").textContent=formattedTime;

},

};

// event handlers for the timer controls

document.getElementById("startbutton").addEventListener("click",function(){
    pomodoroTimer.startTimer();
});

document.getElementById("pausebutton").addEventListener("click",function(){
    pomodoroTimer.pauseTimer();
});

document.getElementById("resetbutton").addEventListener("click",function(){
    pomodoroTimer.resetTimer();
});





