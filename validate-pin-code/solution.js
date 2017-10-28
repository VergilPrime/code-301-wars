function validatePIN (pin) {
  if(! /^[0-9]{4,6}$/.test(pin)) return(false);
  if(pin.length === 5) return(false);
  return(true);
}
