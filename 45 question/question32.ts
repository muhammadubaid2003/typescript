let current_users: string[] = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
let new_users: string[] = ['eric', 'JOHN', 'Chris', 'Alice', 'Bob'];

for (let new_user of new_users) {
    let is_available = true;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_available = false;
            break;
        }
    }
    if (!is_available) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
