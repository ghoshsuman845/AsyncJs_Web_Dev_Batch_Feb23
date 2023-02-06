// a callback function is a function which is:
// - passed as an argument to another function
// - invoked inside the outer function to which it is passed as an argument to complete some action

// payment
// order is placed/not

// here, the order completion depends on the status of payment

function orderPlaced(callGetPaymentStatus) {
    let result = callGetPaymentStatus();
    result ?
        console.log("payment successful, order has been placed") :
        console.log("payment failed, order could not be placed");
}

function getPaymentStatus() {
    return false;
}

orderPlaced(getPaymentStatus)

// Creating our own ice cream parlour
let stocks = {
    fruits: ['banana', "mango", "pineapple", "grapes"],
    holder: ["cone", "cup", "stick"],
    liquid: ["water", "ice"],
    toppings: ["choco chips", "sprinkles", "dry fruits"]
}

function order(fruitName, call_production) {
    setTimeout(function () {
        console.log(`${stocks.fruits[fruitName]} has been picked by customer`);
        call_production()   
     }, 2000)
}

function production() {
    setTimeout(function () { 
        console.log("production has started");  
        setTimeout(function () {
            console.log("the fruits have been chopped");  
            setTimeout(function () {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
                setTimeout(function () { 
                    console.log("start the machine");
                    setTimeout(function () { 
                        console.log(`ice cream is placed on ${stocks.holder[0]}`);
                        setTimeout(function () { 
                            console.log(`${stocks.toppings[1]} added`);
                            setTimeout(function () { 
                                console.log('serve the ice cream');
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000) 
}

order(2,production)
