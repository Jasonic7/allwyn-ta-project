export class Button {
    rootUnit: Cypress.Chainable<JQuery>;

    constructor(rootUnit:Cypress.Chainable<JQuery>){
        this.rootUnit = rootUnit
    }

    get label(){
        return this.rootUnit.invoke('attr','value')
    }

    public isClickable() {
        return this.rootUnit.should('not.be.disabled');
    }

    public click() {
        return this.rootUnit.click({force:true});
    }
}
