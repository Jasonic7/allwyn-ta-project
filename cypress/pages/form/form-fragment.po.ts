export class FormFragmentPO {
    rootUnit: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(rootUnit:Cypress.Chainable<JQuery>){
        this.rootUnit = rootUnit
    }

    get placeholder():Cypress.Chainable<string> {
        return this.rootUnit.invoke('attr','placeholder')
    }

    public typeInto(input:string) {
        return this.rootUnit.type(input.trim(),{force:true});
    }
    
}