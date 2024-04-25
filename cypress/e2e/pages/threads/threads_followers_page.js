export class ThreadsFollowersPage{

    threads_followers_page_heading = '.elementor-element-20c6eb5 > .elementor-widget-container > .elementor-heading-title'
    threads_followers_page_paragraph = '.elementor-element-6bbea95 > .elementor-widget-container > p'

    //Packages
    threads_followers_page_first_package_high_quality = '.e-loop-item-2679 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //Services
    threads_followers_page_likes_service = '#menu-1-29e8cf8 > .menu-item-3424 > .elementor-item'
    threads_followers_page_reposts_service = '#menu-1-29e8cf8 > .menu-item-3423 > .elementor-item'

    //threads High Quality followers Attributes
    //100 High Quality followers
    threads_followers_page_100_high_quality_followers_amount = '.e-loop-item-2679 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_100_high_quality_followers_price = '.e-loop-item-2679 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality followers
    threads_followers_page_250_high_quality_followers_amount = '.e-loop-item-2680 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_250_high_quality_followers_price = '.e-loop-item-2680 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality followers
    threads_followers_page_500_high_quality_followers_amount = '.e-loop-item-2681 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_500_high_quality_followers_price = '.e-loop-item-2681 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality followers
    threads_followers_page_1000_high_quality_followers_amount = '.e-loop-item-2682 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_1000_high_quality_followers_price = '.e-loop-item-2682 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 High Quality followers
    threads_followers_page_1500_high_quality_followers_amount = '.e-loop-item-2675 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_1500_high_quality_followers_price = '.e-loop-item-2675 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality followers
    threads_followers_page_2500_high_quality_followers_amount = '.e-loop-item-2676 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_2500_high_quality_followers_price = '.e-loop-item-2676 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //3,500 High Quality followers
    threads_followers_page_3500_high_quality_followers_amount = '.e-loop-item-2677 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_3500_high_quality_followers_price = '.e-loop-item-2677 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality followers
    threads_followers_page_5000_high_quality_followers_amount = '.e-loop-item-2678 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_followers_page_5000_high_quality_followers_price = '.e-loop-item-2678 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyThreadsHighQualityFollowersFirstPackage(){
        cy.get(this.threads_followers_page_first_package_high_quality).click({ force: true })
    }

    checkThreadsHighQualityFollowersPackages(){
        //100 High Quality followers
        cy.get(this.threads_followers_page_100_high_quality_followers_amount).should('contain', '100')
        cy.get(this.threads_followers_page_100_high_quality_followers_price).should('contain','$5.55')
        //250 High Quality followers
        cy.get(this.threads_followers_page_250_high_quality_followers_amount).should('contain', '250')
        cy.get(this.threads_followers_page_250_high_quality_followers_price).should('contain','$9.80')
        //500 High Quality followers
        cy.get(this.threads_followers_page_500_high_quality_followers_amount).should('contain', '500')
        cy.get(this.threads_followers_page_500_high_quality_followers_price).should('contain','$17.17')
        //1,000 High Quality followers
        cy.get(this.threads_followers_page_1000_high_quality_followers_amount).should('contain', '1,000')
        cy.get(this.threads_followers_page_1000_high_quality_followers_price).should('contain','$30.30')
        //1,500 High Quality followers
        cy.get(this.threads_followers_page_1500_high_quality_followers_amount).should('contain', '1,500')
        cy.get(this.threads_followers_page_1500_high_quality_followers_price).should('contain','$49.49')
        //2,500 High Quality followers
        cy.get(this.threads_followers_page_2500_high_quality_followers_amount).should('contain', '2,500')
        cy.get(this.threads_followers_page_2500_high_quality_followers_price).should('contain','$74.74')
        //3,500 High Quality followers
        cy.get(this.threads_followers_page_3500_high_quality_followers_amount).should('contain', '3,500')
        cy.get(this.threads_followers_page_3500_high_quality_followers_price).should('contain','$99.99')
        //5,000 High Quality followers
        cy.get(this.threads_followers_page_5000_high_quality_followers_amount).should('contain', '5,000')
        cy.get(this.threads_followers_page_5000_high_quality_followers_price).should('contain','$115.12')
    }

    goToThreadsLikesPage(){
        cy.get(this.threads_followers_page_likes_service).click({force:true})
    }

    goToThreadsRepostsPage(){
        cy.get(this.threads_followers_page_reposts_service).click({force:true})
    }
}