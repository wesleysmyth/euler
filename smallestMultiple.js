// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallest() {
  var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  var result = 2520;

  while (true) {
    for (var i = 0; i < numbers.length; i++) {
      if (result % numbers[i] > 0) {
        break;
      } else if (numbers[i] === 20) {
        return result;
      }
    }
    result += 20;
  }
}

smallest();

// result -> 232792560
