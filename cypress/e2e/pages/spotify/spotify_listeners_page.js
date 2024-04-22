export class SpotifyListenersPage{

    spotify_listeners_page_heading = '.elementor-element-668b348 > .elementor-widget-container > .elementor-heading-title'
    spotify_listeners_page_paragraph = '.elementor-element-91c578c > .elementor-widget-container > p'

    //Packages
    spotify_listeners_page_first_package_high_quality = '.e-loop-item-2523 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Spotify High Quality listeners Attributes
    //1,000 High Quality listeners
    spotify_listeners_page_1000_high_quality_listeners_amount = '.e-loop-item-2523 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_1000_high_quality_listeners_price = '.e-loop-item-2523 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,000 High Quality listeners
    spotify_listeners_page_2000_high_quality_listeners_amount = '.e-loop-item-2524 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_2000_high_quality_listeners_price = '.e-loop-item-2524 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //4,000 High Quality listeners
    spotify_listeners_page_4000_high_quality_listeners_amount = '.e-loop-item-2525 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_4000_high_quality_listeners_price = '.e-loop-item-2525 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //8,000 High Quality listeners
    spotify_listeners_page_8000_high_quality_listeners_amount = '.e-loop-item-2527 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_8000_high_quality_listeners_price = '.e-loop-item-2527 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //16,000 High Quality listeners
    spotify_listeners_page_16000_high_quality_listeners_amount = '.e-loop-item-2528 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_16000_high_quality_listeners_price = '.e-loop-item-2528 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //32,000 High Quality listeners
    spotify_listeners_page_32000_high_quality_listeners_amount = '.e-loop-item-2532 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_32000_high_quality_listeners_price = '.e-loop-item-2532 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //64,000 High Quality listeners
    spotify_listeners_page_64000_high_quality_listeners_amount = '.e-loop-item-2533 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_64000_high_quality_listeners_price = '.e-loop-item-2533 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //128,000 High Quality listeners
    spotify_listeners_page_128000_high_quality_listeners_amount = '.e-loop-item-2534 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    spotify_listeners_page_128000_high_quality_listeners_price = '.e-loop-item-2534 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySpotifyHighQualityListenersFirstPackage(){
        cy.get(this.spotify_listeners_page_first_package_high_quality).click({ force: true })
    }

    checkSpotifyHighQualityListenersPackages(){
        //1,000 High Quality listeners
        cy.get(this.spotify_listeners_page_1000_high_quality_listeners_amount).should('contain', '1,000')
        cy.get(this.spotify_listeners_page_1000_high_quality_listeners_price).should('contain','$14.14')
        //2,000 High Quality listeners
        cy.get(this.spotify_listeners_page_2000_high_quality_listeners_amount).should('contain', '2,000')
        cy.get(this.spotify_listeners_page_2000_high_quality_listeners_price).should('contain','$19.19')
        //4,000 High Quality listeners
        cy.get(this.spotify_listeners_page_4000_high_quality_listeners_amount).should('contain', '4,000')
        cy.get(this.spotify_listeners_page_4000_high_quality_listeners_price).should('contain','$33.33')
        //8,000 High Quality listeners
        cy.get(this.spotify_listeners_page_8000_high_quality_listeners_amount).should('contain', '8,000')
        cy.get(this.spotify_listeners_page_8000_high_quality_listeners_price).should('contain','$47.47')
        //16,000 High Quality listeners
        cy.get(this.spotify_listeners_page_16000_high_quality_listeners_amount).should('contain', '16,000')
        cy.get(this.spotify_listeners_page_16000_high_quality_listeners_price).should('contain','$73.73')
        //32,000 High Quality listeners
        cy.get(this.spotify_listeners_page_32000_high_quality_listeners_amount).should('contain', '32,000')
        cy.get(this.spotify_listeners_page_32000_high_quality_listeners_price).should('contain','$108.18')
        //64,000 High Quality listeners
        cy.get(this.spotify_listeners_page_64000_high_quality_listeners_amount).should('contain', '64,000')
        cy.get(this.spotify_listeners_page_64000_high_quality_listeners_price).should('contain','$163.16')
        //128,000 High Quality listeners
        cy.get(this.spotify_listeners_page_128000_high_quality_listeners_amount).should('contain', '128,000')
        cy.get(this.spotify_listeners_page_128000_high_quality_listeners_price).should('contain','$255.25')
    }
}