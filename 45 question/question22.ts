//With Error

interface Mountain {
    name: string;
    height: number; // height in meters
    location: string;
}

let mountains: Mountain[] = [
    { name: "Mount Everest", height: 8848, location: "Nepal/Tibet" },
    { name: "K2", height: 8611, location: "Pakistan/China" },
    { name: "Kangchenjunga", height: 8586, location: "Nepal/India" },
    { name: "Lhotse", height: 8516, location: "Nepal/Tibet" },
    { name: "Makalu", height: 8485, location: "Nepal/Tibet" }
];

// Intentional error: Accessing an index that is out of bounds
console.log(mountains[5].name); // This will cause an index error because there is no element at index 5

//correction
// interface Mountain {
//     name: string;
//     height: number; // height in meters
//     location: string;
// }

// let mountains: Mountain[] = [
//     { name: "Mount Everest", height: 8848, location: "Nepal/Tibet" },
//     { name: "K2", height: 8611, location: "Pakistan/China" },
//     { name: "Kangchenjunga", height: 8586, location: "Nepal/India" },
//     { name: "Lhotse", height: 8516, location: "Nepal/Tibet" },
//     { name: "Makalu", height: 8485, location: "Nepal/Tibet" }
// ];

// // Corrected: Accessing valid indices
// for (let i = 0; i < mountains.length; i++) {
//     console.log(`${mountains[i].name} is ${mountains[i].height} meters tall and is located in ${mountains[i].location}.`);
// }
