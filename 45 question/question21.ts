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

// Print the details of each mountain
for (let i = 0; i < mountains.length; i++) {
    console.log(`${mountains[i].name} is ${mountains[i].height} meters tall and is located in ${mountains[i].location}.`);
}
