import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AAComponent } from './components/a/a-a/a-a.component';
import { ABComponent } from './components/a/a-b/a-b.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'a-component', component: AComponent, // this is the component with the <router-outlet> in the template
    children: [
      { path: 'a-a-component', component: AAComponent },
      { path: 'a-a-component/:id', component: AAComponent },
      { path: 'a-a-component/:id/:type', component: AAComponent },
      { path: 'a-b-component', component: ABComponent },
    ],
  },
  { path: 'b-component', component: BComponent },
  {path: '', redirectTo: '/a-component', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
