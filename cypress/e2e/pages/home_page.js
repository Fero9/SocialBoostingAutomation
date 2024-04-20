export class HomePage{
    
    home_page_tiktok_widget = '.elementor-element-181af12 > .elementor-widget-wrap'
    home_page_instagram_widget = '.elementor-element-6b8d6fef > .elementor-widget-wrap'
    home_page_youtube_widget = '.elementor-element-b6f75e6 > .elementor-widget-wrap'

    signup(){
        cy.get('#menu-1-3411fe08 > .menu-item-7413 > .elementor-item').click()
    }

    goToTikTokPage(){
        cy.get(this.home_page_tiktok_widget).click({force:true})
    }

    goToInstagramPage(){
        cy.get(this.home_page_instagram_widget).click({force:true})
    }

    goToYouTubePage(){
        cy.get(this.home_page_youtube_widget).click({force:true})
        cy.wait(5000)
    }
}