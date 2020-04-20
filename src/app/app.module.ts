import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuPComponent } from './menu-p/menu-p.component';
import { ChoixPComponent } from './choix-p/choix-p.component';

const appRoutes: Routes = [
  { path: 'connexion', component: LoginComponent },
  //{ path: 'inscription', component:  },
  { path: 'connexion/validation', component: ChoixPComponent  },
  { path: '', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    MenuPComponent,
    ChoixPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
