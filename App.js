import { useState } from 'react';
import { get_rand_num, uniq, get_hint, lives_left, check_win } from './Game.js';
import './App.css';

function App() {
  const [target, setTarget] = useState(get_rand_num); //4 Digit target number
  const [guesses, setGuesses] = useState([]); //List of all guesses
  const [guess, setGuess] = useState([]); //Current guess
  const [decipher, setDecipher] = useState([]); //List of all hints

  let lives = lives_left(guesses);
  let win = false;

  function updateGuess(ev) {
    let num = ev.target.value;
    if (num.length > 4) {
      num = num.substring(0,4);
    }

    setGuess(num);
  }

  function makeGuess() {
    console.log(guess);
    if (Array.from(new Set(guess)).length == 4 && lives > 0 && !isNaN(guess)) {
      setGuesses(guesses.concat(guess));
      setDecipher(decipher.concat(get_hint(guess, target)));
      setGuess([]);
    }
    else if (isNaN(guess)) {
      alert("Guess must be a number!");
    }
    else if (lives <= 0) {
      alert("Reset the Game to try agin!");
    }
    else {
      alert("All numbers must be unique!");
    }
  }

  function keypress(ev) {
    if (ev.key == "Enter") {
      makeGuess();
    }
  }

  function resetGame() {
    setGuesses([]);
    setDecipher([]);
    setTarget(get_rand_num);
  }
//Displays if lost
  if (lives <= 0) {
    return (
      <div className="App">
        <h1>You Lose!</h1>
        <p>
          <input type="text"
                 value={guess}
                 onChange={updateGuess}
                 onKeyPress={keypress} />
          <button onClick={makeGuess}>
            Guess
          </button>
        </p>
        <table>
          <tr>
            <td>1</td>
            <td>{guesses[0] ? guesses[0] : ""}</td>
            <td>{decipher[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{guesses[1] ? guesses[1] : ""}</td>
            <td>{decipher[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{guesses[2] ? guesses[2] : ""}</td>
            <td>{decipher[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{guesses[3] ? guesses[3] : ""}</td>
            <td>{decipher[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{guesses[4] ? guesses[4] : ""}</td>
            <td>{decipher[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{guesses[5] ? guesses[5] : ""}</td>
            <td>{decipher[5]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{guesses[6] ? guesses[6] : ""}</td>
            <td>{decipher[6]}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{guesses[7] ? guesses[7] : ""}</td>
            <td>{decipher[7]}</td>
          </tr>
        </table>
        <h1 className="lives">Lives: {lives}</h1>
        <p>
          <button onClick={() => resetGame()}>
            Reset
          </button>
        </p>
      </div>
    );
  }
//Displays if won
  if (check_win(guesses, target)) {
    return (
      <div className="App">
        <h1>You Win!</h1>
        <p>
          <input type="text"
                 value={guess}
                 onChange={updateGuess}
                 onKeyPress={keypress} />
          <button onClick={makeGuess}>
            Guess
          </button>
        </p>
        <table>
          <tr>
            <td>1</td>
            <td>{guesses[0] ? guesses[0] : ""}</td>
            <td>{decipher[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{guesses[1] ? guesses[1] : ""}</td>
            <td>{decipher[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{guesses[2] ? guesses[2] : ""}</td>
            <td>{decipher[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{guesses[3] ? guesses[3] : ""}</td>
            <td>{decipher[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{guesses[4] ? guesses[4] : ""}</td>
            <td>{decipher[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{guesses[5] ? guesses[5] : ""}</td>
            <td>{decipher[5]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{guesses[6] ? guesses[6] : ""}</td>
            <td>{decipher[6]}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{guesses[7] ? guesses[7] : ""}</td>
            <td>{decipher[7]}</td>
          </tr>
        </table>
        <h1 className="lives">Lives: {lives}</h1>
        <p>
          <button onClick={() => resetGame()}>
            Reset
          </button>
        </p>
      </div>
    );
  }

// Main Game
  return (
    <div className="App">
      <h1>4 Digits</h1>
      <p>
        <input type="text"
               value={guess}
               onChange={updateGuess}
               onKeyPress={keypress} />
        <button onClick={makeGuess}>
          Guess
        </button>
      </p>
      <table>
        <tr>
          <td>1</td>
          <td>{guesses[0] ? guesses[0] : ""}</td>
          <td>{decipher[0]}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{guesses[1] ? guesses[1] : ""}</td>
          <td>{decipher[1]}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{guesses[2] ? guesses[2] : ""}</td>
          <td>{decipher[2]}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>{guesses[3] ? guesses[3] : ""}</td>
          <td>{decipher[3]}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>{guesses[4] ? guesses[4] : ""}</td>
          <td>{decipher[4]}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>{guesses[5] ? guesses[5] : ""}</td>
          <td>{decipher[5]}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>{guesses[6] ? guesses[6] : ""}</td>
          <td>{decipher[6]}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>{guesses[7] ? guesses[7] : ""}</td>
          <td>{decipher[7]}</td>
        </tr>
      </table>
      <h1 className="lives">Lives: {lives}</h1>
      <p>
        <button onClick={() => resetGame()}>
          Reset
        </button>
      </p>
    </div>
  );
}

export default App;
