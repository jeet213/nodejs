/**
 * Common utils example..
 * 
 */

/*  Difference between == and ===    */

console.log(9=='9');
console.log(9==='9');

/*    Node js object  In NodeJs every object is reference */

var bucky ={
		favfood:"rice",
		movie:"gulam"
};

var mybucky=bucky;
mybucky.favfood="Dal";

console.log(bucky.favfood);