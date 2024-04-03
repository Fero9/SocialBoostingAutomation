/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { SignupPage } from "./pages/signup_page"

const homePage = new HomePage()
const signupPage = new SignupPage()

describe('Sign Up Tests', ()=>{

    it('The user is able to Sign Up', () =>{
        homePage.signup()
        signupPage.enterEmail('frantisek+2202202401@socialboosting.com')
        signupPage.enterPassword('valid11Password')
        signupPage.confirmPassword('valid12Password')
        signupPage.createAccount()
        cy.get('.card-title').should('contain','Sign up')
    })
})