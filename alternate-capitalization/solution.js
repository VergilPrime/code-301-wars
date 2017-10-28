function capitalize(s){
  sarray = s.split('');
  let array1 = [];
  let array2 = [];
  sarray.forEach(function(value,index) {
    if(index % 2) {
      array1.push(value.toLowerCase());
      array2.push(value.toUpperCase());
    } else {
      array1.push(value.toUpperCase());
      array2.push(value.toLowerCase());
    }
  });
  return [array1.join(''),array2.join('')];
}
