import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-picofday',
  templateUrl: './picofday.component.html',
  styleUrls: ['./picofday.component.css']
})
export class PicofdayComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private date: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.date = params.get("date")
    })

	function createNode(element) {
	  return document.createElement(element);
	}

	function append(parent, el) {
	  return parent.appendChild(el);
	}

	const ul = document.getElementById('astronomyPic');
	const key = `7bvmKR9XfNoD1gAaIxFbedxzrd3151mylV9Ov5kg`;
	let url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
	var today = new Date();
	var dateData;
	var dateDisplay;
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if (this.date != null) {
	  url = `https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=${key}`;
	} else {
	  dateDisplay = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
	  document.getElementById("dateDisplay").innerHTML = dateDisplay;
	}
	fetch(url)
	.then(response => {
	if(response.status !== 200){
		let span = createNode('span');
    	span.innerHTML = "There seems to be no picture for this day. Enter a new date and try again.";
		append(ul, span);
	}
	return response.json();
	})
	  .then(data => {
	  	if (data.url != undefined) {
	  	  if (this.date != null) {
	  	  	dateData = this.date.split("-");
	  	  	if (Number(dateData[1]) > 12) document.getElementById("dateDisplay").innerHTML = "Invalid Date";
	  	  	else {
	  	    	dateDisplay = months[Number(dateData[1])-1] + " " + dateData[2] + ", " + dateData[0];
	  	    	document.getElementById("dateDisplay").innerHTML = dateDisplay;
	  	  	}
	  	  }
	   	  let img = createNode('img');
	      img.src = data.url;
	      append(ul, img);
	  	}
	  })
	.catch(function(error) {
	console.log(error);
	});  

  }

}