export class SpotifyPlaysPage{

    spotify_plays_page_heading = '.elementor-element-5342f88 > .elementor-widget-container > .elementor-heading-title'
    spotify_plays_page_paragraph = '.elementor-element-4fdaed5 > .elementor-widget-container > p'

    //Packages
    spotify_plays_page_first_package_high_quality = '.e-loop-item-2513 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Spotify High Quality plays Attributes
    //1,000 High Quality plays
    spotify_plays_page_1000_high_quality_plays_amount = '.e-loop-item-2513 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_1000_high_quality_plays_price = '.e-loop-item-2513 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,000 High Quality plays
    spotify_plays_page_2000_high_quality_plays_amount = '.e-loop-item-2514 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_2000_high_quality_plays_price = '.e-loop-item-2514 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //4,000 High Quality plays
    spotify_plays_page_4000_high_quality_plays_amount = '.e-loop-item-2515 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_4000_high_quality_plays_price = '.e-loop-item-2515 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //8,000 High Quality plays
    spotify_plays_page_8000_high_quality_plays_amount = '.e-loop-item-2516 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_8000_high_quality_plays_price = '.e-loop-item-2516 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //16,000 High Quality plays
    spotify_plays_page_16000_high_quality_plays_amount = '.e-loop-item-2517 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_16000_high_quality_plays_price = '.e-loop-item-2517 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //32,000 High Quality plays
    spotify_plays_page_32000_high_quality_plays_amount = '.e-loop-item-2518 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_32000_high_quality_plays_price = '.e-loop-item-2518 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //64,000 High Quality plays
    spotify_plays_page_64000_high_quality_plays_amount = '.e-loop-item-2519 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_64000_high_quality_plays_price = '.e-loop-item-2519 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //128,000 High Quality plays
    spotify_plays_page_128000_high_quality_plays_amount = '.e-loop-item-2520 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_128000_high_quality_plays_price = '.e-loop-item-2520 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //256,000 High Quality plays
    spotify_plays_page_256000_high_quality_plays_amount = '.e-loop-item-2521 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_plays_page_256000_high_quality_plays_price = '.e-loop-item-2521 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySpotifyHighQualityPlaysFirstPackage(){
        cy.get(this.spotify_plays_page_first_package_high_quality).click({ force: true })
    }

    checkSpotifyHighQualityPlaysPackages(){
        //1,000 High Quality plays
        cy.get(this.spotify_plays_page_1000_high_quality_plays_amount).should('contain', '1,000')
        cy.get(this.spotify_plays_page_1000_high_quality_plays_price).should('contain','$3.44')
        //2,000 High Quality plays
        cy.get(this.spotify_plays_page_2000_high_quality_plays_amount).should('contain', '2,000')
        cy.get(this.spotify_plays_page_2000_high_quality_plays_price).should('contain','$6.25')
        //4,000 High Quality plays
        cy.get(this.spotify_plays_page_4000_high_quality_plays_amount).should('contain', '4,000')
        cy.get(this.spotify_plays_page_4000_high_quality_plays_price).should('contain','$12.12')
        //8,000 High Quality plays
        cy.get(this.spotify_plays_page_8000_high_quality_plays_amount).should('contain', '8,000')
        cy.get(this.spotify_plays_page_8000_high_quality_plays_price).should('contain','$22.22')
        //16,000 High Quality plays
        cy.get(this.spotify_plays_page_16000_high_quality_plays_amount).should('contain', '16,000')
        cy.get(this.spotify_plays_page_16000_high_quality_plays_price).should('contain','$39.39')
        //32,000 High Quality plays
        cy.get(this.spotify_plays_page_32000_high_quality_plays_amount).should('contain', '32,000')
        cy.get(this.spotify_plays_page_32000_high_quality_plays_price).should('contain','$72.72')
        //64,000 High Quality plays
        cy.get(this.spotify_plays_page_64000_high_quality_plays_amount).should('contain', '64,000')
        cy.get(this.spotify_plays_page_64000_high_quality_plays_price).should('contain','$109.19')
        //128,000 High Quality plays
        cy.get(this.spotify_plays_page_128000_high_quality_plays_amount).should('contain', '128,000')
        cy.get(this.spotify_plays_page_128000_high_quality_plays_price).should('contain','$175.70')
        //256,000 High Quality plays
        cy.get(this.spotify_plays_page_256000_high_quality_plays_amount).should('contain', '256,000')
        cy.get(this.spotify_plays_page_256000_high_quality_plays_price).should('contain','$299.19')
    }
}