import { BookModel } from '@app/book-store/book-list/models/book.model';

export interface CartItemModel {
  book?: BookModel;
  amount?: number;
}
