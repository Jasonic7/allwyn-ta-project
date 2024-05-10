import { Button } from './button/button.po';

export interface CartProduct{
	readonly name:Cypress.Chainable<string>;
	readonly description:Cypress.Chainable<string>;
	readonly price:Cypress.Chainable<string>;
	readonly addToCartButton:Button;
	readonly removeButton:Cypress.Chainable<JQuery<HTMLButtonElement>>;
	readonly quantity:Cypress.Chainable<JQuery<HTMLElement>>;
	selectItemOnCart():Cypress.Chainable<JQuery<HTMLAnchorElement>>;
}

export interface IProduct{
	readonly name:Cypress.Chainable<string>;
	readonly description:Cypress.Chainable<string>;
	readonly price:Cypress.Chainable<string>;
	readonly addToCartButton:Button;
	readonly removeButton:Cypress.Chainable<JQuery<HTMLButtonElement>>;
	selectProductViaImage():Cypress.Chainable<JQuery<HTMLAnchorElement>>;
	selectProductViaName():Cypress.Chainable<JQuery<HTMLElement>>;
}

export class ProductPO implements IProduct{
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

    get addToCartButton():Button {
        return new Button(this.rootUnit.find('.btn_inventory'))
    }

	get removeButton() {
		return this.rootUnit.contains('button','Remove')
	}

	get quantity() {
		return this.rootUnit.find('.cart_quantity')
	}

    selectProductViaImage() {
        return this.rootUnit.find('a').first().click();
    }

    selectProductViaName() {
        return this.rootUnit.find('a').last().click();
    }

	selectItemOnCart() {
		return this.rootUnit.find('a').click();
	}
}