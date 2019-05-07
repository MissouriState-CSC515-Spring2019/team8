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
	console.log(this.date);
	if (this.date != null) {
	  url = `https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=${key}`;
	}
	fetch(url)
	.then((resp) => resp.json())
	  .then(function(data) {
	    let img = createNode('img');
	    img.src = data.url;
	    append(ul, img);
	  })
	.catch(function(error) {
	console.log(error);
	});  

  }

}