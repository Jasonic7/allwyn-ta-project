import { Button } from "./button/button.po";
import { FormPO } from "./form/form.po";

export class LoginPO {

    constructor(protected locator: string) {
	}

    private get rootUnit(){
		return cy.get(this.locator);
	}


    navigateTo() {
        return cy.visit('/');
    }

    get title() {
        return this.rootUnit.find('.login_logo').invoke('text').then((txt)=>{
            return txt;
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

    // Helpers
    private get form() {
        return new FormPO(cy.get('form'));
    }


}