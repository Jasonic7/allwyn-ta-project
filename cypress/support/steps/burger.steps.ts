import { DataTable, Given } from '@badeball/cypress-cucumber-preprocessor';
import { BurgerPO } from '../../pages/burger.po';

const burgerMenu = new BurgerPO('.bm-menu')

Given(/^the user clicks on '(.+)' from side menu$/, (link: string)=>{
	burgerMenu.linkByName(link).click().debug();
});

Given(/^the following options are shown:$/, (data:DataTable)=>{
	const opts = data.rows();
	burgerMenu.getAllLinks().each((link,indx)=>{
		cy.wrap(link).should('have.text',opts[indx][0])
	})
});

Given(/^the user is redirected to SauceLabs page$/, ()=>{
	cy.url().should('contain','saucelabs')
});

Given(/^the user is redirected to Login page$/, ()=>{
	cy.get('.login_container').should('exist')
});