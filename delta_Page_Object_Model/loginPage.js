

class Login
{
    constructor(page)
    {
        this.page=page
        this.userNameTxt=page.getByPlaceholder("Username")
        this.passwordTxt=page.getByPlaceholder("Password")
        this.submitBtn=page.locator("//button[@type='submit']")
    }
    async loginToApplication()
    {
        await this.page.goto(process.env.URL)
        await this.userNameTxt.fill(process.env.User_Name)
        await this.passwordTxt.fill(process.env.Password)
        await this.submitBtn.click()
       
    }
}
export default Login