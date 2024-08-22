const removeFromArray = function() {
    let initialArray = arguments[0];
    let toBeRemoved = Array.from(arguments);
    toBeRemoved.shift(); //removes contents of initialArray from arguments
    let finalArray = [];
    
    outer: for (let i = 0; i < initialArray.length; i++){
         for (let j = 0; j < toBeRemoved.length; j++){
            if (initialArray[i] === toBeRemoved[j]){
                continue outer;
            }
         }
         finalArray.push(initialArray[i]);
    }
    return finalArray
};


// Do not edit below this line
module.exports = removeFromArray;
