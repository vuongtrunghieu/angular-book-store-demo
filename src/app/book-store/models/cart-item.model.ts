import { BookModel } from '@app/book-store/models/book.model';

export interface CartItemModel {
  book?: BookModel;
  amount?: number;
}
