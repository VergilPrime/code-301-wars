var replaceDots = function(str1) {
  var i = false;
  while(!i) {
    var str2 = str1.replace('.', '-');
    if(str1 === str2) {
      i = true;
      return(str1);
    } else {
      str1 = str2;
    }
  }
}
