'use strict';

let start = new Date;
start.setDate(start.getDate() - 7);
let s_month = start.getMonth() + 1; //months from 1-12
let s_day = start.getDate();
let s_year = start.getFullYear();
let end = new Date;
let e_month = end.getMonth() + 1; //months from 1-12
let e_day = end.getDate();
let e_year = end.getFullYear();
console.log(start);
console.log(end);




const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${s_year}-${s_month}-${s_day}&end_date=${e_year}-${e_month}-${e_day}&api_key=GXFHdaG2tdwfk0BY8l9jvqzVIF58tUbzfy9y2h2k`
fetch(url)
    .then(response => {
        if(response.status !== 200) {
            alert("Something went wrong. Please refresh the page");
        }
        return response.json()
    })
    .then(data => {
		let harmful = 0;
		let largest = 0
		console.log("There were " + data.element_count + " Near Earth Objects during this time.");
		for (let key in data.near_earth_objects)
		{
			for(let i = 0; i < data.near_earth_objects[key].length; i++)
			{
				if(largest < (data.near_earth_objects[key][i].estimated_diameter.feet.estimated_diameter_max + data.near_earth_objects[key][i].estimated_diameter.feet.estimated_diameter_min) / 2)
					largest = (data.near_earth_objects[key][i].estimated_diameter.feet.estimated_diameter_max + data.near_earth_objects[key][i].estimated_diameter.feet.estimated_diameter_min) / 2
				if (data.near_earth_objects[key][i].is_potentially_hazardous_asteroid)
					harmful = harmful + 1;
			}
		}
		console.log(harmful);
		console.log("The largest asteroid has an expected average size of " + largest + " feet in diameter")

	})