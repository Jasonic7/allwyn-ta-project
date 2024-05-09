import { Button } from './button/button.po';
export class ProductPO {
	rootUnit: Cypress.Chainable<JQuery>;

    constructor(rootUnit: Cypress.Chainable<JQuery>){
        this.rootUnit = rootUnit
    }

    get name() {
        return this.rootUnit.find('.inventory_item_name').invoke('text')
    }

    get description() {
        return this.rootUnit.find('.inventory_item_desc').invoke('text')
    }

    get price() {
        return this.rootUnit.find('.inventory_item_price').invoke('text')
    }

    addToCartButton() {
        return new Button(this.rootUnit.find('.inventory_item_price').find('.btn_inventory'))
    }

    selectProductViaImage() {
        return this.rootUnit.find('a').first()
    }

    selectProductViaName() {
        return this.rootUnit.find('a').last()
    }
}