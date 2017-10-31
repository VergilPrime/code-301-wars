function isNice(arr){
  if(arr.length === 0) return false;
  let match = true;
  arr.forEach(function(i) {
    console.log('Number is ' + i);
    console.log(`${i + 1} is missing? ${arr.indexOf(i + 1) === -1}`);
    console.log(`${i - 1} is missing? ${arr.indexOf(i - 1) === -1}`);
    if(arr.indexOf(i + 1) === -1 && arr.indexOf(i - 1) === -1){
      match = false
      return;
    }
  });
  return match;
}
