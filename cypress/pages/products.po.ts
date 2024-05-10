import { IProduct, ProductPO } from './product.po';
export class ProductsPO {
    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

    public getAllItems(){
        return this.rootUnit.find('.inventory_item')
    }

    public getItemByName(name:string):IProduct{
        return new ProductPO(this.rootUnit.find('.inventory_list').contains('.inventory_item',name));
    }
}