// Function to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
// Array of magician's names
var magicians = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];
// Call make_great to modify the list of magicians
make_great(magicians);
// Call show_magicians to print the updated list
show_magicians(magicians);
