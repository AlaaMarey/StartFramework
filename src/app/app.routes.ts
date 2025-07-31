import { Routes } from '@angular/router';
import { About } from './Components/about/about';
import { Portofolio } from './Components/portofolio/portofolio';
import { Contact } from './Components/contact/contact';
import { Home } from './Components/home/home';
import { WildCard } from './Components/wild-card/wild-card';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home ,title: 'home' },
  { path: 'about', component: About ,title:"about" },
  { path: 'portflio', component: Portofolio ,title:'portflio'},
  { path: 'contact', component: Contact ,title:'contact'},
  { path: '**' , component: WildCard },
];
