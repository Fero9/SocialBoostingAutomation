export class ThreadsLikesPage{

    threads_likes_page_heading = '.elementor-element-2f00434 > .elementor-widget-container > .elementor-heading-title'
    threads_likes_page_paragraph = '.elementor-element-8772534 > .elementor-widget-container > p'

    //Packages
    threads_likes_page_first_package_high_quality = '.e-loop-item-2688 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //threads High Quality likes Attributes
    //100 High Quality likes
    threads_likes_page_100_high_quality_likes_amount = '.e-loop-item-2688 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_100_high_quality_likes_price = '.e-loop-item-2688 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality likes
    threads_likes_page_250_high_quality_likes_amount = '.e-loop-item-2689 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_250_high_quality_likes_price = '.e-loop-item-2689 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality likes
    threads_likes_page_500_high_quality_likes_amount = '.e-loop-item-2690 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_500_high_quality_likes_price = '.e-loop-item-2690 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //750 High Quality likes
    threads_likes_page_750_high_quality_likes_amount = '.e-loop-item-2691 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_750_high_quality_likes_price = '.e-loop-item-2691 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality likes
    threads_likes_page_1000_high_quality_likes_amount = '.e-loop-item-2683 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_1000_high_quality_likes_price = '.e-loop-item-2683 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 High Quality likes
    threads_likes_page_1500_high_quality_likes_amount = '.e-loop-item-2684 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_1500_high_quality_likes_price = '.e-loop-item-2684 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality likes
    threads_likes_page_2500_high_quality_likes_amount = '.e-loop-item-2685 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_2500_high_quality_likes_price = '.e-loop-item-2685 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //3,500 High Quality likes
    threads_likes_page_3500_high_quality_likes_amount = '.e-loop-item-2686 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_3500_high_quality_likes_price = '.e-loop-item-2686 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality likes
    threads_likes_page_5000_high_quality_likes_amount = '.e-loop-item-2687 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_likes_page_5000_high_quality_likes_price = '.e-loop-item-2687 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyThreadsHighQualityLikesFirstPackage(){
        cy.get(this.threads_likes_page_first_package_high_quality).click({ force: true })
    }

    checkThreadsHighQualityLikesPackages(){
        //100 High Quality likes
        cy.get(this.threads_likes_page_100_high_quality_likes_amount).should('contain', '100')
        cy.get(this.threads_likes_page_100_high_quality_likes_price).should('contain','$5.50')
        //250 High Quality likes
        cy.get(this.threads_likes_page_250_high_quality_likes_amount).should('contain', '250')
        cy.get(this.threads_likes_page_250_high_quality_likes_price).should('contain','$11.11')
        //500 High Quality likes
        cy.get(this.threads_likes_page_500_high_quality_likes_amount).should('contain', '500')
        cy.get(this.threads_likes_page_500_high_quality_likes_price).should('contain','$21.21')
        //750 High Quality likes
        cy.get(this.threads_likes_page_750_high_quality_likes_amount).should('contain', '750')
        cy.get(this.threads_likes_page_750_high_quality_likes_price).should('contain','$29.29')
        //1,000 High Quality likes
        cy.get(this.threads_likes_page_1000_high_quality_likes_amount).should('contain', '1,000')
        cy.get(this.threads_likes_page_1000_high_quality_likes_price).should('contain','$39.39')
        //1,500 High Quality likes
        cy.get(this.threads_likes_page_1500_high_quality_likes_amount).should('contain', '1,500')
        cy.get(this.threads_likes_page_1500_high_quality_likes_price).should('contain','$50.55')
        //2,500 High Quality likes
        cy.get(this.threads_likes_page_2500_high_quality_likes_amount).should('contain', '2,500')
        cy.get(this.threads_likes_page_2500_high_quality_likes_price).should('contain','$78.78')
        //3,500 High Quality likes
        cy.get(this.threads_likes_page_3500_high_quality_likes_amount).should('contain', '3,500')
        cy.get(this.threads_likes_page_3500_high_quality_likes_price).should('contain','$100.10')
        //5,000 High Quality likes
        cy.get(this.threads_likes_page_5000_high_quality_likes_amount).should('contain', '5,000')
        cy.get(this.threads_likes_page_5000_high_quality_likes_price).should('contain','$125.12')
    }
}