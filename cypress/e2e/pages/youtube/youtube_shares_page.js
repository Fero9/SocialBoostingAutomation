export class YouTubeSharesPage{

    youtube_shares_page_heading = '.elementor-element-66f998e > .elementor-widget-container > .elementor-heading-title'
    youtube_shares_page_paragraph = '.elementor-element-d5f100b > .elementor-widget-container > p'

    //Packages
    youtube_shares_page_first_package_high_quality = '.e-loop-item-2614 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //youtube High Quality shares Attributes
    //50 High Quality shares
    youtube_shares_page_50_high_quality_shares_amount = '.e-loop-item-2614 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_50_high_quality_shares_price = '.e-loop-item-2614 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //100 High Quality shares
    youtube_shares_page_100_high_quality_shares_amount = '.e-loop-item-2615 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_100_high_quality_shares_price = '.e-loop-item-2615 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality shares
    youtube_shares_page_250_high_quality_shares_amount = '.e-loop-item-2616 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_250_high_quality_shares_price = '.e-loop-item-2616 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality shares
    youtube_shares_page_500_high_quality_shares_amount = '.e-loop-item-2617 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_500_high_quality_shares_price = '.e-loop-item-2617 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //750 High Quality shares
    youtube_shares_page_750_high_quality_shares_amount = '.e-loop-item-2609 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_750_high_quality_shares_price = '.e-loop-item-2609 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality shares
    youtube_shares_page_1000_high_quality_shares_amount = '.e-loop-item-2610 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_1000_high_quality_shares_price = '.e-loop-item-2610 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality shares
    youtube_shares_page_2500_high_quality_shares_amount = '.e-loop-item-2611 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_2500_high_quality_shares_price = '.e-loop-item-2611 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality shares
    youtube_shares_page_5000_high_quality_shares_amount = '.e-loop-item-2612 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_5000_high_quality_shares_price = '.e-loop-item-2612 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality shares
    youtube_shares_page_10000_high_quality_shares_amount = '.e-loop-item-2613 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    youtube_shares_page_10000_high_quality_shares_price = '.e-loop-item-2613 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyYouTubeHighQualitySharesFirstPackage(){
        cy.get(this.youtube_shares_page_first_package_high_quality).click({ force: true })
    }

    checkYouTubeHighQualitySharesPackages(){
        //50 High Quality shares
        cy.get(this.youtube_shares_page_50_high_quality_shares_amount).should('contain', '50')
        cy.get(this.youtube_shares_page_50_high_quality_shares_price).should('contain','$2.22')
        //100 High Quality shares
        cy.get(this.youtube_shares_page_100_high_quality_shares_amount).should('contain', '100')
        cy.get(this.youtube_shares_page_100_high_quality_shares_price).should('contain','$4.44')
        //250 High Quality shares
        cy.get(this.youtube_shares_page_250_high_quality_shares_amount).should('contain', '250')
        cy.get(this.youtube_shares_page_250_high_quality_shares_price).should('contain','$6.66')
        //500 High Quality shares
        cy.get(this.youtube_shares_page_500_high_quality_shares_amount).should('contain', '500')
        cy.get(this.youtube_shares_page_500_high_quality_shares_price).should('contain','$8.88')
        //750 High Quality shares
        cy.get(this.youtube_shares_page_750_high_quality_shares_amount).should('contain', '750')
        cy.get(this.youtube_shares_page_750_high_quality_shares_price).should('contain','$9.99')
        //1,000 High Quality shares
        cy.get(this.youtube_shares_page_1000_high_quality_shares_amount).should('contain', '1,000')
        cy.get(this.youtube_shares_page_1000_high_quality_shares_price).should('contain','$14.14')
        //2,500 High Quality shares
        cy.get(this.youtube_shares_page_2500_high_quality_shares_amount).should('contain', '2,500')
        cy.get(this.youtube_shares_page_2500_high_quality_shares_price).should('contain','$23.23')
        //5,000 High Quality shares
        cy.get(this.youtube_shares_page_5000_high_quality_shares_amount).should('contain', '5,000')
        cy.get(this.youtube_shares_page_5000_high_quality_shares_price).should('contain','$36.36')
        //10,000 High Quality shares
        cy.get(this.youtube_shares_page_10000_high_quality_shares_amount).should('contain', '10,000')
        cy.get(this.youtube_shares_page_10000_high_quality_shares_price).should('contain','$49.49')
    }
}