// Function to create an album dictionary
function make_album(artist, album_title, tracks) {
    var album = {
        artist: artist,
        album_title: album_title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album dictionaries
var album1 = make_album('Adele', '30');
var album2 = make_album('Taylor Swift', 'Evermore');
var album3 = make_album('Ed Sheeran', 'Equals', 14);
// Print each album dictionary
console.log(album1);
console.log(album2);
console.log(album3);
