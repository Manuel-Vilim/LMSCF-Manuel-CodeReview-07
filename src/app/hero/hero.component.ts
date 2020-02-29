import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading1: string;
private heroHeading2: string;
private  heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;
private heroHeading3: string;
private heroHeading4: string;
private  heroText3: string;
private heroBtnText3 : string;
private heroBtnUr3:   string;
private heroHeading5: string;
private heroHeading6: string;
private  heroText5: string;
private heroBtnText5 : string;
private heroBtnUrl5:   string;
  constructor() {
   this.heroHeading1 =  "Newsletter";
   this.heroHeading2= "Black Desert of Lalaland"

  this.heroText =  "  Contact us for more information about this wonderful trip with #Desert."

  this.heroBtnText =  "Contact us";

  this.heroBtnUrl =  "contact-us" ;

 
 
   this.heroHeading3 =  "Newsletter";
   this.heroHeading4= "Winter Wonderland"

  this.heroText3 =  " Contact us for more information about this wonderful trip with #Winter."
  this.heroBtnText3 =  "Contact us";

  this.heroBtnUr3 =  "contact-us" ;


   this.heroHeading5 =  "Newsletter";
   this.heroHeading6= "Green Wildlife Deluxe"

  this.heroText5 =  "  Contact us for more information about this wonderful trip with #Wildlife."

  this.heroBtnText5 =  "Contact us";

  this.heroBtnUrl5 =  "contact-us" ;

 }

  ngOnInit():  {
  }

}
