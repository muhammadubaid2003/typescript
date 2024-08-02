let animals: string[] = ['dog', 'cat', 'rabbit'];

for (let animal of animals) {
    console.log(`${animal.charAt(0).toUpperCase() + animal.slice(1)} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
