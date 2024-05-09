import { Button } from "./button/button.po";
import { FormPO } from "./form/form.po";

export class LoginPO {

    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}


    public get title() {
        return this.rootUnit.find('.login_logo').invoke('text').then((txt)=>{
            return txt.trim();
        });
    }

    public get usernameField() {
        return this.form.inputElementById('user-name');
    }

    public get passwordField() {
        return this.form.inputElementById('password');
    }

    public get loginButton() {
        return new Button(this.rootUnit.find('.submit-button'))
    }

    public closeErrorMessage() {
        return new Button(this.errorElement.find('.error-button')).click();
    }

    public get errorElement() {
        return this.rootUnit.find('.error-message-container>h3')
    }

    // Helpers
    private get form() {
        return new FormPO(cy.get('form'));
    }

}