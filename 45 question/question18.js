var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Kyoto", "Reykjavik", "Cape Town", "Machu Picchu", "Santorini"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical order:", sortedPlaces);
// Show that the array is still in its original order by printing it
console.log("Still in original order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
var reverseSortedPlaces = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse alphabetical order:", reverseSortedPlaces);
// Show that the array is still in its original order by printing it again
console.log("Still in original order:", placesToVisit);
// Reverse the order of the list and print it
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again and print it
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("Alphabetical order (changed):", placesToVisit);
// Sort the array in reverse alphabetical order and print it
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order (changed):", placesToVisit);
