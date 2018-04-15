import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Route[] = [
{path: '', redirectTo: 'about', pathMatch: 'full'},
{path: 'about', component: AboutMeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
