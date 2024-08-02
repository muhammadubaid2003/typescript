// Function to store car information
function create_car(manufacturer, model) {
    var additional_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additional_info[_i - 2] = arguments[_i];
    }
    // Create the car object with required properties
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional information to the car object
    for (var _a = 0, additional_info_1 = additional_info; _a < additional_info_1.length; _a++) {
        var _b = additional_info_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
var car1 = create_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
var car2 = create_car('Honda', 'Civic', ['color', 'black'], ['sunroof', true]);
var car3 = create_car('Ford', 'Mustang', ['color', 'red'], ['transmission', 'manual'], ['navigation', true]);
// Print the car objects
console.log(car1);
console.log(car2);
console.log(car3);
