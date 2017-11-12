function solution(str){
  str = str.split('').reverse().join('');
  let barr = [];
  for(i = str.length - 1; i >= 0; i--) {
    barr.push(str.split('')[i]);
  }
  str = barr.join('');
  barr = [];
  for(i=0; i < str.length; i++){
    barr.unshift(str.split('')[i]);
  }
  str = barr.join('');
  return str;
}
