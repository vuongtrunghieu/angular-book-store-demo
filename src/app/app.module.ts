import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookListComponent } from './book-store/book-list/book-list.component';
import { BookViewComponent } from './book-store/book-list/book-view/book-view.component';
import { CartComponent } from './book-store/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { StoreNavbarComponent } from './book-store/layout/store-navbar/store-navbar.component';
import { StoreSidemenuComponent } from './book-store/layout/store-sidemenu/store-sidemenu.component';
import { BookSearchComponent } from './book-store/book-list/book-search/book-search.component';

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
    component: BookStoreComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    BookListComponent,
    BookViewComponent,
    CartComponent,
    BookStoreComponent,
    StoreNavbarComponent,
    StoreSidemenuComponent,
    BookSearchComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(protected library: FaIconLibrary) {
    library.addIcons(faBook, faShoppingBasket);
  }
}
