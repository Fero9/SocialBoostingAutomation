export class SignupPage{
    
    signupPage_email_field = '#registration_form_email'
    signupPage_password_field = '#registration_form_password_first'
    signupPage_confirm_password_field = '#registration_form_password_second'
    signupPage_create_account_button = '.flex > .w-full'

    enterEmail(email){
        cy.get(this.signupPage_email_field).type(email)
    }

    enterPassword(password){
        cy.get(this.signupPage_password_field).type(password)
    }

    confirmPassword(conPassword){
        cy.get(this.signupPage_confirm_password_field).type(conPassword)
    }

    createAccount(){
        cy.get(this.signupPage_create_account_button).click()
    }
}