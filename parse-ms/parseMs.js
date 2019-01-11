function parseMs(ms) {
  let milliseconds = ms;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;

  const parsedTime = {
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  };

  parsedTime.days = parseInt((milliseconds / DAYS), 10);
  milliseconds %= DAYS;
  parsedTime.hours = parseInt((milliseconds / HOURS), 10);
  milliseconds %= HOURS;
  parsedTime.minutes = parseInt((milliseconds / MINUTES), 10);
  milliseconds %= MINUTES;
  parsedTime.seconds = parseInt((milliseconds / SECONDS), 10);
  milliseconds %= SECONDS;
  parsedTime.milliseconds = parseInt((milliseconds), 10);

  if (ms < 0) {
    if (parsedTime.milliseconds === 0) {
      parsedTime.milliseconds = -0;
    }
    if (parsedTime.seconds === 0) {
      parsedTime.seconds = -0;
    }
    if (parsedTime.minutes === 0) {
      parsedTime.minutes = -0;
    }
    if (parsedTime.hours === 0) {
      parsedTime.hours = -0;
    }
    if (parsedTime.days === 0) {
      parsedTime.days = -0;
    }
  }

  return parsedTime;
}

export {
  parseMs,
};
