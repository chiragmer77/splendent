import { Routes } from '@angular/router';
import { HomeComponent } from './main-component/home/home.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },  // Default route
    { path: 'contact', component: ContactUsComponent },
    { path: 'about', component: AboutUsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Redirect unknown paths to home

];
