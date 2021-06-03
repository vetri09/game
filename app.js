//getting random value
let number = Math.floor(Math.random()*101);
console.log(number);
function guessFun()
{
  let guessValue = document.getElementById("guess").value; 
  let display = document.getElementById("result");
  if(guessValue==number)
    {
      display.textContent="correct!";
    }
  else if(guessValue>number)
    {
      display.textContent="too high!";
    }
  else if(guessValue<number)
    {
      display.textContent="too low!";
    }
}