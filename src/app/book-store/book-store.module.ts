import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '@app/book-store/book-list/book-list.component';
import { BookViewComponent } from '@app/book-store/book-view/book-view.component';
import { CartComponent } from '@app/book-store/cart/cart.component';
import { StoreNavbarComponent } from '@app/book-store/layout/store-navbar/store-navbar.component';
import { StoreSidemenuComponent } from '@app/book-store/layout/store-sidemenu/store-sidemenu.component';
import { BookSearchComponent } from '@app/book-store/book-list/book-search/book-search.component';
import { CartSumPipe } from '@app/pipes/cart-sum.pipe';
import { CartItemsCountPipe } from '@app/pipes/cart-items-count.pipe';
import { StoreNotificationComponent } from '@app/book-store/layout/store-notification/store-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faCartPlus, faShoppingBasket, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreService } from '@app/book-store/services/book-store.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: BookListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'view/:id',
    component: BookViewComponent,
  },
];

@NgModule({
  declarations: [
    BookListComponent,
    BookViewComponent,
    CartComponent,
    StoreNavbarComponent,
    StoreSidemenuComponent,
    BookSearchComponent,
    CartSumPipe,
    CartItemsCountPipe,
    StoreNotificationComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, FontAwesomeModule, ReactiveFormsModule],
  providers: [BookStoreService],
})
export class BookStoreModule {
  constructor(protected library: FaIconLibrary) {
    library.addIcons(faBook, faShoppingBasket, faTrashAlt, faCartPlus);
  }
}
