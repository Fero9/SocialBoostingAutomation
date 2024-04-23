export class SoundCloudFollowersPage{

    soundcloud_followers_page_heading = '.elementor-element-ea02b0d > .elementor-widget-container > .elementor-heading-title'
    soundcloud_followers_page_paragraph = '.elementor-element-0d7d1f6 > .elementor-widget-container > p'

    //Packages
    soundcloud_followers_page_first_package_high_quality = '.e-loop-item-2622 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Services
    soundcloud_likes_page_likes_service = '#menu-1-ca97ca8 > .menu-item-3334 > .elementor-item'
    soundcloud_plays_page_plays_service = '#menu-1-ca97ca8 > .menu-item-3333 > .elementor-item'

    //soundcloud High Quality followers Attributes
    //100 High Quality followers
    soundcloud_followers_page_100_high_quality_followers_amount = '.e-loop-item-2622 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_100_high_quality_followers_price = '.e-loop-item-2622 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality followers
    soundcloud_followers_page_250_high_quality_followers_amount = '.e-loop-item-2623 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_250_high_quality_followers_price = '.e-loop-item-2623 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality followers
    soundcloud_followers_page_500_high_quality_followers_amount = '.e-loop-item-2624 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_500_high_quality_followers_price = '.e-loop-item-2624 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality followers
    soundcloud_followers_page_1000_high_quality_followers_amount = '.e-loop-item-2625 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_1000_high_quality_followers_price = '.e-loop-item-2625 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 High Quality followers
    soundcloud_followers_page_1500_high_quality_followers_amount = '.e-loop-item-2618 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_1500_high_quality_followers_price = '.e-loop-item-2618 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality followers
    soundcloud_followers_page_2500_high_quality_followers_amount = '.e-loop-item-2619 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_2500_high_quality_followers_price = '.e-loop-item-2619 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality followers
    soundcloud_followers_page_5000_high_quality_followers_amount = '.e-loop-item-2620 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_5000_high_quality_followers_price = '.e-loop-item-2620 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //7,500 High Quality followers
    soundcloud_followers_page_7500_high_quality_followers_amount = '.e-loop-item-2621 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_followers_page_7500_high_quality_followers_price = '.e-loop-item-2621 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySoundCloudHighQualityFollowersFirstPackage(){
        cy.get(this.soundcloud_followers_page_first_package_high_quality).click({ force: true })
    }

    checkSoundCloudHighQualityFollowersPackages(){
        //100 High Quality followers
        cy.get(this.soundcloud_followers_page_100_high_quality_followers_amount).should('contain', '100')
        cy.get(this.soundcloud_followers_page_100_high_quality_followers_price).should('contain','$2.22')
        //250 High Quality followers
        cy.get(this.soundcloud_followers_page_250_high_quality_followers_amount).should('contain', '250')
        cy.get(this.soundcloud_followers_page_250_high_quality_followers_price).should('contain','$5.55')
        //500 High Quality followers
        cy.get(this.soundcloud_followers_page_500_high_quality_followers_amount).should('contain', '500')
        cy.get(this.soundcloud_followers_page_500_high_quality_followers_price).should('contain','$5.66')
        //1,000 High Quality followers
        cy.get(this.soundcloud_followers_page_1000_high_quality_followers_amount).should('contain', '1,000')
        cy.get(this.soundcloud_followers_page_1000_high_quality_followers_price).should('contain','$15.15')
        //1,500 High Quality followers
        cy.get(this.soundcloud_followers_page_1500_high_quality_followers_amount).should('contain', '1,500')
        cy.get(this.soundcloud_followers_page_1500_high_quality_followers_price).should('contain','$20.20')
        //2,500 High Quality followers
        cy.get(this.soundcloud_followers_page_2500_high_quality_followers_amount).should('contain', '2,500')
        cy.get(this.soundcloud_followers_page_2500_high_quality_followers_price).should('contain','$30.30')
        //5,000 High Quality followers
        cy.get(this.soundcloud_followers_page_5000_high_quality_followers_amount).should('contain', '5,000')
        cy.get(this.soundcloud_followers_page_5000_high_quality_followers_price).should('contain','$48.48')
        //7,500 High Quality followers
        cy.get(this.soundcloud_followers_page_7500_high_quality_followers_amount).should('contain', '7,500')
        cy.get(this.soundcloud_followers_page_7500_high_quality_followers_price).should('contain','$64.64')
    }

    goToSoundCloudLikesPage(){
        cy.get(this.soundcloud_likes_page_likes_service).click({force:true})
    }

    goToSoundCloudPlaysPage(){
        cy.get(this.soundcloud_plays_page_plays_service).click({force:true})
    }
}