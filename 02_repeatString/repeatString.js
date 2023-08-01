const repeatString = function(str, repeat) {
    if(repeat < 0){
        return "ERROR";
    }

    let ret = "";
    for(let i = 0; i < repeat; i++){
        ret += str;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
