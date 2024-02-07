// Exercise 1: Define a Vehicle Interface
// Task: Create an interface named `Vehicle`. It should have two properties: `model` (type string) and `year` (type number), 
// and a method `start` that does not take any arguments and does not return anything (`void`). The `start` method should log "Vehicle started" when called.



// Exercise 2: Implement the Vehicle Interface in a Motorcycle Class
// Task: Create a class named `Motorcycle` that implements the `Vehicle` interface you defined in Exercise 1. 
// Implement the `start` method within the class so that it logs "Motorcycle started" to the console.



// Exercise 3: Create a Union Type for Payment
// Task: Define a union type named `PaymentType` that can either be a `string` (for cash payments) or an object for card payments. 
// The object should have two properties: `cardType` (string) and `cardNumber` (string).



// Exercise 4: Process a Payment
// Task: Write a function named `processPayment` that takes a parameter of type `PaymentType`. 
// If the payment is cash (a string), log "Processing cash payment" to the console. If it's a card payment (an object), log "Processing card payment: {cardType}, {cardNumber}".



// Exercise 5: Define an Intersection Type for Work Contact
// Task: Create an intersection type `WorkContact` that combines two types: `Contact` and `Employee`. `Contact` should have `email` (string) and `phone` (number) properties, 
// and `Employee` should have an `employeeId` (number) property.



// Exercise 6: Add Entry to a Dictionary
// Task: Create a function `addDictionaryEntry` that takes a dictionary (object with string keys and number values) and a key-value pair as arguments. 
// Add the key-value pair to the dictionary and log the updated dictionary to the console.



// Exercise 7: Use Optional Properties and Optional Chaining
// Task: Define an object `employeeProfile` that may have the following properties: `id` (number), `name` (string), and `email` (string). All properties are optional.
// Demonstrate how to safely access these properties using optional chaining, and log "Property not found" if they don't exist.



// Exercise 8: Implement a Generic Function
// Task: Write a generic function named `identity` that takes an argument of type T and returns this argument. 
// Show how this function can be called with both a string and a number, logging the return value to the console.



// Exercise 9: Create a Generic Class
// Task: Define a generic class named `Container` with a property named `content` of type T. 
// Include a method `getContent` that returns the value of `content`. Demonstrate how to create an instance of `Container` with a string and another with a number.



// Exercise 10: Merge Objects with Generics
// Task: Write a function `mergeObjects` that takes two arguments, both objects, and merges them into one object. 
// Use generics with constraints to ensure both arguments are objects. Return the merged object.
