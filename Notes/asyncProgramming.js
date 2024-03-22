// CALLBACK FUNCTIONS
function cookBurger(callback) {
    for (let i = 0; i < 5; i++) {
     console.log("Burger is cooking");
  }
  // Simulating burger cooking time
  setTimeout(function () {
    console.log("Burger is ready!");
  }, 5000);
  callback();
}

function eatBurger() {
    setTimeout(function () {
    console.log("Nom nom nom!");
    
  }, 2000);
//   console.log("Nom nom nom!");
}
cookBurger(eatBurger);



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PROMISES WITH CHAINING

function placeOrder() {
    return new Promise(function(resolve) {
      // Simulating placing an order
      setTimeout(function() {
        const burger = 'Delicious Burger';
        console.log('Order placed:', burger);
        resolve(burger);
      }, 1000);
    });
  }
  
  function cookBurger(burger) {
    return new Promise(function(resolve) {
      // Simulating cooking the burger
      setTimeout(function() {
        console.log(burger + ' is cooking...');
        resolve(burger);
      }, 7000);
      console.log("idkkkkk");
    });
  }
  
  function serveBurger(burger) {
    return new Promise(function(resolve) {
      // Simulating serving the burger
      setTimeout(function() {
        console.log(burger + ' is ready! Enjoy!');
        resolve(burger);
      }, 1000);
    });
  }
  
  function eatBurger(burger) {
    // Simulating eating the burger
    console.log('Eating ' + burger + '... Nom nom nom!');
  }
  
  // Chain the functions
  placeOrder()
    .then(cookBurger)
    .then(serveBurger)
    .then(eatBurger);

 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CALLBACK HELL

    function orderBurger(callback) {
        console.log('Ordering Burger...');
        setTimeout(function() {
          console.log('Burger is ready!');
          callback();
        }, 1000);
      }
      
      function orderPizza(callback) {
        console.log('Ordering Pizza...');
        setTimeout(function() {
          console.log('Pizza is ready!');
          callback();
        }, 3000);
      }
      
      function orderSoda(callback) {
        console.log('Ordering Soda...');
        setTimeout(function() {
          console.log('Soda is ready!');
          callback();
        }, 2000);
      }
      
      // Callback hell example without arrow functions
      orderBurger(function() {
        orderPizza(function() {
          orderSoda(function() {
            console.log('Enjoy your meal!');
          });
        });
      });

//------------------------------------------------------------------------------------------------------------------------------------------------------------
      
// ASYNC AND AWAIT

function makeCoffee() {
    return new Promise(function (resolve) {
        console.log("ORDERED COFFEE")
      // Simulating coffee-making time
      setTimeout(function () {
        console.log("Coffee is ready!");
        resolve();
      }, 8000);
    });
  }
  
  async function enjoyCoffee() {
    console.log("Browsing phone...");
    await makeCoffee();
    console.log("got my coffee");
    setTimeout(function(){
        console.log("finished my coffee");
    },1000);
  }
  
  enjoyCoffee();
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------

  // Simple Promise function 

  // Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    resolve(randomNumber); // Resolve the promise with a value
  } else {
    reject(new Error('Random number is greater than or equal to 0.5')); // Reject the promise with an error
  }
});

// Consuming the Promise
myPromise
  .then((result) => {
    console.log('Resolved:', result); // Handling the resolved value
  })
  .catch((error) => {
    console.error('Rejected:', error.message); // Handling the error
  });





  // Creating a Promise
const myPromise1 = new Promise(function(resolve, reject) {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    resolve(randomNumber); // Resolve the promise with a value
  } else {
    reject(new Error('Random number is greater than or equal to 0.5')); // Reject the promise with an error
  }
});

// Consuming the Promise
myPromise1
  .then(function(result) {
    console.log('Resolved:', result); // Handling the resolved value
  })
  .catch(function(error) {
    console.error('Rejected:', error.message); // Handling the error
  });

 
   
    
     
      
       
        
          