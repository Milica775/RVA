import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HelpComponent } from './components/core/help/help.component';
import { RacunComponent } from './components/racun/racun.component';
import { KreditComponent } from './components/kredit/kredit.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { TipRacunaComponent } from './components/tip-racuna/tip-racuna.component';
import { KreditDialogComponent } from './components/dialogs/kredit-dialog/kredit-dialog.component';
import { KlijentDialogComponent } from './components/dialogs/klijent-dialog/klijent-dialog.component';
import { RacunDialogComponent } from './components/dialogs/racun-dialog/racun-dialog.component';
import { TipRacunaDialogComponent } from './components/dialogs/tip-racuna-dialog/tip-racuna-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthorComponent,
    HelpComponent,
    RacunComponent,
    KreditComponent,
    KlijentComponent,
    TipRacunaComponent,
    HomeComponent,
    KreditDialogComponent,
    KlijentDialogComponent,
    RacunDialogComponent,
    TipRacunaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
