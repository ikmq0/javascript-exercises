const removeFromArray = function(array, ...elements) {
  const newArray = array.filter(val => !elements.includes(val));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
s