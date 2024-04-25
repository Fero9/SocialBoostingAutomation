export class ThreadsRepostsPage{

    threads_reposts_page_heading = '.elementor-element-e4afb38 > .elementor-widget-container > .elementor-heading-title'
    threads_reposts_page_paragraph = '.elementor-element-d13f221 > .elementor-widget-container > p'

    //Packages
    threads_reposts_page_first_package_high_quality = '.e-loop-item-2697 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //threads High Quality reposts Attributes
    //100 High Quality reposts
    threads_reposts_page_100_high_quality_reposts_amount = '.e-loop-item-2697 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_100_high_quality_reposts_price = '.e-loop-item-2697 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //250 High Quality reposts
    threads_reposts_page_250_high_quality_reposts_amount = '.e-loop-item-2698 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_250_high_quality_reposts_price = '.e-loop-item-2698 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 High Quality reposts
    threads_reposts_page_500_high_quality_reposts_amount = '.e-loop-item-2699 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_500_high_quality_reposts_price = '.e-loop-item-2699 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //750 High Quality reposts
    threads_reposts_page_750_high_quality_reposts_amount = '.e-loop-item-2700 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_750_high_quality_reposts_price = '.e-loop-item-2700 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 High Quality reposts
    threads_reposts_page_1000_high_quality_reposts_amount = '.e-loop-item-2692 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_1000_high_quality_reposts_price = '.e-loop-item-2692 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 High Quality reposts
    threads_reposts_page_2500_high_quality_reposts_amount = '.e-loop-item-2693 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_2500_high_quality_reposts_price = '.e-loop-item-2693 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //3,500 High Quality reposts
    threads_reposts_page_3500_high_quality_reposts_amount = '.e-loop-item-2694 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_3500_high_quality_reposts_price = '.e-loop-item-2694 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 High Quality reposts
    threads_reposts_page_5000_high_quality_reposts_amount = '.e-loop-item-2695 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_5000_high_quality_reposts_price = '.e-loop-item-2695 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //7,500 High Quality reposts
    threads_reposts_page_7500_high_quality_reposts_amount = '.e-loop-item-2696 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title > b'
    threads_reposts_page_7500_high_quality_reposts_price = '.e-loop-item-2696 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyThreadsHighQualityRepostsFirstPackage(){
        cy.get(this.threads_reposts_page_first_package_high_quality).click({ force: true })
    }

    checkThreadsHighQualityRepostsPackages(){
        //100 High Quality reposts
        cy.get(this.threads_reposts_page_100_high_quality_reposts_amount).should('contain', '100')
        cy.get(this.threads_reposts_page_100_high_quality_reposts_price).should('contain','$4.44')
        //250 High Quality reposts
        cy.get(this.threads_reposts_page_250_high_quality_reposts_amount).should('contain', '250')
        cy.get(this.threads_reposts_page_250_high_quality_reposts_price).should('contain','$6.66')
        //500 High Quality reposts
        cy.get(this.threads_reposts_page_500_high_quality_reposts_amount).should('contain', '500')
        cy.get(this.threads_reposts_page_500_high_quality_reposts_price).should('contain','$10.10')
        //750 High Quality reposts
        cy.get(this.threads_reposts_page_750_high_quality_reposts_amount).should('contain', '750')
        cy.get(this.threads_reposts_page_750_high_quality_reposts_price).should('contain','$14.14')
        //1,000 High Quality reposts
        cy.get(this.threads_reposts_page_1000_high_quality_reposts_amount).should('contain', '1,000')
        cy.get(this.threads_reposts_page_1000_high_quality_reposts_price).should('contain','$18.18')
        //2,500 High Quality reposts
        cy.get(this.threads_reposts_page_2500_high_quality_reposts_amount).should('contain', '2,500')
        cy.get(this.threads_reposts_page_2500_high_quality_reposts_price).should('contain','$40.44')
        //3,500 High Quality reposts
        cy.get(this.threads_reposts_page_3500_high_quality_reposts_amount).should('contain', '3,500')
        cy.get(this.threads_reposts_page_3500_high_quality_reposts_price).should('contain','$53.53')
        //5,000 High Quality reposts
        cy.get(this.threads_reposts_page_5000_high_quality_reposts_amount).should('contain', '5,000')
        cy.get(this.threads_reposts_page_5000_high_quality_reposts_price).should('contain','$70.77')
        //7,500 High Quality reposts
        cy.get(this.threads_reposts_page_7500_high_quality_reposts_amount).should('contain', '7,500')
        cy.get(this.threads_reposts_page_7500_high_quality_reposts_price).should('contain','$95.95')
    }
}