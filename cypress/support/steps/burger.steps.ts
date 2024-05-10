import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { BurgerPO } from '../../pages/burger.po';

const burgerMenu = new BurgerPO('.bm-menu')

Given(/^the user clicks on '(.+)' from side menu$/, (link: string)=>{
	burgerMenu.linkByName(link).click();
})