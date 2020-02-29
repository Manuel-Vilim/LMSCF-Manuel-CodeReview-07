import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private heroHeading1: string;
private heroHeading2: string;
private  heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;
  constructor() {
   this.heroHeading1 =  "Experience The";
   this.heroHeading2= "Best Trip Ever"

  this.heroText =  "  aöksdjgölkja slkdjg alskjdg laöskdjgfkkajiseitj asiewjg a aisgojlasdgj alsidgjioawierg  oaisdojgia sehaösdk agheuowiaejsf asoidfhagi asöoiedrtffhao idhita ithas."

  this.heroBtnText =  "Contact us";

  this.heroBtnUrl =  "contact-us" ;

 }

  ngOnInit():  {
  }

}
 
