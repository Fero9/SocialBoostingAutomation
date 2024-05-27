export class SoundCloudLikesPage{

    soundcloud_likes_page_heading = '.elementor-element-c9d38d7 > .elementor-widget-container > .elementor-heading-title'
    soundcloud_likes_page_paragraph = '.elementor-element-33a76d3 > .elementor-widget-container > p'

    //Packages
    soundcloud_likes_page_first_package_high_quality = '.e-loop-item-2632 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //soundcloud High Quality likes Attributes
    //100 High Quality likes
    soundcloud_likes_page_100_high_quality_likes_amount = '.e-loop-item-2632 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_100_high_quality_likes_price = '.e-loop-item-2632 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality likes
    soundcloud_likes_page_250_high_quality_likes_amount = '.e-loop-item-2633 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_250_high_quality_likes_price = '.e-loop-item-2633 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality likes
    soundcloud_likes_page_500_high_quality_likes_amount = '.e-loop-item-2634 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_500_high_quality_likes_price = '.e-loop-item-2634 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality likes
    soundcloud_likes_page_1000_high_quality_likes_amount = '.e-loop-item-2635 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_1000_high_quality_likes_price = '.e-loop-item-2635 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 High Quality likes
    soundcloud_likes_page_1500_high_quality_likes_amount = '.e-loop-item-2626 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_1500_high_quality_likes_price = '.e-loop-item-2626 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality likes
    soundcloud_likes_page_2500_high_quality_likes_amount = '.e-loop-item-2628 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_2500_high_quality_likes_price = '.e-loop-item-2628 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality likes
    soundcloud_likes_page_5000_high_quality_likes_amount = '.e-loop-item-2629 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_5000_high_quality_likes_price = '.e-loop-item-2629 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //7,500 High Quality likes
    soundcloud_likes_page_7500_high_quality_likes_amount = '.e-loop-item-2630 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_7500_high_quality_likes_price = '.e-loop-item-2630 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality likes
    soundcloud_likes_page_10000_high_quality_likes_amount = '.e-loop-item-2631 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_likes_page_10000_high_quality_likes_price = '.e-loop-item-2631 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySoundCloudHighQualityLikesFirstPackage(){
        cy.get(this.soundcloud_likes_page_first_package_high_quality).click({ force: true })
    }

    checkSoundCloudHighQualityLikesPackages(){
        //100 High Quality likes
        cy.get(this.soundcloud_likes_page_100_high_quality_likes_amount).should('contain', '100')
        cy.get(this.soundcloud_likes_page_100_high_quality_likes_price).should('contain','$2.22')
        //250 High Quality likes
        cy.get(this.soundcloud_likes_page_250_high_quality_likes_amount).should('contain', '250')
        cy.get(this.soundcloud_likes_page_250_high_quality_likes_price).should('contain','$5.00')
        //500 High Quality likes
        cy.get(this.soundcloud_likes_page_500_high_quality_likes_amount).should('contain', '500')
        cy.get(this.soundcloud_likes_page_500_high_quality_likes_price).should('contain','$8.00')
        //1,000 High Quality likes
        cy.get(this.soundcloud_likes_page_1000_high_quality_likes_amount).should('contain', '1,000')
        cy.get(this.soundcloud_likes_page_1000_high_quality_likes_price).should('contain','$13.00')
        //1,500 High Quality likes
        cy.get(this.soundcloud_likes_page_1500_high_quality_likes_amount).should('contain', '1,500')
        cy.get(this.soundcloud_likes_page_1500_high_quality_likes_price).should('contain','$15.00')
        //2,500 High Quality likes
        cy.get(this.soundcloud_likes_page_2500_high_quality_likes_amount).should('contain', '2,500')
        cy.get(this.soundcloud_likes_page_2500_high_quality_likes_price).should('contain','$18.18')
        //5,000 High Quality likes
        cy.get(this.soundcloud_likes_page_5000_high_quality_likes_amount).should('contain', '5,000')
        cy.get(this.soundcloud_likes_page_5000_high_quality_likes_price).should('contain','$27.00')
        //7,500 High Quality likes
        cy.get(this.soundcloud_likes_page_7500_high_quality_likes_amount).should('contain', '7,500')
        cy.get(this.soundcloud_likes_page_7500_high_quality_likes_price).should('contain','$31.00')
        //10,000 High Quality likes
        cy.get(this.soundcloud_likes_page_10000_high_quality_likes_amount).should('contain', '10,000')
        cy.get(this.soundcloud_likes_page_10000_high_quality_likes_price).should('contain','$36.00')
    }
}