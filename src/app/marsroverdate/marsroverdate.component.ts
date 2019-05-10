import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-marsroverdate',
  templateUrl: './marsroverdate.component.html',
  styleUrls: ['./marsroverdate.component.css']
})
export class MarsroverdateComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    let start = new Date;
    start.setDate(start.getDate() - 7);
    let routeid = this.route.snapshot.paramMap.get('date');
    let datestring = routeid.toString();
    var container = document.getElementById('container');

let api_key = 'GXFHdaG2tdwfk0BY8l9jvqzVIF58tUbzfy9y2h2k';

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${datestring}&api_key=${api_key}`
fetch(url)


.then(response => {
if(response.status !== 200){
  alert("Something went wrong. Please refresh the page");
  let c = document.getElementById('container');
  let m1 = "Sorry we couldn't load the page you requested";
  let m2 = "Please use the format YYYY/M/D when creating the url parameter";
  let text = document.createTextNode(m1);
  let text2 = document.createTextNode(m2);
  let p = document.createElement('h2');
  p.appendChild(text);
  c.appendChild(p);
  c.appendChild(text2);


}
//console.log(response.json());
return response.json();
})
.then(data => {

  console.log(datestring);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateData = datestring.split("-");
let dateDisplay = months[Number(dateData[1])-1] + " " + dateData[2] + ", " + dateData[0];
document.getElementById("dateDisplay").innerHTML = dateDisplay;
console.log(data);
let container = document.getElementById('container');
let roverImg = data.photos[0].img_src;
let imgElement = document.createElement('img');
imgElement.src = roverImg;
container.appendChild(imgElement);
})

}

}
