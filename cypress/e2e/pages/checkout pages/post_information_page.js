export class PostInformationPage{

    post_information_page_video = '[data-index="1"] > .checkbox-alt > label'
    post_information_page_submit_button = '.form__btn'

    chooseYourVideo(){
        cy.get(this.post_information_page_video).click()
        cy.get(this.post_information_page_submit_button).click()
    }
}