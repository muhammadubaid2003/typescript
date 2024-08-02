var guestList = ["Danish", "Ali", "Hamza", "Ahmed", "Asma", "Ubaid"];
// Informing that only two people can be invited to dinner
console.log("Unfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.");
// Removing guests until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Informing the remaining two guests that they are still invited
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are still invited to dinner. I would be honored by your presence."));
}
// Removing the last two names from the list
guestList.pop();
guestList.pop();
