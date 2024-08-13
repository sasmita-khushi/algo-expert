function bestSeat(seats) {
  if (seats.length % 2 === 0) {
    let chooseSeat = Math.floor(seats.length / 2);
    return chooseSeat;
  } else if (seats.length % 2 === 1) {
    let chooseSeat = Math.floor(seats.length / 2) + 1;
    return chooseSeat;
  }
  return -1;
}

console.log(bestSeat([1, 0, 1, 0, 0, 0, 0, 1]));
