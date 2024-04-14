// Original Object
const originalObj = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// Deep Copy using JSON.parse and JSON.stringify
const deepCopy = JSON.parse(JSON.stringify(originalObj));

// Modify a nested property in the deep copy
deepCopy.address.city = "San Francisco";

// Changes are not reflected in the original object
console.log(originalObj.address.city); // Outputs: New York
