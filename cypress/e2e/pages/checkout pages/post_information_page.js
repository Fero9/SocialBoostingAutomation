export class PostInformationPage{

    post_information_page_video = '[data-index="1"] > .checkbox-alt > label'
    post_information_page_submit_button = '.form__btn'

    spotify_track = '[data-index="1"] > .checkbox-alt > .spotify-label'

    soundcloud_track = '[data-index="1"] > .checkbox-alt > .soundcloud-label'

    postURL = '#socialboosting_checkout_item_information_customURL'

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

    postInformation(){
        cy.get(this.postURL).type('https://www.threads.net/@badpostblunt/post/C6HJ4WJO1wy')
        cy.get(this.post_information_page_submit_button).click()
    }

    chooseTheTweet(){
        cy.get('[data-index="1"]').click()
        cy.get(this.post_information_page_submit_button).click()
    }
}