import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-list/book-view/book-view.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'store',
    component: BookListComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, LandingComponent, PageNotFoundComponent, BookListComponent, BookViewComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
