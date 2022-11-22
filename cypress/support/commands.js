import ToVerifyUserIsAbleToLogin from "../Pages/ToVerifyUserIsAbleToLogin"
import ToverifyUserIsAbleToLogingout from "../Pages/ToVerifyUserIsAbleToLogout"
const signuppage = new ToVerifyUserIsAbleToLogin()
const logout = new ToverifyUserIsAbleToLogingout()
Cypress.Commands.add('login', () => {
  signuppage.navigate()
  signuppage.clickonsignup()
  signuppage.Addingdetails()
  signuppage.Signupbutton()
  signuppage.clickonlogin()
  signuppage.enterusername()
  signuppage.enterpassword()
  signuppage.click()
})
Cypress.Commands.add('Logout', () => {
  signuppage.navigate()
  logout.Logoutbutton
})
