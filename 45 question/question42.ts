// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}

// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];

// Call make_great to modify the list of magicians
make_great(magicians);

// Call show_magicians to print the updated list
show_magicians(magicians);
