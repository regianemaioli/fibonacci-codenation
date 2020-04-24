'use strict'

const fibonacci = () => {
    const arrFibo = [0, 1]
    while (arrFibo [arrFibo.length -1] <= 350) {
        const  proxNum = 
        arrFibo[arrFibo.length -1] + 
        arrFibo[arrFibo.length -2];
        arrFibo.push(proxNum);
    }
    return arrFibo;

};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
