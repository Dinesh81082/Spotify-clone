// console.log('hii');

// async function getsongs() {
//     let a = await fetch("http://127.0.0.1:3000/songs/");
//     let response = await a.text();
//     console.log(response);

//     // Parse the response as HTML
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");

//     console.log(as);
//     let songs = [];
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.slice("http://127.0.0.1:3000/songs/").split("http://127.0.0.1:3000/songs/")[1]);
//         }
//     }
//     console.log(songs);
//     return songs; // Return the songs array
// }

// const pM=(s)=>{
//     let audio = new Audio("/songs/" + s); // Use songs[1]
//         audio.play();
// }

// async function main() {
//     let cS;
//     let songs = await getsongs();
//     console.log(songs);
//     let songURL =document.querySelector(".songlist").getElementsByTagName("ul")[0]
//     for (const song of songs) {
//         songURL.innerHTML=songURL.innerHTML + `
//          <li style="list-style: none;">
//                             <img src="musical-note.png" alt="music" width="100" height="30">
//                             <div class="info">
//                                 <div>${song.replaceAll("%20"," ").replaceAll(".mp3"," ")}</div>

//                             </div>
//                             <div class="pnow">
//                                 Play now
//                                 <img src="play-button.png" alt="play" width="100">
//                             </div>
//                         </li>`



//     }

//     // Check if there are enough songs
//     if (songs.length > 1) {
//         var audio = new Audio(songs[1]); // Use songs[1]
//         audio.play();
//     } else {
//         console.log("No songs found or insufficient songs to play.");
//     }
//     audio.addEventListener("timeupdate",()=>{
//        let duration=audio.duration;
//        console.log(duration);
//     })

// Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e=>{
//           console.log(e.querySelector(".info").firstElementChild.innerHTML);
//          e.addEventListener("click", ()=>{
//             pM(e.querySelector(".info").firstElementChild.innerHTML.trim());
//          })
// }))
// }


// // Call the main function
// main();







// console.log("hii");
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
//     return `${minutes}:${remainingSeconds}`;
// }

// // Fetches the list of songs from the server
// async function getsongs() {
//     let a = await fetch("http://127.0.0.1:3000/songs/");
//     let response = await a.text();
//     console.log(response);

//     // Parse the response as HTML
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");

//     let songs = [];
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             // Extract song name from the URL
//             songs.push(element.href.replace("http://127.0.0.1:3000/songs/", ""));
//         }
//     }
//     console.log(songs); // Log the list of songs
//     return songs; // Return the songs array
// }

// // Handles song playback
// let currentAudio = null; // Global audio instance

// // Play the selected song
// const pM = (songPath,pause=false) => {
//     console.log("Attempting to play song:", songPath);



// if (currentAudio) {
//     currentAudio.pause(); // Pause current audio if playing
//     currentAudio = null;  // Reset the currentAudio object
// }

// // Create a new Audio object for the selected song
// currentAudio = new Audio("http://127.0.0.1:3000/songs/" + songPath);


// // Play the song and handle errors
// currentAudio.play().catch((error) => {
//     console.error("Audio playback failed:", error);
// });
// if (currentAudio.play) {
//     playbtn.src = "pause.png";
//     document.getElementById("song-info").innerHTML = songPath;
//     document.getElementById("song-time").innerHTML = "00/00";
// }
// currentAudio.addEventListener("timeupdate", () => {
//     console.log(currentAudio.currenTime, currentAudio.duration);
//     document.getElementById("song-time").innerHTML = `${formatTime(currentAudio.currentTime)}/${formatTime(currentAudio.duration)}`
//     document.querySelector(".crc").style.left=(currentAudio.currentTime/ currentAudio.duration) *100 + "%";
// })

// // below seekbar eventlistner is done with gPT
// currentAudio.addEventListener("timeupdate", () => {
//     const currentTime = formatTime(currentAudio.currentTime);
//     const duration = formatTime(currentAudio.duration || 0); // Avoid NaN for duration
//     document.getElementById("song-time").innerHTML = `${currentTime}/${duration}`;

//     // Update seekbar position
//     const seekbar = document.querySelector(".seekbar");
//     const seekPercentage = (currentAudio.currentTime / currentAudio.duration) * 100;
//     document.querySelector(".crc").style.left = `${seekPercentage}%`;
// });
// };

