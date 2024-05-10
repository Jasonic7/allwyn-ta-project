
export class BurgerPO {
	constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

	linkByName(link:string){
		return this.rootUnit.find('nav').contains('a',link)
	}

	getAllLinks(){
		return this.rootUnit.find('a')
	}
}