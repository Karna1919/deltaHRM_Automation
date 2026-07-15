import{test}from"@playwright/test"
import Login from "../delta_Page_Object_Model/loginPage.js"

test("login to app",async({page})=>
{
   let loginPg = new Login(page)
   await loginPg.loginToApplication()
})