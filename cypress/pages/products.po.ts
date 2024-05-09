import { ProductPO } from './product.po';
export class ProductsPO {
    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

    public getAllItems(){
        const items: JQuery<HTMLElement>[] = [];
        this.rootUnit.find('.inventory_item').each((item)=>{
            items.push(item)
        })
        return items.filter(Boolean);
    }

    public getItemByName(name:string){
        return new ProductPO(this.rootUnit.find('.inventory_list').contains('.inventory_item',name));
    }
}