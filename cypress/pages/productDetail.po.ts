import { Button } from "./button/button.po";

export class ProductDetailPO {
	constructor(protected locator: string) {
	}

	private get rootUnit(){
		return cy.get(this.locator);
	}

	get name() {
        return this.rootUnit.find('.inventory_details_name').invoke('text')
    }

    get description() {
        return this.rootUnit.find('.inventory_details_desc').invoke('text')
    }

    get price() {
        return this.rootUnit.find('.inventory_details_price').invoke('text')
    }

	addToCartButton() {
        return new Button(this.rootUnit.find('.btn_inventory'))
    }

	get removeButton() {
		return this.rootUnit.contains('button','Remove')
	}
}