// // Update the audio position when the user clicks on the seekbar
// document.querySelector(".seekbar").addEventListener("click", (e) => {
// const seekbarWidth = e.target.getBoundingClientRect().width;
// const clickPosition = e.offsetX;
// const seekPercentage = (clickPosition / seekbarWidth) * 100;

// // Update the position of the slider element
// document.querySelector(".crc").style.left = `${seekPercentage}%`;

// // Update the current time of the audio based on the seekbar position
// if (currentAudio) {
//     const newTime = (seekPercentage / 100) * currentAudio.duration;
//     currentAudio.currentTime = newTime;
// }
// });
// //above seekbar code is done with gPT




// // Main function to fetch and display songs
// async function main() {
//     let songs = await getsongs(); // Fetch songs from the server
//     console.log(songs);  // Log the songs array

//     let songListElement = document.querySelector(".songlist").getElementsByTagName("ul")[0];
//     if (!songListElement) {
//         console.error("Song list container not found.");
//         return;
//     }

//     // Clear any existing content in the list before appending
//     songListElement.innerHTML = '';

//     // Add songs to the DOM using appendChild for each song
//     for (const song of songs) {
//         // Create the list item element
//         let li = document.createElement("li");
//         li.style.listStyle = "none";
//         li.style.cursor = "pointer";

//         // Construct the inner HTML of the list item
//         li.innerHTML = `
//             <img src="musical-note.png" alt="music" width="100" height="30">
//             <div class="info">
//                 <div>${song.replaceAll("%20", " ").replaceAll(".mp3", "")}</div>
//             </div>
//             <div class="pnow">
//                 Play now
//                 <img src="play-button.png" alt="play" width="30">
//             </div>
//         `;

//         // Append the list item to the song list
//         songListElement.appendChild(li);
//     }

//     // Add click listeners for each song item
//     Array.from(songListElement.getElementsByTagName("li")).forEach((e, index) => {
//         e.addEventListener("click", () => {
//             console.log(`Playing: ${songs[index]}`);
//             pM(songs[index]); // Pass the song path directly from the songs array
//         });
//     });

//     let pp = document.getElementById("playbtn");
//     pp.addEventListener("click", () => {
//         if (currentAudio.paused) {
//             currentAudio.play();
//             playbtn.src = "pause.png";
//         }
//         else {
//             currentAudio.pause()
//             playbtn.src = "play-button.png";
//         }
//     })

//     // currentAudio.addEventListener("timeupdate",()=>{
//     //     console.log(currentAudio.currenTime,currentAudio.duration);
//     // })
//    document.getElementById("ham").addEventListener("click",()=>{
//        document.querySelector(".left").style.left="0"
//    })
//   document.querySelector(".logo").addEventListener("click",()=>{
    
//     document.querySelector(".left").style.left="-100%"

//   })
// }


// document.getElementById("prevbtn").addEventListener("click",()=>{
//     console.log('Prev clicked');
//     console.log(currentAudio);
// })

// document.getElementById("nextbtn").addEventListener("click",()=>{
//     console.log('nxt clicked');
//     console.log(currentAudio);
// })


// // Call the main function
// main();




console.log("hii");

// Format time into MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
}

// Fetches the list of songs from the server
async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    // console.log(response);

    // Parse the response as HTML
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // Extract song name from the URL
            songs.push(element.href.replace("http://127.0.0.1:3000/songs/", ""));
        }
    }
    // console.log(songs); // Log the list of songs
    return songs; // Return the songs array
}

// Global variables
let currentAudio = null; // Global audio instance
let currentSongIndex = 0; // Track the current song index
let songs = []; // Array to hold song names

