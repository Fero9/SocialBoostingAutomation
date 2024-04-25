export class HomePage{
    
    home_page_tiktok_widget = '.elementor-element-181af12 > .elementor-widget-wrap'
    home_page_instagram_widget = '.elementor-element-6b8d6fef > .elementor-widget-wrap'
    home_page_youtube_widget = '.elementor-element-b6f75e6 > .elementor-widget-wrap'
    home_page_spotify_widget = '.elementor-element-2c8311b > .elementor-widget-wrap'
    home_page_soundcloud_widget = '.elementor-element-c8ba0db > .elementor-widget-wrap'
    home_page_threahds_widget = '.elementor-element-887d3fd > .elementor-container > .make-column-clickable-elementor > .elementor-widget-wrap'
    home_page_twitter_widget = '.elementor-element-04a4cb0 > .elementor-widget-wrap'

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
    }

    goToSpotifyPage(){
        cy.get(this.home_page_spotify_widget).click({force:true})
    }

    goToSoundCloudPage(){
        cy.get(this.home_page_soundcloud_widget).click({force:true})
    }

    goToThreadsPage(){
        cy.get(this.home_page_threahds_widget).click({force:true})
    }

    goToTwitterPage(){
        cy.get(this.home_page_twitter_widget).click({force:true})
    }
}