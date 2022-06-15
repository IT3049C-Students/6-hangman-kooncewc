

const guesses = []
correctguess = 0;
class Hangman {
  constructor(_canvas) {
    if (!_canvas) {
      throw new Error(`invalid canvas provided`);
    }

    this.canvas = _canvas;
    this.ctx = this.canvas.getContext(`2d`);
  }

  /**
   * This function takes a difficulty string as a patameter
   * would use the Fetch API to get a random word from the Hangman
   * To get an easy word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=easy
   * To get an medium word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=medium
   * To get an hard word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=hard
   * The results is a json object that looks like this:
   *    { word: "book" }
   * */
  getRandomWord(difficulty) {
    return fetch(
      `https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=${difficulty}`
    )
      .then((r) => r.json())
      .then((r) => r.word);
  }

  /**
   *
   * @param {string} difficulty a difficulty string to be passed to the getRandomWord Function
   * @param {function} next callback function to be called after a word is reveived from the API.
   */
  start(difficulty, next) {
r == this.word;
clearCanvas();
this.drawBase();

//show the game wrapper when pressing start
window.onload = function(){

  document.getElementById("start-button").addEventListener( 'click', changeClass);
  Event.preventDefault();
  

}


    // get word and set it to the class's this.word
    // clear canvas
    // draw base
    // reset this.guesses to empty array
    // reset this.isOver to false
    // reset this.didWin to false
  }
//remove hidden from gamewrapper
changeClass(){
  document.getElementById("gameWrapper").className == " ";
}
  /**
   *
   * @param {string} letter the guessed letter.
   */
  guess(letter) {

    if (letter == null || typeof(letter) !==  'string' || letter.length > 1  ){
throw 'Error in input!';

    }
    else{
letter.toLocaleLowerCase;
if(this.guesses == letter){
  throw 'letter already guessed!'
}
guesses.push(letter)

if (r.includes(letter)){

  checkWin();
  correctguess = correctguess + 1;
} else{

  onWrongGuess();
  wrongGuess = wrongGuess + 1;
}


    }
    // Check if nothing was provided and throw an error if so
    // Check for invalid cases (numbers, symbols, ...) throw an error if it is
    // Check if more than one letter was provided. throw an error if it is.
    // if it's a letter, convert it to lower case for consistency.
    // check if this.guesses includes the letter. Throw an error if it has been guessed already.
    // add the new letter to the guesses array.
    // check if the word includes the guessed letter:
    //    if it's is call checkWin()
    //    if it's not call onWrongGuess()
  }
//loops through the for loop until the letter 
  checkWin() {
    wordLength = word.length;
this.wordLength - this.correctguess == remainingLetter;

if (remainingLetter == 0){
  didWin = true;
  isOver = true;
}
    
    // using the word and the guesses array, figure out how many remaining unknowns.
    // if zero, set both didWin, and isOver to true
  }

  /**
   * Based on the number of wrong guesses, this function would determine and call the appropriate drawing function
   * drawHead, drawBody, drawRightArm, drawLeftArm, drawRightLeg, or drawLeftLeg.
   * if the number wrong guesses is 6, then also set isOver to true and didWin to false.
   */
  onWrongGuess() {
if (wrongGuess == 1 ){
  drawHead();
} 

elseif (wrongGuess == 2)
{
  drawBody();
}

elseif (wrongGuess == 3)
{
  drawRightArm();
} 
elseif (wrongGuess == 4)
{
drawLeftArm();
} 
elseif (wrongGuess == 5)
{
drawRightLeg();
} 
elseif(wrongGuess == 6)
{

  drawLeftLeg();
  isOver == true;
  didWin == false;

}

}

  



  /**
   * This function will return a string of the word placeholder
   * It will have underscores in the correct number and places of the unguessed letters.
   * i.e.: if the word is BOOK, and the letter O has been guessed, this would return _ O O _
   */

  //If the guess has the letter in it, then the letter is pushed into the placeholder, if it does not. an underscore is pushed in it's place until the length of the word has been gone thorough
  getWordHolderText() 

  {
    const placeholder = [];
    for (let i = 0; i < wordLength; i++){

      if (r.includes(guess)){
      placeholder.push(letter)
      
      } else {
          placeholder.push('_')

      }
    return placeholder;
  }
}

  /**
   * This function returns a string of all the previous guesses, seperated by a comma
   * This would return something that looks like
   * (Guesses: A, B, C)
   * Hint: use the Array.prototype.join method.
   */
  getGuessesText()
   {
guesses.join(', ');
let textGuess = guess.toString();

    return textGuess;
  }

  /**
   * Clears the canvas
   */
  clearCanvas() 
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Draws the hangman base
   */
  drawBase() 
  {
    this.ctx.fillRect(95, 10, 150, 10); // Top
    this.ctx.fillRect(245, 10, 10, 50); // Noose
    this.ctx.fillRect(95, 10, 10, 400); // Main beam
    this.ctx.fillRect(10, 410, 175, 10); // Base
  }

  drawHead() 
  {
this.ctx.beginPath();
this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
this.ctx.stroke(); 
  }

  drawBody()
   {
    this.ctx.moveTo(100,20);
    this.ctx.lineTo(100,100);
    this.ctx.stroke();
   }


  drawLeftArm() 
  {
    this.ctx.strokeStyle = 'green';
  
    this.ctx.beginPath();
   this.ctx.moveTo(100, 100);
    this.ctx.lineTo(300, 100);
   this.ctx.stroke();
   }
  

  drawRightArm() 
  {
    this.ctx.strokeStyle = 'green';
  
    this.ctx.beginPath();
   this.ctx.moveTo(-50, 100);
    this.ctx.lineTo(300, 100);
   this.ctx.stroke();
   }
  

  drawLeftLeg()
  {
ctx.beginPath();
ctx.moveTo(0, -50);
context.lineTo(140, 70);
ctx.lineWidth = 1;
ctx.stroke();

  }

  drawRightLeg()
   {
    ctx.beginPath();
ctx.moveTo(0, -50);
ctx.lineTo(100, 100);
ctx.lineWidth = 1;
ctx.stroke();
   }
}
