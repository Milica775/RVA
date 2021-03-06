import { TipRacunaComponent } from './components/tip-racuna/tip-racuna.component';
import { RacunComponent } from './components/racun/racun.component';
import { KreditComponent } from './components/kredit/kredit.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const Routes = [
  { path: 'racun', component: RacunComponent },
  { path: 'tipRacuna', component: TipRacunaComponent },
  { path: 'kredit', component: KreditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'klijent', component: KlijentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



