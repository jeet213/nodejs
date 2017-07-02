/**
 * Callback function example..
 */

function cookAndDeliverFood(callback){
	setTimeout(callback,5000);
}

function placeAndOrder(orderNumber){
	console.log("customer order",orderNumber);
	cookAndDeliverFood(function(){
		console.log("delivery food",orderNumber);
	});
}

/*placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);*/

/** more callback **/

var calculate = function(a, b, op) {
	
	switch (op) {
	case '+':
		return a + b;
		
	case '-':
		return a - b;
		
	case '*':
		return a * b;
				
	case '/':
		return a / b;
		//break;
		
	default:
		return "operation not support";
	}
}

function calc(a,b,op,calback){
	
	console.log("input:%s and %s",a,b);
	var value =calback(a,b,op);
	console.log("return value",value);
	
}

calc(3,4,'+',calculate);
calc(3,4,'-',calculate);
calc(3,4,'*',calculate);
