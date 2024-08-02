// Function to summarize a sandwich order
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following ingredients:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log(); // Add a blank line for readability
}
// Call the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'bacon');
make_sandwich('turkey', 'cheese');
make_sandwich('ham', 'pickle', 'mustard', 'onions', 'mayo');
