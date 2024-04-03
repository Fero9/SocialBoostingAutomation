export class InstagramViewsPage{

    instagram_views_page_heading = '.elementor-element-d5b6b1c > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_paragraph = '.elementor-element-4631560 > .elementor-widget-container > p'

    //Packages
    instagram_views_page_first_package = '.e-loop-item-2338 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //instagram Views Attributes
    //1,000 views
    instagram_views_page_1000_views_amount = '.e-loop-item-2338 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_1000_views_price = '.e-loop-item-2338 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 views
    instagram_views_page_5000_views_amount = '.e-loop-item-2339 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_5000_views_price = '.e-loop-item-2339 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 views
    instagram_views_page_10000_views_amount = '.e-loop-item-2340 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_10000_views_price = '.e-loop-item-2340 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 views
    instagram_views_page_25000_views_amount = '.e-loop-item-2301 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_25000_views_price = '.e-loop-item-2301 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50,000 views
    instagram_views_page_50000_views_amount = '.e-loop-item-2312 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_50000_views_price = '.e-loop-item-2312 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100,000 views
    instagram_views_page_100000_views_amount = '.e-loop-item-2319 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_100000_views_price = '.e-loop-item-2319 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500,000 views
    instagram_views_page_500000_views_amount = '.e-loop-item-2326 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_500000_views_price = '.e-loop-item-2326 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000,000 views
    instagram_views_page_1000000_views_amount = '.e-loop-item-2330 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_views_page_1000000_views_price = '.e-loop-item-2330 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyInstagramViewsFirstPackage(){
        cy.get(this.instagram_views_page_first_package).click()
    }

    checkInstagramViewsPackages(){
        //1,000 views
        cy.get(this.instagram_views_page_1000_views_amount).should('contain', '1,000')
        cy.get(this.instagram_views_page_1000_views_price).should('contain','$4.03')
        //5,000 views
        cy.get(this.instagram_views_page_5000_views_amount).should('contain', '5,000')
        cy.get(this.instagram_views_page_5000_views_price).should('contain','$13.23')
        //10,000 views
        cy.get(this.instagram_views_page_10000_views_amount).should('contain', '10,000')
        cy.get(this.instagram_views_page_10000_views_price).should('contain','$22.99')
        //25,000 views
        cy.get(this.instagram_views_page_25000_views_amount).should('contain', '25,000')
        cy.get(this.instagram_views_page_25000_views_price).should('contain','$57.39')
        //50,000 views
        cy.get(this.instagram_views_page_50000_views_amount).should('contain', '50,000')
        cy.get(this.instagram_views_page_50000_views_price).should('contain','$112.70')
        //100,000 views
        cy.get(this.instagram_views_page_100000_views_amount).should('contain', '100,000')
        cy.get(this.instagram_views_page_100000_views_price).should('contain','$208.15')
        //500,000 views
        cy.get(this.instagram_views_page_500000_views_amount).should('contain', '500,000')
        cy.get(this.instagram_views_page_500000_views_price).should('contain','$845.25')
        //1,000,000 views
        cy.get(this.instagram_views_page_1000000_views_amount).should('contain', '1,000,000')
        cy.get(this.instagram_views_page_1000000_views_price).should('contain','$1,587.00')
    }
}