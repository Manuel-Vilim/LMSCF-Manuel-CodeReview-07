	import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutUsComponent} from  './about-us/about-us.component';
import { ToursComponent } from './tours/tours.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { TourpageComponent } from './tourpage/tourpage.component';



const routes: Routes = [
{

        path:"",component: HomeComponent

},

{

        path: "about-us",component: AboutUsComponent

},

{

        path: "tours",component: ToursComponent
},{

        path: "gallery",component: GalleryComponent
},{


        path: "services",component: ServicesComponent
},
{

        path: "contact-us",component: ContactUsComponent
},
{

        path: "cart",component: CartComponent
},
{
 		 path: 'product/:productId', component: TourpageComponent
},
{
 		 path: 'tourpage', component: TourpageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
