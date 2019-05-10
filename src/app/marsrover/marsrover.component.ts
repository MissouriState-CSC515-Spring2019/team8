import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marsrover',
  templateUrl: './marsrover.component.html',
  styleUrls: ['./marsrover.component.css']
})
export class MarsroverComponent implements OnInit {

      constructor() { }

      ngOnInit() {
        let start = new Date;
        start.setDate(start.getDate() - 7);
        let month = start.getMonth() + 1; //months from 1-12
        let day = start.getDate();
        let year = start.getFullYear();
        let monthstring = month.toString();
        let dstring = day.toString();
        let ystring = year.toString();
        let datestring = ystring + "-" + monthstring + "-" + dstring;

        let container = document.getElementById('container');

    let api_key = 'GXFHdaG2tdwfk0BY8l9jvqzVIF58tUbzfy9y2h2k';

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`
    fetch(url)

  .then(response => {
    if(response.status !== 200){
      alert("Something went wrong. Please refresh the page");
    }
    //console.log(response.json());
    return response.json();
  })
  .then(data => {
    
    console.log(datestring);
    console.log(data);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateData = datestring.split("-");
    let dateDisplay = months[Number(dateData[1])-1] + " " + dateData[2] + ", " + dateData[0] + " (7 Days Ago)";
    document.getElementById("dateDisplay").innerHTML = dateDisplay;
    let container = document.getElementById('container');
    let roverImg = data.photos[0].img_src;
    let imgElement = document.createElement('img');
    imgElement.src = roverImg;
    container.appendChild(imgElement);
  })

  }

}
