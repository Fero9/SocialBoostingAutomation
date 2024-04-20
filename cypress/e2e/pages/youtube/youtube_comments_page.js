export class YouTubeCommentsPage{

    youtube_comments_page_heading = '.elementor-element-9b00ffa > .elementor-widget-container > .elementor-heading-title'
    youtube_comments_page_paragraph = '.elementor-element-2202ec6 > .elementor-widget-container > p'

    //Packages
    youtube_comments_page_first_package_high_quality = '.e-loop-item-3311 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //youtube High Quality comments Attributes
    //10 High Quality comments
    youtube_comments_page_10_high_quality_comments_amount = '.e-loop-item-3311 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_10_high_quality_comments_price = '.e-loop-item-3311 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //20 High Quality comments
    youtube_comments_page_20_high_quality_comments_amount = '.e-loop-item-3312 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_20_high_quality_comments_price = '.e-loop-item-3312 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //35 High Quality comments
    youtube_comments_page_35_high_quality_comments_amount = '.e-loop-item-3313 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_35_high_quality_comments_price = '.e-loop-item-3313 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50 High Quality comments
    youtube_comments_page_50_high_quality_comments_amount = '.e-loop-item-3314 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_50_high_quality_comments_price = '.e-loop-item-3314 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //75 High Quality comments
    youtube_comments_page_75_high_quality_comments_amount = '.e-loop-item-3306 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_75_high_quality_comments_price = '.e-loop-item-3306 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100 High Quality comments
    youtube_comments_page_100_high_quality_comments_amount = '.e-loop-item-3307 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_100_high_quality_comments_price = '.e-loop-item-3307 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //150 High Quality comments
    youtube_comments_page_150_high_quality_comments_amount = '.e-loop-item-3308 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_150_high_quality_comments_price = '.e-loop-item-3308 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality comments
    youtube_comments_page_250_high_quality_comments_amount = '.e-loop-item-3309 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_250_high_quality_comments_price = '.e-loop-item-3309 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality comments
    youtube_comments_page_500_high_quality_comments_amount = '.e-loop-item-3310 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_comments_page_500_high_quality_comments_price = '.e-loop-item-3310 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyYouTubeHighQualityCommentsFirstPackage(){
        cy.get(this.youtube_comments_page_first_package_high_quality).click({ force: true })
    }

    checkYouTubeHighQualityCommentsPackages(){
        //10 High Quality comments
        cy.get(this.youtube_comments_page_10_high_quality_comments_amount).should('contain', '10')
        cy.get(this.youtube_comments_page_10_high_quality_comments_price).should('contain','$3.33')
        //20 High Quality comments
        cy.get(this.youtube_comments_page_20_high_quality_comments_amount).should('contain', '20')
        cy.get(this.youtube_comments_page_20_high_quality_comments_price).should('contain','$6.66')
        //35 High Quality comments
        cy.get(this.youtube_comments_page_35_high_quality_comments_amount).should('contain', '35')
        cy.get(this.youtube_comments_page_35_high_quality_comments_price).should('contain','$8.88')
        //50 High Quality comments
        cy.get(this.youtube_comments_page_50_high_quality_comments_amount).should('contain', '50')
        cy.get(this.youtube_comments_page_50_high_quality_comments_price).should('contain','$11.11')
        //75 High Quality comments
        cy.get(this.youtube_comments_page_75_high_quality_comments_amount).should('contain', '75')
        cy.get(this.youtube_comments_page_75_high_quality_comments_price).should('contain','$16.16')
        //100 High Quality comments
        cy.get(this.youtube_comments_page_100_high_quality_comments_amount).should('contain', '100')
        cy.get(this.youtube_comments_page_100_high_quality_comments_price).should('contain','$20.20')
        //150 High Quality comments
        cy.get(this.youtube_comments_page_150_high_quality_comments_amount).should('contain', '150')
        cy.get(this.youtube_comments_page_150_high_quality_comments_price).should('contain','$29.29')
        //250 High Quality comments
        cy.get(this.youtube_comments_page_250_high_quality_comments_amount).should('contain', '250')
        cy.get(this.youtube_comments_page_250_high_quality_comments_price).should('contain','$39.39')
        //500 High Quality comments
        cy.get(this.youtube_comments_page_500_high_quality_comments_amount).should('contain', '500')
        cy.get(this.youtube_comments_page_500_high_quality_comments_price).should('contain','$69.69')
    }
}