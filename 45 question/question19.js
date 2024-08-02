var guestList = ["Stephen Hawking", "Albert Einstein", "Nikola Tesla", "Carl Sagan", "Leonardo da Vinci", "Katherine Johnson"];
// Informing that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table, so more guests can be invited!");
// Adding one new guest to the beginning of the array
guestList.unshift("Isaac Newton");
// Adding one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Marie Curie");
// Adding one new guest to the end of the array
guestList.push("Ada Lovelace");
// Print a message indicating the number of people invited to dinner
console.log("I am inviting ".concat(guestList.length, " people to dinner."));
// Sending out the new set of invitations
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. I would be honored by your presence."));
}
