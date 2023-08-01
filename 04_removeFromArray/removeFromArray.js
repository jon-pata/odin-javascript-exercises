const removeFromArray = function(arr, ...args) {
    
    args.forEach((arg) => {
        const index = arr.indexOf(arg);
        if(index > -1){
            arr.splice(index, 1);
        }
    });
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
