function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  birds.filter((bird) => {
    return !geese.includes(bird);
  });
  return(birds);
  // return an array containing all of the strings in the input array except those that match strings in geese
};
