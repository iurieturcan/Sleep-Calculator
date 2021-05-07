const getSleepHours = day => {
  if(day === 'monday') {
    return 8;
} else if (day === 'tuesday') {
  return 6;
} else if (day === 'wednesday') {
  return 7;
} else if (day === 'thursday') {
  return 8;
}else if (day === 'friday') {
  return 5;
}else if (day === 'saturday') {
  return 4;
}else if (day === 'sunday') {
  return 8;
}
}
const getActualSleepHours = () => {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday' )+
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('Perfect Amount of Sleep!');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log('Got More ' + (actualSleepHours - idealSleepHours) + 'sleep than needed!');
  } else if(actualSleepHours < idealSleepHours) {
  console.log('You should get more sleep! You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep.');
} else {
  console.log('Error!');
}
};
calculateSleepDebt();

//Extra Practice//
const getActualSleepHours1 = () => {
    return 8 + 6 + 7 + 8 + 5 + 4 + 8;
  }
  console.log(getActualSleepHours1());
