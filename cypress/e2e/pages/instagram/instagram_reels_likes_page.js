export class InstagramReelsLikesPage{

    instagram_reels_likes_page_heading = '.elementor-element-53361e3 > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_likes_page_paragraph = '.elementor-element-db2e41d > .elementor-widget-container > p'

    //Packages
    instagram_reels_likes_page_first_package = '.e-loop-item-2441 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Instagram reels_likes Attributes
    //250 Reels Likes
    instagram_reels_likes_page_250_reels_likes_amount = '.e-loop-item-2441 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_likes_page_250_reels_likes_price = '.e-loop-item-2441 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 Reels Likes
    instagram_reels_likes_page_500_reels_likes_amount = '.e-loop-item-2442 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_likes_page_500_reels_likes_price = '.e-loop-item-2442 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 Reels Likes
    instagram_reels_likes_page_1000_reels_likes_amount = '.e-loop-item-2449 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_likes_page_1000_reels_likes_price = '.e-loop-item-2449 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 Reels Likes
    instagram_reels_likes_page_1500_reels_likes_amount = '.e-loop-item-2429 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    instagram_reels_likes_page_1500_reels_likes_price = '.e-loop-item-2429 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 reels_likes
    instagram_reels_likes_page_2500_reels_likes_amount = '.e-loop-item-2433 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_likes_page_2500_reels_likes_price = '.e-loop-item-2433 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 reels_likes
    instagram_reels_likes_page_5000_reels_likes_amount = '.e-loop-item-2434 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_likes_page_5000_reels_likes_price = '.e-loop-item-2434 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 reels_likes
    instagram_reels_likes_page_10000_reels_likes_amount = '.e-loop-item-2435 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_likes_page_10000_reels_likes_price = '.e-loop-item-2435 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 reels_likes
    instagram_reels_likes_page_25000_reels_likes_amount = '.e-loop-item-2436 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    instagram_reels_likes_page_25000_reels_likes_price = '.e-loop-item-2436 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi' 

    buyInstagramReelsLikesFirstPackage(){
        cy.get(this.instagram_reels_likes_page_first_package).click({force:true})
        cy.get(".e-loop-item-2441 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-14c3d2f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button").click()
    }

    checkInstagramReelsLikesPackages(){
        //250 reels_likes
        cy.get(this.instagram_reels_likes_page_250_reels_likes_amount).should('contain', '250')
        cy.get(this.instagram_reels_likes_page_250_reels_likes_price).should('contain','$4.59')
        //500 reels_likes
        cy.get(this.instagram_reels_likes_page_500_reels_likes_amount).should('contain', '500')
        cy.get(this.instagram_reels_likes_page_500_reels_likes_price).should('contain','$7.48')
        //1,000 reels_likes
        cy.get(this.instagram_reels_likes_page_1000_reels_likes_amount).should('contain', '1,000')
        cy.get(this.instagram_reels_likes_page_1000_reels_likes_price).should('contain','$14.38')
        //1,500 reels_likes
        cy.get(this.instagram_reels_likes_page_1500_reels_likes_amount).should('contain', '1,500')
        cy.get(this.instagram_reels_likes_page_1500_reels_likes_price).should('contain','$18.40')
        //2,500 reels_likes
        cy.get(this.instagram_reels_likes_page_2500_reels_likes_amount).should('contain', '2,500')
        cy.get(this.instagram_reels_likes_page_2500_reels_likes_price).should('contain','$22.99')
        //5,000 reels_likes
        cy.get(this.instagram_reels_likes_page_5000_reels_likes_amount).should('contain', '5,000')
        cy.get(this.instagram_reels_likes_page_5000_reels_likes_price).should('contain','$34.49')
        //10,000 reels_likes
        cy.get(this.instagram_reels_likes_page_10000_reels_likes_amount).should('contain', '10,000')
        cy.get(this.instagram_reels_likes_page_10000_reels_likes_price).should('contain','$52.89')
        //25,000 reels_likes
        cy.get(this.instagram_reels_likes_page_25000_reels_likes_amount).should('contain', '25,000')
        cy.get(this.instagram_reels_likes_page_25000_reels_likes_price).should('contain','$98.89')
    }
}