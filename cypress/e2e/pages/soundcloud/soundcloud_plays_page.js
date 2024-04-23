export class SoundCloudPlaysPage{

    soundcloud_plays_page_heading = '.elementor-element-42f90a8 > .elementor-widget-container > .elementor-heading-title'
    soundcloud_plays_page_paragraph = '.elementor-element-730b085 > .elementor-widget-container > p'

    //Packages
    soundcloud_plays_page_first_package_high_quality = '.e-loop-item-2642 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //soundcloud High Quality plays Attributes
    //1,000 High Quality plays
    soundcloud_plays_page_1000_high_quality_plays_amount = '.e-loop-item-2642 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_1000_high_quality_plays_price = '.e-loop-item-2642 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality plays
    soundcloud_plays_page_2500_high_quality_plays_amount = '.e-loop-item-2643 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_2500_high_quality_plays_price = '.e-loop-item-2643 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality plays
    soundcloud_plays_page_5000_high_quality_plays_amount = '.e-loop-item-2644 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_5000_high_quality_plays_price = '.e-loop-item-2644 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 High Quality plays
    soundcloud_plays_page_10000_high_quality_plays_amount = '.e-loop-item-2636 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_10000_high_quality_plays_price = '.e-loop-item-2636 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //15,000 High Quality plays
    soundcloud_plays_page_15000_high_quality_plays_amount = '.e-loop-item-2637 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_15000_high_quality_plays_price = '.e-loop-item-2637 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 High Quality plays
    soundcloud_plays_page_25000_high_quality_plays_amount = '.e-loop-item-2638 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_25000_high_quality_plays_price = '.e-loop-item-2638 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //35,000 High Quality plays
    soundcloud_plays_page_35000_high_quality_plays_amount = '.e-loop-item-2639 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_35000_high_quality_plays_price = '.e-loop-item-2639 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //50,000 High Quality plays
    soundcloud_plays_page_50000_high_quality_plays_amount = '.e-loop-item-2640 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    soundcloud_plays_page_50000_high_quality_plays_price = '.e-loop-item-2640 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buySoundCloudHighQualityPlaysFirstPackage(){
        cy.get(this.soundcloud_plays_page_first_package_high_quality).click({ force: true })
    }

    checkSoundCloudHighQualityPlaysPackages(){
        //1,000 High Quality plays
        cy.get(this.soundcloud_plays_page_1000_high_quality_plays_amount).should('contain', '1,000')
        cy.get(this.soundcloud_plays_page_1000_high_quality_plays_price).should('contain','$3.33')
        //2,500 High Quality plays
        cy.get(this.soundcloud_plays_page_2500_high_quality_plays_amount).should('contain', '2,500')
        cy.get(this.soundcloud_plays_page_2500_high_quality_plays_price).should('contain','$5.55')
        //5,000 High Quality plays
        cy.get(this.soundcloud_plays_page_5000_high_quality_plays_amount).should('contain', '5,000')
        cy.get(this.soundcloud_plays_page_5000_high_quality_plays_price).should('contain','$8.88')
        //10,000 High Quality plays
        cy.get(this.soundcloud_plays_page_10000_high_quality_plays_amount).should('contain', '10,000')
        cy.get(this.soundcloud_plays_page_10000_high_quality_plays_price).should('contain','$14.14')
        //15,000 High Quality plays
        cy.get(this.soundcloud_plays_page_15000_high_quality_plays_amount).should('contain', '15,000')
        cy.get(this.soundcloud_plays_page_15000_high_quality_plays_price).should('contain','$16.16')
        //25,000 High Quality plays
        cy.get(this.soundcloud_plays_page_25000_high_quality_plays_amount).should('contain', '25,000')
        cy.get(this.soundcloud_plays_page_25000_high_quality_plays_price).should('contain','$21.21')
        //35,000 High Quality plays
        cy.get(this.soundcloud_plays_page_35000_high_quality_plays_amount).should('contain', '35,000')
        cy.get(this.soundcloud_plays_page_35000_high_quality_plays_price).should('contain','$28.28')
        //50,000 High Quality plays
        cy.get(this.soundcloud_plays_page_50000_high_quality_plays_amount).should('contain', '50,000')
        cy.get(this.soundcloud_plays_page_50000_high_quality_plays_price).should('contain','$35.35')
    }
}