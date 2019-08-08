(() => {
	console.log('fired');

	const sigils = document.querySelectorAll('.sigilContainer'),
		 lightBox = document.querySelector('.lightbox'),
		 closeButton = document.querySelector('.close-lightbox'),
		 houseVideo = document.querySelector('.house-video'),
		 bannerImages = document.querySelector("#houseImages"),
		 houseName = document.querySelector('#house-name'),
		 houseContent = document.querySelector('.house-info');
		 pauseButton = document.querySelector('.pauseGOT');
		 playButton = document.querySelector('.playGOT');
		 rewindButton = document.querySelector('.rewindGOT');
		 muteButton = document.querySelector('.muteGOT');
		 soundOnButton = document.querySelector('.volumeGOT');



			const houseData = [
			["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
				//[  1  ]       paragraph tag <p> = [  0  ]  [  1  ]         [1]
			["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],
				//[  2  ]       [  0  ]  [2]          [1]
			["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.`],
				//[  3  ]       [  0  ] [3]           [1]
			["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],
				//[  4  ]       [  0  ] [4]           [1]
			["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.`],

			["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `],

			["Frey", `House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after. `],

			["Targaryen", `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`],

			["Tyrell", `House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies. `]
			];

//pause the vid on click

function pauseVideo() {
	houseVideo.pause();
}

function playVideo() {
	houseVideo.play();
}

function rewindVideo() {
		houseVideo.load();
}

function muteVideo() {
		houseVideo.volume = 0.0;
}

function playSound() {
		houseVideo.volume = 1.0;
}
//write the other functions for the custom video controls play, volume, time counter, progress scrubber
	 function popLightBox() {

			lightBox.classList.add('show-lightbox');
			// grab a reference to the current video via the className
			//debugger;
			// grab reference
			// get className property
			//

			let houseName = this.className.split(" ")[1];
			// use javaascript string interpolation to build the path

			//capitalize the first letter with javascript strinf=g
			houseName = houseName.charAt(0).toUpperCase() + houseName.slice(1);

			let videoPath = `video/House-${houseName}.mp4`;

			//load this new video videoPath
			houseVideo.src = videoPath;
			houseVideo.load();
			houseVideo.play();
		}

		function closeLightBox(event) {
		event.preventDefault();

		lightBox.classList.remove('show-lightbox');
		houseVideo.currentTime = 0;    //this will rewind the video
		houseVideo.pause();
	}




				function animateBanners(){
					// offset is needed  so that we can multiply

					let offset= 600,//Moves over by 600px
						multiplier = this.dataset.offset; // this is the data-pffset custom data attribute
					console.log((offset * multiplier) + "px");

					//banner moves right
					bannerImages.style.right = `${offset * multiplier + "px"}`;

					//change the house name on the page at thesame time
					houseName.textContent = `House ${houseData[multiplier][0]}`;
					houseContent.textContent = houseData[this.dataset.offset][1];
				}



				sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));
					sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));


				closeButton.addEventListener("click", closeLightBox);

				houseVideo.addEventListener('ended', closeLightBox);

				pauseButton.addEventListener('click', pauseVideo);

				playButton.addEventListener('click', playVideo);

				rewindButton.addEventListener('click', rewindVideo);

				muteButton.addEventListener('click', muteVideo);

				soundOnButton.addEventListener('click', playSound);

	})();
