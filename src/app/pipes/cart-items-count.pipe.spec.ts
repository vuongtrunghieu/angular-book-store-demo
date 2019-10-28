import { CartItemsCountPipe } from './cart-items-count.pipe';

describe('CartItemsCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CartItemsCountPipe();
    expect(pipe).toBeTruthy();
  });
});
