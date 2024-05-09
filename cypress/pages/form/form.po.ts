import { FormFragmentPO } from './form-fragment.po';
export class FormPO {
	rootUnit: Cypress.Chainable<JQuery<HTMLFormElement>>;

    constructor(rootUnit:Cypress.Chainable<JQuery<HTMLFormElement>>){
        this.rootUnit = rootUnit;
    }

    public inputElementById(id:string):FormFragmentPO {
        return new FormFragmentPO(this.rootUnit.find(`input[id="${id}"]`))
    }

}