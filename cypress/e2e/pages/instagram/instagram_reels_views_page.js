export class InstagramReelsViewsPage{

    instagram_reels_views_page_heading = '.elementor-element-8723c2d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_paragraph = '.elementor-element-0d3e0e9 > .elementor-widget-container > p'

    //Packages
    instagram_reels_views_page_first_package = '.e-loop-item-2471 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Instagram reels_views Attributes
    //1,000 Reels views
    instagram_reels_views_page_1000_reels_views_amount = '.e-loop-item-2471 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_1000_reels_views_price = '.e-loop-item-2471 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 Reels views
    instagram_reels_views_page_5000_reels_views_amount = '.e-loop-item-2472 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_views_page_5000_reels_views_price = '.e-loop-item-2472 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 Reels views
    instagram_reels_views_page_10000_reels_views_amount = '.e-loop-item-2476 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_views_page_10000_reels_views_price = '.e-loop-item-2476 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 reels_views
    instagram_reels_views_page_25000_reels_views_amount = '.e-loop-item-2477 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_25000_reels_views_price = '.e-loop-item-2477 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi' 
    //50,000 reels_views
    instagram_reels_views_page_50000_reels_views_amount = '.e-loop-item-2456 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_50000_reels_views_price = '.e-loop-item-2456 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100,000 reels_views
    instagram_reels_views_page_100000_reels_views_amount = '.e-loop-item-2464 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_100000_reels_views_price = '.e-loop-item-2464 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250,000 reels_views
    instagram_reels_views_page_250000_reels_views_amount = '.e-loop-item-2465 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_250000_reels_views_price = '.e-loop-item-2465 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500,000 reels_views
    instagram_reels_views_page_500000_reels_views_amount = '.e-loop-item-2468 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_500000_reels_views_price = '.e-loop-item-2468 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000,000 reels_views
    instagram_reels_views_page_1000000_reels_views_amount = '.e-loop-item-2470 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_views_page_1000000_reels_views_price = '.e-loop-item-2470 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyInstagramReelsViewsFirstPackage(){
        cy.get(this.instagram_reels_views_page_first_package).click()
    }

    checkInstagramReelsViewsPackages(){
        //1,000 reels_views
        cy.get(this.instagram_reels_views_page_1000_reels_views_amount).should('contain', '1,000')
        cy.get(this.instagram_reels_views_page_1000_reels_views_price).should('contain','$2.88')
        //5,000 reels_views
        cy.get(this.instagram_reels_views_page_5000_reels_views_amount).should('contain', '5,000')
        cy.get(this.instagram_reels_views_page_5000_reels_views_price).should('contain','$13.80')
        //10,000 reels_views
        cy.get(this.instagram_reels_views_page_10000_reels_views_amount).should('contain', '10,000')
        cy.get(this.instagram_reels_views_page_10000_reels_views_price).should('contain','$24.73')
        //25,000 reels_views
        cy.get(this.instagram_reels_views_page_25000_reels_views_amount).should('contain', '25,000')
        cy.get(this.instagram_reels_views_page_25000_reels_views_price).should('contain','$58.65')
        //50,000 reels_views
        cy.get(this.instagram_reels_views_page_50000_reels_views_amount).should('contain', '50,000')
        cy.get(this.instagram_reels_views_page_50000_reels_views_price).should('contain','$114.99')
        //100,000 reels_views
        cy.get(this.instagram_reels_views_page_100000_reels_views_amount).should('contain', '100,000')
        cy.get(this.instagram_reels_views_page_100000_reels_views_price).should('contain','$203.55')
        //250,000 reels_views
        cy.get(this.instagram_reels_views_page_250000_reels_views_amount).should('contain', '250,000')
        cy.get(this.instagram_reels_views_page_250000_reels_views_price).should('contain','$437.00')
        //500,000 reels_views
        cy.get(this.instagram_reels_views_page_500000_reels_views_amount).should('contain', '500,000')
        cy.get(this.instagram_reels_views_page_500000_reels_views_price).should('contain','$862.50')
        //1,000,000 reels_views
        cy.get(this.instagram_reels_views_page_1000000_reels_views_amount).should('contain', '1,000,000')
        cy.get(this.instagram_reels_views_page_1000000_reels_views_price).should('contain','$1,610.00')
        
    }
}