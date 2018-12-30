import { Product } from 'shared/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    const cart = this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
      map((action: any) => {
        const key = action.key;
        const items = action.payload.val().items;
        return new ShoppingCart(key, items);
      })
    );
    return cart;
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    const cardId = localStorage.getItem('cartId');
    if (cardId) {
      return cardId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async updateItem(product: Product, change: number) {
    const cart = await this.getOrCreateCartId();
    const item = await this.getItem(cart, product.key);
    item.snapshotChanges().pipe(take(1)).subscribe((items: any) => {
      const itemPayload = items.payload.val();
      const quantity = (itemPayload ? itemPayload.quantity : 0) + change;
      if (quantity === 0) {
        item.remove();
      } else {
        item.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity
        });
      }
    });
  }
}
