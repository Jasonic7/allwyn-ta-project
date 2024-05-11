import { CartPO } from "./cart.po";

export class SummaryPO {
    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

    get finish() {
		return this.rootUnit.contains('button','Finish')
	}

	get cancel() {
		return this.rootUnit.contains('button','Cancel')
	}

    get summaryInfo() {
		return this.rootUnit.find('.summary_info')
	}

    public cartList() {
		return new CartPO(this.locator)
	}
}