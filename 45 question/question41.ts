// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];

// Call the function with the array of magicians
show_magicians(magicians);
