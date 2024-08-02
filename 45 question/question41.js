// Function to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];
// Call the function with the array of magicians
show_magicians(magicians);
