export class TikTokSavesPage{

    tiktok_saves_page_heading = '.elementor-element-78e9986 > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_paragraph = '.elementor-element-fc3902d > .elementor-widget-container > p'

    //Packages
    tiktok_saves_page_first_package = '.e-loop-item-2182 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //TikTok saves Attributes
    //100 saves
    tiktok_saves_page_100_saves_amount = '.e-loop-item-2182 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_100_saves_price = '.e-loop-item-2182 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //150 saves
    tiktok_saves_page_150_saves_amount = '.e-loop-item-2183 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_150_saves_price = '.e-loop-item-2183 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //350 saves
    tiktok_saves_page_350_saves_amount = '.e-loop-item-2184 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_350_saves_price = '.e-loop-item-2184 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 saves
    tiktok_saves_page_500_saves_amount = '.e-loop-item-2185 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_500_saves_price = '.e-loop-item-2185 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 saves
    tiktok_saves_page_1000_saves_amount = '.e-loop-item-2177 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_1000_saves_price = '.e-loop-item-2177 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,500 saves
    tiktok_saves_page_1500_saves_amount = '.e-loop-item-2178 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_1500_saves_price = '.e-loop-item-2178 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,000 saves
    tiktok_saves_page_2000_saves_amount = '.e-loop-item-2179 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_2000_saves_price = '.e-loop-item-2179 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //3,000 saves
    tiktok_saves_page_3000_saves_amount = '.e-loop-item-2180 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_3000_saves_price = '.e-loop-item-2180 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 saves
    tiktok_saves_page_5000_saves_amount = '.e-loop-item-2181 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_saves_page_5000_saves_price = '.e-loop-item-2181 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTikTokSavesFirstPackage(){
        cy.get(this.tiktok_saves_page_first_package).click()
    }

    checkTikTokSavesPackages(){
        //100 saves
        cy.get(this.tiktok_saves_page_100_saves_amount).should('contain', '100')
        cy.get(this.tiktok_saves_page_100_saves_price).should('contain','$2.22')
        //150 saves
        cy.get(this.tiktok_saves_page_150_saves_amount).should('contain', '150')
        cy.get(this.tiktok_saves_page_150_saves_price).should('contain','$3.33')
        //350 saves
        cy.get(this.tiktok_saves_page_350_saves_amount).should('contain', '350')
        cy.get(this.tiktok_saves_page_350_saves_price).should('contain','$4.44')
        //500 saves
        cy.get(this.tiktok_saves_page_500_saves_amount).should('contain', '500')
        cy.get(this.tiktok_saves_page_500_saves_price).should('contain','$5.55')
        //1,000 saves
        cy.get(this.tiktok_saves_page_1000_saves_amount).should('contain', '1,000')
        cy.get(this.tiktok_saves_page_1000_saves_price).should('contain','$9.99')
        //1,500 saves
        cy.get(this.tiktok_saves_page_1500_saves_amount).should('contain', '1,500')
        cy.get(this.tiktok_saves_page_1500_saves_price).should('contain','$11.11')
        //2,000 saves
        cy.get(this.tiktok_saves_page_2000_saves_amount).should('contain', '2,000')
        cy.get(this.tiktok_saves_page_2000_saves_price).should('contain','$15.15')
        //3,000 saves
        cy.get(this.tiktok_saves_page_3000_saves_amount).should('contain', '3,000')
        cy.get(this.tiktok_saves_page_3000_saves_price).should('contain','$22.22')
        //5,000 saves
        cy.get(this.tiktok_saves_page_5000_saves_amount).should('contain', '5,000')
        cy.get(this.tiktok_saves_page_5000_saves_price).should('contain','$30.30')
    }
}