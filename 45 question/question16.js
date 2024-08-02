var guestList = ["Ali", "Ahmed", "Asma"];
// Informing that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table, so more guests can be invited!");
// Adding one new guest to the beginning of the array
guestList.unshift("Danish");
// Adding one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza");
// Adding one new guest to the end of the array
guestList.push("Ubaid");
// Printing a new set of invitation messages
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. I would be honored by your presence."));
}
