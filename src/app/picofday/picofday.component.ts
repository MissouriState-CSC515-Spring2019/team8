import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picofday',
  templateUrl: './picofday.component.html',
  styleUrls: ['./picofday.component.css']
})
export class PicofdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {

	function createNode(element) {
	  return document.createElement(element);
	}

	function append(parent, el) {
	  return parent.appendChild(el);
	}

	const ul = document.getElementById('astronomyPic');
	const key = `7bvmKR9XfNoD1gAaIxFbedxzrd3151mylV9Ov5kg`;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
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
