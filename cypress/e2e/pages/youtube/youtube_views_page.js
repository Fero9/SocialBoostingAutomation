export class YouTubeViewsPage{

    youtube_views_page_heading = '.elementor-element-e0789bb > .elementor-widget-container > .elementor-heading-title'
    youtube_views_page_paragraph = '.elementor-element-66de518 > .elementor-widget-container > p'

    //Packages
    youtube_views_page_first_package_high_quality = '.e-loop-item-2586 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //youtube High Quality Views Attributes
    //500 High Quality views
    youtube_views_page_500_high_quality_views_amount = '.e-loop-item-2586 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_500_high_quality_views_price = '.e-loop-item-2586 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1000 High Quality views
    youtube_views_page_1000_high_quality_views_amount = '.e-loop-item-2587 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_1000_high_quality_views_price = '.e-loop-item-2587 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2500 High Quality views
    youtube_views_page_2500_high_quality_views_amount = '.e-loop-item-2588 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_2500_high_quality_views_price = '.e-loop-item-2588 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality views
    youtube_views_page_5000_high_quality_views_amount = '.e-loop-item-2589 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_5000_high_quality_views_price = '.e-loop-item-2589 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //7,500 High Quality views
    youtube_views_page_7500_high_quality_views_amount = '.e-loop-item-2584 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_7500_high_quality_views_price = '.e-loop-item-2584 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality views
    youtube_views_page_10000_high_quality_views_amount = '.e-loop-item-2585 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_10000_high_quality_views_price = '.e-loop-item-2585 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //20,000 High Quality views
    youtube_views_page_20000_high_quality_views_amount = '.e-loop-item-6430 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_20000_high_quality_views_price = '.e-loop-item-6430 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50,000 High Quality views
    youtube_views_page_50000_high_quality_views_amount = '.e-loop-item-6431 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_50000_high_quality_views_price = '.e-loop-item-6431 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100,000 High Quality views
    youtube_views_page_100000_high_quality_views_amount = '.e-loop-item-6432 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_views_page_100000_high_quality_views_price = '.e-loop-item-6432 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyYouTubeHighQualityViewsFirstPackage(){
        cy.get(this.youtube_views_page_first_package_high_quality).click()
    }

    checkYouTubeHighQualityViewsPackages(){
        //500 High Quality views
        cy.get(this.youtube_views_page_500_high_quality_views_amount).should('contain', '500')
        cy.get(this.youtube_views_page_500_high_quality_views_price).should('contain','$5.75')
        //1,000 High Quality views
        cy.get(this.youtube_views_page_1000_high_quality_views_amount).should('contain', '1,000')
        cy.get(this.youtube_views_page_1000_high_quality_views_price).should('contain','$9.20')
        //2,500 High Quality views
        cy.get(this.youtube_views_page_2500_high_quality_views_amount).should('contain', '2,500')
        cy.get(this.youtube_views_page_2500_high_quality_views_price).should('contain','$19.55')
        //5,000 High Quality views
        cy.get(this.youtube_views_page_5000_high_quality_views_amount).should('contain', '5,000')
        cy.get(this.youtube_views_page_5000_high_quality_views_price).should('contain','$31.05')
        //7,500 High Quality views
        cy.get(this.youtube_views_page_7500_high_quality_views_amount).should('contain', '7,500')
        cy.get(this.youtube_views_page_7500_high_quality_views_price).should('contain','$46.00')
        //10,000 High Quality views
        cy.get(this.youtube_views_page_10000_high_quality_views_amount).should('contain', '10,000')
        cy.get(this.youtube_views_page_10000_high_quality_views_price).should('contain','$57.50')
        //20,000 High Quality views
        cy.get(this.youtube_views_page_20000_high_quality_views_amount).should('contain', '20,000')
        cy.get(this.youtube_views_page_20000_high_quality_views_price).should('contain','$101.20')
        //50,000 High Quality views
        cy.get(this.youtube_views_page_50000_high_quality_views_amount).should('contain', '50,000')
        cy.get(this.youtube_views_page_50000_high_quality_views_price).should('contain','$235.75')
        //100,000 High Quality views
        cy.get(this.youtube_views_page_100000_high_quality_views_amount).should('contain', '100,000')
        cy.get(this.youtube_views_page_100000_high_quality_views_price).should('contain','$437.00')
    }
}