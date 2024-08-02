let usernames: string[] = ['admin', 'Eric', 'John', 'Jane', 'Alice', 'Bob'];

// Remove all users from the array
usernames = [];

// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
