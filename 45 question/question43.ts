// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(magician + ' the Great');
    }
    return great_magicians;
}

// Array of magician's names
let original_magicians: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Dynamo'];

// Create a copy of the original array
let magicians_copy: string[] = [...original_magicians];

// Call make_great to modify the copy of the array
let great_magicians = make_great(magicians_copy);

// Print the original array
console.log("Original Magicians:");
show_magicians(original_magicians);

// Print the modified array
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
