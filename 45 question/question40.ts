// Function to create an album dictionary
function make_album(artist: string, album_title: string, tracks?: number): object {
    let album: { artist: string; album_title: string; tracks?: number } = {
        artist: artist,
        album_title: album_title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

// Create three album dictionaries
let album1 = make_album('Adele', '30');
let album2 = make_album('Taylor Swift', 'Evermore');
let album3 = make_album('Ed Sheeran', 'Equals', 14);

// Print each album dictionary
console.log(album1);
console.log(album2);
console.log(album3);
