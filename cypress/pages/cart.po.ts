import { CartProduct, ProductPO  } from './product.po';

export class CartPO {
	constructor(protected locator: string) {
	}

	private get rootUnit(){
		return cy.get(this.locator);
	}

	public getAllItems(){
		return this.rootUnit.find('.cart_item')
    }

	public getItemByName(name:string):CartProduct{
        return new ProductPO(this.rootUnit.find('.cart_list').contains('.cart_item',name));
    }

	get continueShopping() {
		return this.rootUnit.contains('button','Continue Shopping')
	}

	get checkout() {
		return this.rootUnit.contains('button','Checkout')
	}

}