submit.addEventListener('click', () => {

  let raceNumber = Math.floor(Math.random() * 1000); 
  let early = true;
  let ageInput = document.getElementById('age-input');

  let age = ageInput.value;
  let raceDisplay = document.getElementById('race');

  if (age >= 18 && early) {
    raceNumber = raceNumber + 1000;
    //console.log(raceNumber)
  }
  
  if (age > 18 && early) {
    raceDisplay.innerText = `Your race number ${raceNumber} start\'s at 9:30`;
  } else if(age > 18 && !early) {
    raceDisplay.innerText = `Your race number ${raceNumber} start\'s at 11:00`;
  }
  else if (age < 18) {
    raceDisplay.innerText = `Your race number ${raceNumber} start\'s at 12:30`;
  } else {
    raceDisplay.innerText = `Please see registration desk`;
  }
});