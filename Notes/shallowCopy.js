// Original Object
const originalObj = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// Shallow Copy using Object.assign or Spread Operator
const shallowCopy = { ...originalObj };

// Modify a nested property in the shallow copy
shallowCopy.address.city = "San Francisco";

// Changes are reflected in the original object
console.log(originalObj.address.city); // Outputs: San Francisco
