export class TikTokViewsPage{

    tiktok_views_page_heading = '.elementor-element-c0712ab > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_paragraph = '.elementor-element-7f6097b > .elementor-widget-container > p'

    //Packages
    tiktok_views_page_first_package = '.e-loop-item-2141 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //TikTok Views Attributes
    //1,000 views
    tiktok_views_page_1000_views_amount = '.e-loop-item-2141 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_1000_views_price = '.e-loop-item-2141 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 views
    tiktok_views_page_10000_views_amount = '.e-loop-item-2142 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_10000_views_price = '.e-loop-item-2142 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //15,000 views
    tiktok_views_page_15000_views_amount = '.e-loop-item-2143 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_15000_views_price = '.e-loop-item-2143 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //20,000 views
    tiktok_views_page_20000_views_amount = '.e-loop-item-2144 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_20000_views_price = '.e-loop-item-2144 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //30,000 views
    tiktok_views_page_30000_views_amount = '.e-loop-item-2136 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_30000_views_price = '.e-loop-item-2136 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50,000 views
    tiktok_views_page_50000_views_amount = '.e-loop-item-2137 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_50000_views_price = '.e-loop-item-2137 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100,000 views
    tiktok_views_page_100000_views_amount = '.e-loop-item-2138 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_100000_views_price = '.e-loop-item-2138 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //200,000 views
    tiktok_views_page_200000_views_amount = '.e-loop-item-2139 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_200000_views_price = '.e-loop-item-2139 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //400,000 views
    tiktok_views_page_400000_views_amount = '.e-loop-item-2140 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_views_page_400000_views_price = '.e-loop-item-2140 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTikTokViewsFirstPackage(){
        cy.get(this.tiktok_views_page_first_package).click({ force: true })
    }

    checkTikTokViewsPackages(){
        //1,000 views
        cy.get(this.tiktok_views_page_1000_views_amount).should('contain', '1,000')
        cy.get(this.tiktok_views_page_1000_views_price).should('contain','$4.99')
        //10000 views
        cy.get(this.tiktok_views_page_10000_views_amount).should('contain', '10,000')
        cy.get(this.tiktok_views_page_10000_views_price).should('contain','$9.99')
        //15000 views
        cy.get(this.tiktok_views_page_15000_views_amount).should('contain', '15,000')
        cy.get(this.tiktok_views_page_15000_views_price).should('contain','$14.99')
        //20,000 views
        cy.get(this.tiktok_views_page_20000_views_amount).should('contain', '20,000')
        cy.get(this.tiktok_views_page_20000_views_price).should('contain','$19.99')
        //30,000 views
        cy.get(this.tiktok_views_page_30000_views_amount).should('contain', '30,000')
        cy.get(this.tiktok_views_page_30000_views_price).should('contain','$23.99')
        //50,000 views
        cy.get(this.tiktok_views_page_50000_views_amount).should('contain', '50,000')
        cy.get(this.tiktok_views_page_50000_views_price).should('contain','$30.48')
        //100,000 views
        cy.get(this.tiktok_views_page_100000_views_amount).should('contain', '100,000')
        cy.get(this.tiktok_views_page_100000_views_price).should('contain','$46.00')
        //200,000 views
        cy.get(this.tiktok_views_page_200000_views_amount).should('contain', '200,000')
        cy.get(this.tiktok_views_page_200000_views_price).should('contain','$75.90')
        //400,000 views
        cy.get(this.tiktok_views_page_400000_views_amount).should('contain', '400,000')
        cy.get(this.tiktok_views_page_400000_views_price).should('contain','$120.75')
    }
}