// Play the selected song
const pM = (songPath, pause = false) => {
    console.log("Attempting to play song:", songPath);

    if (currentAudio) {
        currentAudio.pause(); // Pause current audio if playing
        currentAudio = null;  // Reset the currentAudio object
    }

    // Create a new Audio object for the selected song
    currentAudio = new Audio("http://127.0.0.1:3000/songs/" + songPath);

    // Play the song and handle errors
    currentAudio.play().catch((error) => {
        console.error("Audio playback failed:", error);
    });

    if (currentAudio.play) {
        playbtn.src = "pause.png";
        document.getElementById("song-info").innerHTML = songPath;
        document.getElementById("song-time").innerHTML = "00/00";
    }

    currentAudio.addEventListener("timeupdate", () => {
        const currentTime = formatTime(currentAudio.currentTime);
        const duration = formatTime(currentAudio.duration || 0); // Avoid NaN for duration
        document.getElementById("song-time").innerHTML = `${currentTime}/${duration}`;

        // Update seekbar position
        const seekbar = document.querySelector(".seekbar");
        const seekPercentage = (currentAudio.currentTime / currentAudio.duration) * 100;
        document.querySelector(".crc").style.left = `${seekPercentage}%`;
    });
};

// Update the audio position when the user clicks on the seekbar
document.querySelector(".seekbar").addEventListener("click", (e) => {
    const seekbarWidth = e.target.getBoundingClientRect().width;
    const clickPosition = e.offsetX;
    const seekPercentage = (clickPosition / seekbarWidth) * 100;

    document.querySelector(".crc").style.left = `${seekPercentage}%`;

    if (currentAudio) {
        const newTime = (seekPercentage / 100) * currentAudio.duration;
        currentAudio.currentTime = newTime;
    }
});

// Main function to fetch and display songs
async function main() {
    songs = await getsongs(); // Fetch songs from the server
    console.log(songs); // Log the songs array

    let songListElement = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    if (!songListElement) {
        console.error("Song list container not found.");
        return;
    }

    songListElement.innerHTML = ''; // Clear any existing content in the list

    // Add songs to the DOM
    for (const song of songs) {
        let li = document.createElement("li");
        li.style.listStyle = "none";
        li.style.cursor = "pointer";

        li.innerHTML = `
            <img src="musical-note.png" alt="music" width="100" height="30">
            <div class="info">
                <div>${song.replaceAll("%20", " ").replaceAll(".mp3", "")}</div>
            </div>
            <div class="pnow">
                Play now
                <img src="play-button.png" alt="play" width="30">
            </div>
        `;

        songListElement.appendChild(li);
    }

    // Add click listeners for each song item
    Array.from(songListElement.getElementsByTagName("li")).forEach((e, index) => {
        e.addEventListener("click", () => {
            currentSongIndex = index; // Update the current song index
            console.log(`Playing: ${songs[index]}`);
            pM(songs[index]); // Play the selected song
        });
    });

    document.getElementById("playbtn").addEventListener("click", () => {
        if (currentAudio.paused) {
            currentAudio.play();
            playbtn.src = "pause.png";
        } else {
            currentAudio.pause();
            playbtn.src = "play-button.png";
        }
    });

    document.getElementById("ham").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".logo").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });
    //popular artist''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    document.getElementById("honey").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[21])

    })
    document.getElementById("arjit").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[28])

    })
    document.getElementById("emiway").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[4])

    })
    document.getElementById("luis").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[6])

    })
    document.getElementById("sidhu").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[27])

    })
    document.getElementById("pritam").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[8])

    })
    document.getElementById("sonu").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[14])

    })
    document.getElementById("ghost").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[20])

    })
    document.getElementById("vevo").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[29])

    })
    document.getElementById("divine").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[22])

    })
    document.getElementById("nolie").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[23])

    })
    document.getElementById("dancin").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[5])

    })
    document.getElementById("party").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[24])

    })
    document.getElementById("amit").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[0])

    })
    document.getElementById("wavin").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[30])

    })
    document.getElementById("bad").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[15])

    })
    document.getElementById("diljit").addEventListener("click",()=>{
        // console.log(songs)
        pM(songs[1])

    })
    
}

document.getElementById("prevbtn").addEventListener("click", () => {
    if (songs.length > 0) {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; 
        // console.log(`Playing previous song: ${songs[currentSongIndex]}`);
        pM(songs[currentSongIndex]); 
    } else {
        console.log("No songs available to play.");
    }
});

document.getElementById("nextbtn").addEventListener("click", () => {
    if (songs.length > 0) {
        currentSongIndex = (currentSongIndex + 1) % songs.length; 
        console.log(`Playing next song: ${songs[currentSongIndex]}`);
        pM(songs[currentSongIndex]); 
    } else {
        console.log("No songs available to play.");
    }
});

main();
