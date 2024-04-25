export class TwitterLikesPage{

    twitter_likes_page_heading = '.elementor-element-4c441e4 > .elementor-widget-container > .elementor-heading-title'
    twitter_likes_page_paragraph = '.elementor-element-8278b98 > .elementor-widget-container > p'

    //Packages
    twitter_likes_page_first_package_high_quality = '.e-loop-item-2655 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //twitter High Quality likes Attributes
    //50 High Quality likes
    twitter_likes_page_50_high_quality_likes_amount = '.e-loop-item-2655 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_50_high_quality_likes_price = '.e-loop-item-2655 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100 High Quality likes
    twitter_likes_page_100_high_quality_likes_amount = '.e-loop-item-2656 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_100_high_quality_likes_price = '.e-loop-item-2656 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality likes
    twitter_likes_page_250_high_quality_likes_amount = '.e-loop-item-2657 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_250_high_quality_likes_price = '.e-loop-item-2657 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality likes
    twitter_likes_page_500_high_quality_likes_amount = '.e-loop-item-2658 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_500_high_quality_likes_price = '.e-loop-item-2658 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality likes
    twitter_likes_page_1000_high_quality_likes_amount = '.e-loop-item-2652 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_1000_high_quality_likes_price = '.e-loop-item-2652 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality likes
    twitter_likes_page_2500_high_quality_likes_amount = '.e-loop-item-2653 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_2500_high_quality_likes_price = '.e-loop-item-2653 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality likes
    twitter_likes_page_5000_high_quality_likes_amount = '.e-loop-item-2654 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_likes_page_5000_high_quality_likes_price = '.e-loop-item-2654 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTwitterHighQualityLikesFirstPackage(){
        cy.get(this.twitter_likes_page_first_package_high_quality).click({ force: true })
    }

    checkTwitterHighQualityLikesPackages(){
        //50 High Quality likes
        cy.get(this.twitter_likes_page_50_high_quality_likes_amount).should('contain', '50')
        cy.get(this.twitter_likes_page_50_high_quality_likes_price).should('contain','$2.22')
        //100 High Quality likes
        cy.get(this.twitter_likes_page_100_high_quality_likes_amount).should('contain', '100')
        cy.get(this.twitter_likes_page_100_high_quality_likes_price).should('contain','$4.44')
        //250 High Quality likes
        cy.get(this.twitter_likes_page_250_high_quality_likes_amount).should('contain', '250')
        cy.get(this.twitter_likes_page_250_high_quality_likes_price).should('contain','$8.88')
        //500 High Quality likes
        cy.get(this.twitter_likes_page_500_high_quality_likes_amount).should('contain', '500')
        cy.get(this.twitter_likes_page_500_high_quality_likes_price).should('contain','$14.14')
        //1,000 High Quality likes
        cy.get(this.twitter_likes_page_1000_high_quality_likes_amount).should('contain', '1,000')
        cy.get(this.twitter_likes_page_1000_high_quality_likes_price).should('contain','$23.23')
        //2,500 High Quality likes
        cy.get(this.twitter_likes_page_2500_high_quality_likes_amount).should('contain', '2,500')
        cy.get(this.twitter_likes_page_2500_high_quality_likes_price).should('contain','$49.49')
        //5,000 High Quality likes
        cy.get(this.twitter_likes_page_5000_high_quality_likes_amount).should('contain', '5,000')
        cy.get(this.twitter_likes_page_5000_high_quality_likes_price).should('contain','$68.68')
    }
}