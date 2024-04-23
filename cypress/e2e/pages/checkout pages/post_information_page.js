export class PostInformationPage{

    post_information_page_video = '[data-index="1"] > .checkbox-alt > label'
    post_information_page_submit_button = '.form__btn'

    spotify_track = '[data-index="1"] > .checkbox-alt > .spotify-label'

    soundcloud_track = '[data-index="1"] > .checkbox-alt > .soundcloud-label'

    chooseYourVideo(){
        cy.get(this.post_information_page_video).click()
        cy.get(this.post_information_page_submit_button).click()
    }

    chooseYourTrack(){
        cy.get(this.spotify_track).click()
        cy.get(this.post_information_page_submit_button).click()
    }

    chooseYourSCTrack(){
        cy.get(this.soundcloud_track).click()
        cy.get(this.post_information_page_submit_button).click()
    }
}