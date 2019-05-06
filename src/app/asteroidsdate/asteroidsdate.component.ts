import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-asteroidsdate',
  templateUrl: './asteroidsdate.component.html',
  styleUrls: ['./asteroidsdate.component.css']
})
export class AsteroidsdateComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let routeid = this.route.snapshot.paramMap.get('date');
    let datestring = routeid.toString();
    let newdatestring = datestring.replace("-", "/");
    newdatestring = newdatestring.replace("-","/");
    let start = new Date(newdatestring);
    //let secs = d.getTime();
    start.setDate(start.getDate() - 7);
    let s_month = start.getMonth() + 1; //months from 1-12
    let s_day = start.getDate();
    let s_year = start.getFullYear();

    let end = new Date(newdatestring);
    let e_month = end.getMonth() + 1; //months from 1-12
    let e_day = end.getDate();
    let e_year = end.getFullYear();
    console.log(start);
    console.log(end);
    let load = true;
    
    
    
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${s_year}-${s_month}-${s_day}&end_date=${e_year}-${e_month}-${e_day}&api_key=GXFHdaG2tdwfk0BY8l9jvqzVIF58tUbzfy9y2h2k`
    fetch(url)
        .then(response => {
            if(response.status !== 200) {
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
                load = false;
            }
            return response.json()
        })
        .then(data => {
          var container = document.getElementById('container');
          let info = document.createTextNode("Add a url parameter like asteroids/yyyy-m-d to get info from the date of your choice");
          let infoH6 = document.createElement('h6');
          infoH6.appendChild(info);
          container.appendChild(infoH6);
          
          if(load==true){
          let harmful = 0;
          let largest = 0
          console.log("There were " + data.element_count + " Near Earth Objects during this time.");
          var neo = document.createTextNode("There were " + data.element_count + " Near Earth Objects during this time.\n");
          var neoH3 = document.createElement('h3');
          neoH3.appendChild(neo);
          container.appendChild(neoH3);
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
          var harmfulText = document.createTextNode("The largest asteroid has an expected average size of " + largest + " feet in diameter");
          var harmfulH3 = document.createElement('h3');
          harmfulH3.appendChild(harmfulText);
          container.appendChild(harmfulH3);
        }

    })



  }

  

}

