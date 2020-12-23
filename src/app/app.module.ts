import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AAComponent } from './components/a/a-a/a-a.component';
import { ABComponent } from './components/a/a-b/a-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AComponent,
    BComponent,
    AAComponent,
    ABComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
