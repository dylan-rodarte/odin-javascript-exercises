const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }

    if (num1 <= 0 || num2 <= 0){
        return 'ERROR';
    }

    if (num1 > num2){
        return sumLoop(num1, num2);
    }
    else if (num2 > num1){
        return sumLoop(num2, num1)
    }
    else{
        return 'ERROR';
    }


};

function sumLoop(bigger, smaller){
    let total = 0;
    for (i = smaller; i <= bigger; i++){
        total += i;
    }
    return total;
}

// Do not edit below this line
module.exports = sumAll;
