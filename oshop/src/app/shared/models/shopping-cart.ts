import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];
    constructor(public key: string, private itemsMap: { [productId: string]: ShoppingCartItem}) {
        this.itemsMap = itemsMap || {};
        // tslint:disable-next-line:forin
        for (const productId in itemsMap) {
           const item = itemsMap[productId];
           this.items.push(new ShoppingCartItem({...item, key: productId }));
        }
    }

    getQuantity(product: Product) {
            const item = this.itemsMap[product.key];
            return item ? item.quantity : 0;
    }

    get productIds() {
        return Object.keys(this.items);
    }

    get totalItemsCount() {
        let count = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.itemsMap) {
            count += this.itemsMap[productId].quantity;
        }
        return count;
      // console.log(cart.items);
    }

    get totalPrice() {
        let sum = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.items) {
            console.log(this.items[productId].totalPrice);
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }
}
