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
        return this.rootUnit.find('.header_secondary_container').find('.title')
    }
}