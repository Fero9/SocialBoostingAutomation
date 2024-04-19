export class TikTokSharesPage{

    tiktok_shares_page_heading = '.elementor-element-e11685e > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_paragraph = '.elementor-element-373242b > .elementor-widget-container > p'

    //Packages
    tiktok_shares_page_first_package = '.e-loop-item-2173 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner'

    //TikTok shares Attributes
    //100 shares
    tiktok_shares_page_100_shares_amount = '.e-loop-item-2173 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_100_shares_price = '.e-loop-item-2173 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //350 shares
    tiktok_shares_page_350_shares_amount = '.e-loop-item-2174 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_350_shares_price = '.e-loop-item-2174 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //500 shares
    tiktok_shares_page_500_shares_amount = '.e-loop-item-2175 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_500_shares_price = '.e-loop-item-2175 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //750 shares
    tiktok_shares_page_750_shares_amount = '.e-loop-item-2176 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_750_shares_price = '.e-loop-item-2176 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //1,000 shares
    tiktok_shares_page_1000_shares_amount = '.e-loop-item-2168 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_1000_shares_price = '.e-loop-item-2168 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //2,500 shares
    tiktok_shares_page_2500_shares_amount = '.e-loop-item-2169 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_2500_shares_price = '.e-loop-item-2169 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //5,000 shares
    tiktok_shares_page_5000_shares_amount = '.e-loop-item-2170 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_5000_shares_price = '.e-loop-item-2170 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //10,000 shares
    tiktok_shares_page_10000_shares_amount = '.e-loop-item-2171 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_10000_shares_price = '.e-loop-item-2171 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'
    //25,000 shares
    tiktok_shares_page_25000_shares_amount = '.e-loop-item-2172 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-fb3963d > .elementor-widget-container > .elementor-heading-title'
    tiktok_shares_page_25000_shares_price = '.e-loop-item-2172 > .elementor-section-wrap > .elementor-element-3355098 > .e-con-inner > .elementor-element-161717c > .elementor-widget-container > .elementor-heading-title > .woocommerce-Price-amount > bdi'

    buyTikTokSharesFirstPackage(){
        cy.get(this.tiktok_shares_page_first_package).click({ force: true })
    }

    checkTikTokSharesPackages(){
        //100 shares
        cy.get(this.tiktok_shares_page_100_shares_amount).should('contain', '100')
        cy.get(this.tiktok_shares_page_100_shares_price).should('contain','$2.55')
        //350 shares
        cy.get(this.tiktok_shares_page_350_shares_amount).should('contain', '350')
        cy.get(this.tiktok_shares_page_350_shares_price).should('contain','$4.44')
        //500 shares
        cy.get(this.tiktok_shares_page_500_shares_amount).should('contain', '500')
        cy.get(this.tiktok_shares_page_500_shares_price).should('contain','$5.55')
        //750 shares
        cy.get(this.tiktok_shares_page_750_shares_amount).should('contain', '750')
        cy.get(this.tiktok_shares_page_750_shares_price).should('contain','$7.77')
        //1,000 shares
        cy.get(this.tiktok_shares_page_1000_shares_amount).should('contain', '1,000')
        cy.get(this.tiktok_shares_page_1000_shares_price).should('contain','$9.99')
        //2,500 shares
        cy.get(this.tiktok_shares_page_2500_shares_amount).should('contain', '2,500')
        cy.get(this.tiktok_shares_page_2500_shares_price).should('contain','$16.16')
        //5,000 shares
        cy.get(this.tiktok_shares_page_5000_shares_amount).should('contain', '5,000')
        cy.get(this.tiktok_shares_page_5000_shares_price).should('contain','$29.29')
        //10,000 shares
        cy.get(this.tiktok_shares_page_10000_shares_amount).should('contain', '10,000')
        cy.get(this.tiktok_shares_page_10000_shares_price).should('contain','$48.48')
        //25,000 shares
        cy.get(this.tiktok_shares_page_25000_shares_amount).should('contain', '25,000')
        cy.get(this.tiktok_shares_page_25000_shares_price).should('contain','$90.00')
    }
}