export class CompletePO {
    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

    get completeHeader() {
        return this.rootUnit.find('h2').invoke('text')
    }

    get completeMessage() {
        return this.rootUnit.find('.complete-text').invoke('text')
    }

    get backHome() {
		return this.rootUnit.contains('button','Back Home')
	}
}