import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path: "home", component: HomeComponent}, 
{path: "about", component: AboutComponent}, 
{path: "gallery", component: GalleryComponent}, 
{path: "contact", component: ContactComponent}, 
{path: "", redirectTo:'/home', pathMatch:'full'},
{path: "**", component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NotFoundComponent,AboutComponent, GalleryComponent, ContactComponent ];
