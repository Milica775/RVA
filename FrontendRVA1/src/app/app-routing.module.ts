import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { TipRacunaComponent } from './components/tip-racuna/tip-racuna.component';
import { RacunComponent } from './components/racun/racun.component';
import { KreditComponent } from './components/kredit/kredit.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { NgModule } from "@angular/core";
import {RouterModule} from '@angular/router';

const Routes=[
  {path: 'klijent',component:KlijentComponent},
  {path: 'kredit',component:KreditComponent},
  {path: 'racun',component:RacunComponent},
  {path: 'tipRacuna',component:TipRacunaComponent},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'author',component:AuthorComponent},
  {path: 'tipRacuna',component:TipRacunaComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

