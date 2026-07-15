import{test as base,expect}from"@playwright/test"
import Login from "../delta_Page_Object_Model/loginPage.js"
export const test=base.extend({
    loginPage:async({page},use)=>
    {
        let url=process.env.URL
        let username=process.env.User_Name
        let password=process.env.Password
        let loginPg=new Login(page)
        await loginPg.loginToApplication()
        await use(page)
    }
})
export{expect}