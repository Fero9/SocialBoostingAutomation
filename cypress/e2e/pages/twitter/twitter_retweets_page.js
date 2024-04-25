export class TwitterRetweetsPage{

    twitter_retweets_page_heading = '.elementor-element-018b93a > .elementor-widget-container > .elementor-heading-title'
    twitter_retweets_page_paragraph = '.elementor-element-9039089 > .elementor-widget-container > p'

    //Packages
    twitter_retweets_page_first_package_high_quality = '.e-loop-item-2671 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //twitter High Quality retweets Attributes
    //50 High Quality retweets
    twitter_retweets_page_50_high_quality_retweets_amount = '.e-loop-item-2671 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_50_high_quality_retweets_price = '.e-loop-item-2671 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100 High Quality retweets
    twitter_retweets_page_100_high_quality_retweets_amount = '.e-loop-item-2672 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_100_high_quality_retweets_price = '.e-loop-item-2672 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality retweets
    twitter_retweets_page_250_high_quality_retweets_amount = '.e-loop-item-2673 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_250_high_quality_retweets_price = '.e-loop-item-2673 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality retweets
    twitter_retweets_page_500_high_quality_retweets_amount = '.e-loop-item-2674 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_500_high_quality_retweets_price = '.e-loop-item-2674 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality retweets
    twitter_retweets_page_1000_high_quality_retweets_amount = '.e-loop-item-2668 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_1000_high_quality_retweets_price = '.e-loop-item-2668 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality retweets
    twitter_retweets_page_2500_high_quality_retweets_amount = '.e-loop-item-2669 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_2500_high_quality_retweets_price = '.e-loop-item-2669 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality retweets
    twitter_retweets_page_5000_high_quality_retweets_amount = '.e-loop-item-2670 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    twitter_retweets_page_5000_high_quality_retweets_price = '.e-loop-item-2670 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTwitterHighQualityRetweetsFirstPackage(){
        cy.get(this.twitter_retweets_page_first_package_high_quality).click({ force: true })
    }

    checkTwitterHighQualityRetweetsPackages(){
        //50 High Quality retweets
        cy.get(this.twitter_retweets_page_50_high_quality_retweets_amount).should('contain', '50')
        cy.get(this.twitter_retweets_page_50_high_quality_retweets_price).should('contain','$2.22')
        //100 High Quality retweets
        cy.get(this.twitter_retweets_page_100_high_quality_retweets_amount).should('contain', '100')
        cy.get(this.twitter_retweets_page_100_high_quality_retweets_price).should('contain','$2.77')
        //250 High Quality retweets
        cy.get(this.twitter_retweets_page_250_high_quality_retweets_amount).should('contain', '250')
        cy.get(this.twitter_retweets_page_250_high_quality_retweets_price).should('contain','$5.55')
        //500 High Quality retweets
        cy.get(this.twitter_retweets_page_500_high_quality_retweets_amount).should('contain', '500')
        cy.get(this.twitter_retweets_page_500_high_quality_retweets_price).should('contain','$9.99')
        //1,000 High Quality retweets
        cy.get(this.twitter_retweets_page_1000_high_quality_retweets_amount).should('contain', '1,000')
        cy.get(this.twitter_retweets_page_1000_high_quality_retweets_price).should('contain','$17.17')
        //2,500 High Quality retweets
        cy.get(this.twitter_retweets_page_2500_high_quality_retweets_amount).should('contain', '2,500')
        cy.get(this.twitter_retweets_page_2500_high_quality_retweets_price).should('contain','$42.42')
        //5,000 High Quality retweets
        cy.get(this.twitter_retweets_page_5000_high_quality_retweets_amount).should('contain', '5,000')
        cy.get(this.twitter_retweets_page_5000_high_quality_retweets_price).should('contain','$84.84')
    }
}