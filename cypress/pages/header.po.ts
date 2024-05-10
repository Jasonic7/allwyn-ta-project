export class HeaderPO {
    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}
    
    get headerLabel(){
        return this.rootUnit.find('.header_label');
    }

    get headerTitle() {
        return this.rootUnit.find('.header_secondary_container').find('.title');
    }

	get backToProducts() {
		return this.rootUnit.contains('button','Back to products');
	}

	get openMenu() {
		return this.rootUnit.contains('button','Open Menu');
	}

	get cart() {
		return this.rootUnit.find('.shopping_cart_link');
	}

	get numberOfItems() {
		return this.cart.find('span')
	}

	filter(option:string){
		return this.rootUnit.find('select').select(option)
	}
}
