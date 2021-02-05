

export function get_rand_num() {

  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  let res = [];
  let valid_num = false;

  while (!valid_num) {
    for (let i = 0; i < 4; i ++) {
      res[i] = getRandomInt();
    }
    let num_as_set = Array.from(new Set(res));
    if (num_as_set.length == 4) {
      valid_num = true;
    }
  }

  return res;
}

export function get_hint(guess, target) {
    let right_num = 0; //Right number but not the right spot
    let right_spot = 0; //Right number and irght spot
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (guess[i] == target[j]) {
          right_num += 1;
          if (i == j) {
            right_spot += 1;
            right_num -= 1;
          }
        }
      }
    }
    let hint = right_spot.toString() + "A" + right_num.toString() + "B";
    return hint;
}

export function uniq(xs) {
    return Array.from(new Set(xs));
}

export function lives_left(guesses) {
    return 8 - guesses.length;
}

export function check_win(guesses, target) {
    let targ = "";
    for (let i = 0; i < 4; i++) {
      targ = targ + target[i];
    }
    return (guesses[guesses.length - 1] === targ);
}
