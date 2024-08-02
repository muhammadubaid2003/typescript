// Function to summarize a sandwich order
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log(); // Add a blank line for readability
}

// Call the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'bacon');
make_sandwich('turkey', 'cheese');
make_sandwich('ham', 'pickle', 'mustard', 'onions', 'mayo');
