let guestList: string[] = ["Ali", "Ahmed", "Asma"];

// Informing that one guest can't make it
console.log(`Unfortunately, ${guestList[2]} can't make it to the dinner.`);

// Replacing the guest who can't make it
guestList[2] = "Danish";

// Sending out the new set of invitations
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. I would be honored by your presence.`);
}
