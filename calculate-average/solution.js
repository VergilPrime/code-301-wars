function find_average(array) {
  let length = array.length;
  let total = 0;
  array.forEach((value) => {
    total = total + value;
  })
  let average = total / length;
  return average;
}
