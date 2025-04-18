import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './practical16/mobile/mobile.component';
import { LaptopComponent } from './practical16/laptop/laptop.component';
import { TabletsComponent } from './practical16/tablets/tablets.component';
const routes: Routes = [

// {path:'home', component:HomeComponent},
// {path:'about', component:AboutComponent},
// {path:'contact',component:ContactComponent},

{path:'', component:MobileComponent},
{path:'laptop', component:LaptopComponent},
{path:'tablets',component:TabletsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
