const removeFromArray = function (array, ...removeElements) {
  for (let i = 0; i < removeElements.length; i++) {
    const element = removeElements[i];
    
    while (array.includes(element)) {
      const index = array.indexOf(element);
      array.splice(index, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
