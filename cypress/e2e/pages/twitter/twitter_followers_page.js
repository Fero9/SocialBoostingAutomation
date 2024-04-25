export class TwitterFollowersPage{

    twitter_followers_page_heading = '.elementor-element-8bd5c00 > .elementor-widget-container > .elementor-heading-title'
    twitter_followers_page_paragraph = '.elementor-element-9d1719d > .elementor-widget-container > p'

    //Packages
    twitter_followers_page_first_package_high_quality = '.e-loop-item-2649 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Services
    twitter_followers_page_likes_service = '#menu-1-e3d5109 > .menu-item-3363 > .elementor-item'
    twitter_followers_page_views_service = '#menu-1-e3d5109 > .menu-item-3362 > .elementor-item'
    twitter_followers_page_retweets_service = '#menu-1-e3d5109 > .menu-item-3361 > .elementor-item'

    //Twitter High Quality followers Attributes
    //250 High Quality followers
    twitter_followers_page_250_high_quality_followers_amount = '.e-loop-item-2649 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_250_high_quality_followers_price = '.e-loop-item-2649 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality followers
    twitter_followers_page_500_high_quality_followers_amount = '.e-loop-item-2650 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_500_high_quality_followers_price = '.e-loop-item-2650 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality followers
    twitter_followers_page_1000_high_quality_followers_amount = '.e-loop-item-2651 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_1000_high_quality_followers_price = '.e-loop-item-2651 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality followers
    twitter_followers_page_2500_high_quality_followers_amount = '.e-loop-item-2645 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_2500_high_quality_followers_price = '.e-loop-item-2645 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality followers
    twitter_followers_page_5000_high_quality_followers_amount = '.e-loop-item-2646 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_5000_high_quality_followers_price = '.e-loop-item-2646 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality followers
    twitter_followers_page_10000_high_quality_followers_amount = '.e-loop-item-2647 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_followers_page_10000_high_quality_followers_price = '.e-loop-item-2647 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTwitterHighQualityFollowersFirstPackage(){
        cy.get(this.twitter_followers_page_first_package_high_quality).click({ force: true })
    }

    checkTwitterHighQualityFollowersPackages(){
        //250 High Quality followers
        cy.get(this.twitter_followers_page_250_high_quality_followers_amount).should('contain', '250')
        cy.get(this.twitter_followers_page_250_high_quality_followers_price).should('contain','$8.88')
        //500 High Quality followers
        cy.get(this.twitter_followers_page_500_high_quality_followers_amount).should('contain', '500')
        cy.get(this.twitter_followers_page_500_high_quality_followers_price).should('contain','$15.15')
        //1,000 High Quality followers
        cy.get(this.twitter_followers_page_1000_high_quality_followers_amount).should('contain', '1,000')
        cy.get(this.twitter_followers_page_1000_high_quality_followers_price).should('contain','$29.29')
        //2,500 High Quality followers
        cy.get(this.twitter_followers_page_2500_high_quality_followers_amount).should('contain', '2,500')
        cy.get(this.twitter_followers_page_2500_high_quality_followers_price).should('contain','$67.67')
        //5,000 High Quality followers
        cy.get(this.twitter_followers_page_5000_high_quality_followers_amount).should('contain', '5,000')
        cy.get(this.twitter_followers_page_5000_high_quality_followers_price).should('contain','$120.12')
        //10,000 High Quality followers
        cy.get(this.twitter_followers_page_10000_high_quality_followers_amount).should('contain', '10,000')
        cy.get(this.twitter_followers_page_10000_high_quality_followers_price).should('contain','$220.22')
    }

    goToTwitterLikesPage(){
        cy.get(this.twitter_followers_page_likes_service).click({force:true})
    }

    goToTwitterViewsPage(){
        cy.get(this.twitter_followers_page_views_service).click({force:true})
    }

    goToTwitterRetweetsPage(){
        cy.get(this.twitter_followers_page_retweets_service).click({force:true})
    }
}