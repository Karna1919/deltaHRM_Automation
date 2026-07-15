

import{test}from"../../Fixtures/loginFicture.js"
import HomePage from "../../delta_Page_Object_Model/homePage.js"

test("User should able to search for an employee in the PIM Employee List",async({loginPage})=>
{
    let page=loginPage
    let homePage= new HomePage(page)
    await homePage.PIMLink.click()

})