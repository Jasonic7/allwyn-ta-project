export class Button {
    rootUnit: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(rootUnit:Cypress.Chainable<JQuery>){
        this.rootUnit = rootUnit
    }

    get label(){
        return this.rootUnit.invoke('attr','value')
    }

    public isClickable() {
        return this.rootUnit.should('not.be.disabled');
    }

    public clickButton() {
        return this.rootUnit.click({force:true});
    }
}
