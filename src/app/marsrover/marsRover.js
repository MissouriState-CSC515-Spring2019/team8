'use strict';

let api_key = APIKEY;
let date = document.getElementById('date-input').value;

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${api_key}`
fetch(url)
.then(function(res) {
	if(res.status !== 200) {
		alert("Something went wrong. Please refresh the page");
	}
	res.json()
	.then(function(data) {
		//create variable img set to the image src for that day's image
		let img = photos[0].img_src;

		//if there are no images for this day display message
		if(img == null) {
			document.getElementById('currentPic').innerText = "No image for this day";
		} else {
			let prevImg = document.getElementById('currentPic');
			//after selecting a new day this removes previous day's content
			while(prevImg.firstChild) {
				prevImg.removeChild(prevImg.firstChild);
			}
			//adds new day's image if one exists
			document.getElementById('currentPic').src = img;
		}
	})
})