var getRegvalue = function(){
    return 10;
}

console.log(getRegvalue());

const getArrowvalue = () => { // => called fat arrow
    return 10;
}
// if has single value you can write () => 10;
console.log(getArrowvalue());


const getArrowProductvalue = (m) => m*10; 
// if single argument passed can omit () as m => m*10; but not in multiple param
console.log(getArrowProductvalue(5));

const getArrowProductSumvalue = (m,bonus) => m*10+bonus;
console.log(getArrowProductSumvalue(5,50));

//find type 
console.log(typeof getArrowvalue);