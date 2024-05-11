import { CartPO } from "./cart.po";
import { FormPO } from "./form/form.po";

export class CheckoutPO {
	constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}

	get continue() {
		return this.rootUnit.contains('input','Continue')
	}

	get cancel() {
		return this.rootUnit.contains('button','Cancel')
	}

    get firstName() {
        return this.form.inputElementById('first-name');
    }

    get lastName() {
        return this.form.inputElementById('last-name');
    }

	get postalCode() {
        return this.form.inputElementById('postal-code');
    }

	get errorElement() {
		return this.rootUnit.find('.error-message-container>h3')
	}

	//Helper
	private get form() {
        return new FormPO(cy.get('.checkout_info'));
    }

}