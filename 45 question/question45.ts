// Function to store car information
function create_car(manufacturer: string, model: string, ...additional_info: [string, any][]): object {
    // Create the car object with required properties
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional information to the car object
    for (let [key, value] of additional_info) {
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
let car1 = create_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
let car2 = create_car('Honda', 'Civic', ['color', 'black'], ['sunroof', true]);
let car3 = create_car('Ford', 'Mustang', ['color', 'red'], ['transmission', 'manual'], ['navigation', true]);

// Print the car objects
console.log(car1);
console.log(car2);
console.log(car3);
