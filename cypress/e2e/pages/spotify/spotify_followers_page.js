export class SpotifyFollowersPage{

    spotify_followers_page_heading = '.elementor-element-190f01d > .elementor-widget-container > .elementor-heading-title'
    spotify_followers_page_paragraph = '.elementor-element-e421626 > .elementor-widget-container > p'

    //Packages
    spotify_followers_page_first_package_high_quality = '.e-loop-item-2486 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Spotify High Quality followers Attributes
    //250 High Quality followers
    spotify_followers_page_250_high_quality_followers_amount = '.e-loop-item-2486 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_250_high_quality_followers_price = '.e-loop-item-2486 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality followers
    spotify_followers_page_500_high_quality_followers_amount = '.e-loop-item-2493 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_500_high_quality_followers_price = '.e-loop-item-2493 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality followers
    spotify_followers_page_1000_high_quality_followers_amount = '.e-loop-item-2494 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_1000_high_quality_followers_price = '.e-loop-item-2494 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,000 High Quality followers
    spotify_followers_page_2000_high_quality_followers_amount = '.e-loop-item-2496 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_2000_high_quality_followers_price = '.e-loop-item-2496 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //4,000 High Quality followers
    spotify_followers_page_4000_high_quality_followers_amount = '.e-loop-item-2502 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_4000_high_quality_followers_price = '.e-loop-item-2502 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //8,000 High Quality followers
    spotify_followers_page_8000_high_quality_followers_amount = '.e-loop-item-2504 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_8000_high_quality_followers_price = '.e-loop-item-2504 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //16,000 High Quality followers
    spotify_followers_page_16000_high_quality_followers_amount = '.e-loop-item-2505 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_16000_high_quality_followers_price = '.e-loop-item-2505 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //32,000 High Quality followers
    spotify_followers_page_32000_high_quality_followers_amount = '.e-loop-item-2506 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_followers_page_32000_high_quality_followers_price = '.e-loop-item-2506 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySpotifyHighQualityFollowersFirstPackage(){
        cy.get(this.spotify_followers_page_first_package_high_quality).click({ force: true })
    }

    checkSpotifyHighQualityFollowersPackages(){
        //250 High Quality followers
        cy.get(this.spotify_followers_page_250_high_quality_followers_amount).should('contain', '250')
        cy.get(this.spotify_followers_page_250_high_quality_followers_price).should('contain','$6.66')
        //500 High Quality followers
        cy.get(this.spotify_followers_page_500_high_quality_followers_amount).should('contain', '500')
        cy.get(this.spotify_followers_page_500_high_quality_followers_price).should('contain','$10.10')
        //1,000 High Quality followers
        cy.get(this.spotify_followers_page_1000_high_quality_followers_amount).should('contain', '1,000')
        cy.get(this.spotify_followers_page_1000_high_quality_followers_price).should('contain','$14.14')
        //2,000 High Quality followers
        cy.get(this.spotify_followers_page_2000_high_quality_followers_amount).should('contain', '2,000')
        cy.get(this.spotify_followers_page_2000_high_quality_followers_price).should('contain','$19.19')
        //4,000 High Quality followers
        cy.get(this.spotify_followers_page_4000_high_quality_followers_amount).should('contain', '4,000')
        cy.get(this.spotify_followers_page_4000_high_quality_followers_price).should('contain','$30.30')
        //8,000 High Quality followers
        cy.get(this.spotify_followers_page_8000_high_quality_followers_amount).should('contain', '8,000')
        cy.get(this.spotify_followers_page_8000_high_quality_followers_price).should('contain','$50.50')
        //16,000 High Quality followers
        cy.get(this.spotify_followers_page_16000_high_quality_followers_amount).should('contain', '16,000')
        cy.get(this.spotify_followers_page_16000_high_quality_followers_price).should('contain','$75.75')
        //32,000 High Quality followers
        cy.get(this.spotify_followers_page_32000_high_quality_followers_amount).should('contain', '32,000')
        cy.get(this.spotify_followers_page_32000_high_quality_followers_price).should('contain','$90.90')
    }
}