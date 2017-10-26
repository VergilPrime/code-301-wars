function insertDash(num) {
  let splitnum = num.toString().split('');
  for(let i = 0; i < splitnum.length; i++){
    if(splitnum[i] % 2 && splitnum[i - 1] % 2) splitnum.splice(i,0,'-');
  }
  return splitnum.join('');
}
