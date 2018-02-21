// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   if (currency > 10000) {
       return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   } else if (currency <= 0) {
       return {};
   }else{
    let coins,Money,array,value;
    value = currency;
    Money = {};
    coins = ['H','Q','D','N','P'];
    array = [50,25,10,5,1];
    for(let i = 0; i <= array.length - 1; i++){
        if (Math.floor(value/array[i]) != 0) {
            Money[coins[i]] = Math.floor(value/array[i]);
            value = value - (Math.floor(value/array[i])) * array[i];
        } else {
            continue;
        }
    }
    return Money;
   }
}
