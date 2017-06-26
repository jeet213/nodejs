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

placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);

