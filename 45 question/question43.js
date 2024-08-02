var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push(magician + ' the Great');
    }
    return great_magicians;
}
// Array of magician's names
var original_magicians = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];
// Create a copy of the original array
var magicians_copy = __spreadArray([], original_magicians, true);
// Call make_great to modify the copy of the array
var great_magicians = make_great(magicians_copy);
// Print the original array
console.log("Original Magicians:");
show_magicians(original_magicians);
// Print the modified array
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
