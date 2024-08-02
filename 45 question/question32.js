var current_users = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
var new_users = ['eric', 'JOHN', 'Chris', 'Alice', 'Bob'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var is_available = true;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_available = false;
            break;
        }
    }
    if (!is_available) {
        console.log("The username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
}
