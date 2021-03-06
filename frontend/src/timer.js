const Timer = (function createTimerClass() {

  let t;

  return class Timer {

    static countdown(secs, callback) {
      const time = document.getElementById('time');
      const minutes = Math.floor(secs / 60);
      const seconds = secs % 60;
      time.innerText = `${minutes}:${String(seconds).padStart(2, '0')}`;
      if (secs === 0) {
        callback();
      } else {
        t = setTimeout(function() { Timer.countdown(secs - 1, callback) }, 1000);
      }
    }

    static stop() {
      clearTimeout(t);
    }

  };

})();
