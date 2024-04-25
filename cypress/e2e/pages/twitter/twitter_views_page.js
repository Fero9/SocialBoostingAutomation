export class TwitterViewsPage{

    twitter_views_page_heading = '.elementor-element-f23d6be > .elementor-widget-container > .elementor-heading-title'
    twitter_views_page_paragraph = '.elementor-element-6b06efd > .elementor-widget-container > p'

    //Packages
    twitter_views_page_first_package_high_quality = '.e-loop-item-2663 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //soundcloud High Quality views Attributes
    //1,000 High Quality views
    twitter_views_page_1000_high_quality_views_amount = '.e-loop-item-2663 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_1000_high_quality_views_price = '.e-loop-item-2663 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality views
    twitter_views_page_2500_high_quality_views_amount = '.e-loop-item-2664 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_2500_high_quality_views_price = '.e-loop-item-2664 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality views
    twitter_views_page_5000_high_quality_views_amount = '.e-loop-item-2665 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_5000_high_quality_views_price = '.e-loop-item-2665 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //7,500 High Quality views
    twitter_views_page_7500_high_quality_views_amount = '.e-loop-item-2666 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_7500_high_quality_views_price = '.e-loop-item-2666 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality views
    twitter_views_page_10000_high_quality_views_amount = '.e-loop-item-2659 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_10000_high_quality_views_price = '.e-loop-item-2659 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 High Quality views
    twitter_views_page_25000_high_quality_views_amount = '.e-loop-item-2660 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_25000_high_quality_views_price = '.e-loop-item-2660 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50,000 High Quality views
    twitter_views_page_50000_high_quality_views_amount = '.e-loop-item-2661 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_50000_high_quality_views_price = '.e-loop-item-2661 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100,000 High Quality views
    twitter_views_page_100000_high_quality_views_amount = '.e-loop-item-2662 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_views_page_100000_high_quality_views_price = '.e-loop-item-2662 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTwitterHighQualityViewsFirstPackage(){
        cy.get(this.twitter_views_page_first_package_high_quality).click({ force: true })
    }

    checkTwitterHighQualityViewsPackages(){
        //1,000 High Quality views
        cy.get(this.twitter_views_page_1000_high_quality_views_amount).should('contain', '1,000')
        cy.get(this.twitter_views_page_1000_high_quality_views_price).should('contain','$2.33')
        //2,500 High Quality views
        cy.get(this.twitter_views_page_2500_high_quality_views_amount).should('contain', '2,500')
        cy.get(this.twitter_views_page_2500_high_quality_views_price).should('contain','$4.44')
        //5,000 High Quality views
        cy.get(this.twitter_views_page_5000_high_quality_views_amount).should('contain', '5,000')
        cy.get(this.twitter_views_page_5000_high_quality_views_price).should('contain','$8.88')
        //7,500 High Quality views
        cy.get(this.twitter_views_page_7500_high_quality_views_amount).should('contain', '7,500')
        cy.get(this.twitter_views_page_7500_high_quality_views_price).should('contain','$11.11')
        //10,000 High Quality views
        cy.get(this.twitter_views_page_10000_high_quality_views_amount).should('contain', '10,000')
        cy.get(this.twitter_views_page_10000_high_quality_views_price).should('contain','$14.14')
        //25,000 High Quality views
        cy.get(this.twitter_views_page_25000_high_quality_views_amount).should('contain', '25,000')
        cy.get(this.twitter_views_page_25000_high_quality_views_price).should('contain','$32.32')
        //50,000 High Quality views
        cy.get(this.twitter_views_page_50000_high_quality_views_amount).should('contain', '50,000')
        cy.get(this.twitter_views_page_50000_high_quality_views_price).should('contain','$84.84')
        //100,000 High Quality views
        cy.get(this.twitter_views_page_100000_high_quality_views_amount).should('contain', '100,000')
        cy.get(this.twitter_views_page_100000_high_quality_views_price).should('contain','$115.15')
    }
}