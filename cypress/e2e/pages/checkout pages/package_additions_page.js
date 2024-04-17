export class PackageAdditionsPage{
    cart_item_quantity_value = '.form__table-row--item-quantity-value'
    cart_amount = '.cart-amount'

    submit_button = '.form__btn'

    //Upsell Variables
    upsell_amount = 'strong'
    upsell_tiktok_likes_amount = '.cart-upsell-package__container > div > p > strong'
    upsell_price = 'p > b'
    cart_upsell_package = '.cart-upsell-package'
    //Cross-Sell Variables
    cross_sell_quantity = '.cart-cross-package__container > div > p > strong'
    cross_sell_price = '.cart-cross-package > :nth-child(3)'
    cart_cross_sell_package = '.cart-cross-package'

    //TikTok Followers
    addPackageAdditionsTKTHQFL(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '125')
        cy.get(this.upsell_price).should('contain', '$3.85')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '250')
        cy.get(this.cart_amount).should('contain', '$8.50')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '375')
        cy.get(this.cart_amount).should('contain','$12.35')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsTKTPRFL(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '125')
        cy.get(this.upsell_price).should('contain', '$6.50')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '250')
        cy.get(this.cart_amount).should('contain', '$14.50')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '375')
        cy.get(this.cart_amount).should('contain','$21.00')
        //Continue
        cy.get(this.submit_button).click()
    }

    //TikTok Likes
    addPackageAdditionsTKTHQLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_tiktok_likes_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$1.35')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '1,000')
        cy.get(this.cross_sell_price).should('contain', '$4.59')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '250')
        cy.get(this.cart_amount).should('contain', '$8.05')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '300')
        cy.get(this.cart_amount).should('contain','$9.40')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$13.99')
        //Continue
        cy.get(this.submit_button).click()
    }
    
    addPackageAdditionsTKTPRLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$3.20')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '1,000')
        cy.get(this.cross_sell_price).should('contain', '$4.59')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$7.48')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '150')
        cy.get(this.cart_amount).should('contain','$10.68')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$15.27')
        //Continue
        cy.get(this.submit_button).click()
    }

    //TikTok Views
    addPackageAdditionsTKTVW(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '500')
        cy.get(this.upsell_price).should('contain', '$2.00')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '100')
        cy.get(this.cross_sell_price).should('contain', '$3.55')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '1,000')
        cy.get(this.cart_amount).should('contain', '$4.59')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '1,500')
        cy.get(this.cart_amount).should('contain','$6.59')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$10.14')
        //Continue
        cy.get(this.submit_button).click()
    }

    //TikTok Comments
    addPackageAdditionsTKTHQCM(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '5')
        cy.get(this.upsell_price).should('contain', '$2.77')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '100')
        cy.get(this.cross_sell_price).should('contain', '$3.55')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '10')
        cy.get(this.cart_amount).should('contain', '$5.55')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '15')
        cy.get(this.cart_amount).should('contain','$8.32')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$11.87')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsTKTPRCM(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_tiktok_likes_amount).should('contain', '5')
        cy.get(this.upsell_price).should('contain', '$3.25')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '10')
        cy.get(this.cart_amount).should('contain', '$6.70')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '15')
        cy.get(this.cart_amount).should('contain','$9.95')
        //Continue
        cy.get(this.submit_button).click()
    }

    //TikTok Shares
    addPackageAdditionsTKTSHR(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$1.66')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '25')
        cy.get(this.cross_sell_price).should('contain', '$1.11')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$2.54')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '150')
        cy.get(this.cart_amount).should('contain','$4.20')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$5.31')
        //Continue
        cy.get(this.submit_button).click()
    }

    //TikTok Saves
    addPackageAdditionsTKTSV(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '25')
        cy.get(this.upsell_price).should('contain', '$0.99')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '50')
        cy.get(this.cross_sell_price).should('contain', '$1.77')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$2.22')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '125')
        cy.get(this.cart_amount).should('contain','$3.21')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$4.98')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Followers
    addPackageAdditionsIGHQFL(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '250')
        cy.get(this.upsell_price).should('contain', '$4.40')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '500')
        cy.get(this.cart_amount).should('contain', '$9.88')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '750')
        cy.get(this.cart_amount).should('contain','$14.28')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsIGPRFL(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '250')
        cy.get(this.upsell_price).should('contain', '$5.00')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '500')
        cy.get(this.cart_amount).should('contain', '$11.11')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '750')
        cy.get(this.cart_amount).should('contain','$16.11')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Likes
    addPackageAdditionsIGHQLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$1.25')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '1,000')
        cy.get(this.cross_sell_price).should('contain', '$4.03')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$2.88')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '150')
        cy.get(this.cart_amount).should('contain','$4.13')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$8.16')
        //Continue
        cy.get(this.submit_button).click()
    }
    
    addPackageAdditionsIGPRLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$1.90')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '1,000')
        cy.get(this.cross_sell_price).should('contain', '$4.03')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$4.30')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '150')
        cy.get(this.cart_amount).should('contain','$6.20')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$10.23')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsIGVFLK(){
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '1')
        cy.get(this.cart_amount).should('contain', '$5.00')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Views
    addPackageAdditionsIGVW(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '500')
        cy.get(this.upsell_price).should('contain', '$2.20')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '100')
        cy.get(this.cross_sell_price).should('contain', '$2.22')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '1,000')
        cy.get(this.cart_amount).should('contain', '$4.03')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '1,500')
        cy.get(this.cart_amount).should('contain','$6.23')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$8.45')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Comments
    addPackageAdditionsIGHQCM(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '2')
        cy.get(this.upsell_price).should('contain', '$1.11')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '50')
        cy.get(this.cross_sell_price).should('contain', '$1.22')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '5')
        cy.get(this.cart_amount).should('contain', '$2.33')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '7')
        cy.get(this.cart_amount).should('contain','$3.44')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$4.66')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsIGPRCM(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '2')
        cy.get(this.upsell_price).should('contain', '$1.66')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '5')
        cy.get(this.cart_amount).should('contain', '$3.33')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '7')
        cy.get(this.cart_amount).should('contain','$4.99')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Reels Likes
    addPackageAdditionsIGRLLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '50')
        cy.get(this.upsell_price).should('contain', '$1.11')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '1,000')
        cy.get(this.cross_sell_price).should('contain', '$2.88')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$2.88')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '150')
        cy.get(this.cart_amount).should('contain','$3.99')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$6.87')
        //Continue
        cy.get(this.submit_button).click()
    }

    //Instagram Reels Views
    addPackageAdditionsIGRLVW(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '500')
        cy.get(this.upsell_price).should('contain', '$1.22')
        //Verify if the correct crosssell quantity and price are displayed
        cy.get(this.cross_sell_quantity).should('contain', '100')
        cy.get(this.cross_sell_price).should('contain', '$2.88')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '1,000')
        cy.get(this.cart_amount).should('contain', '$2.88')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '1,500')
        cy.get(this.cart_amount).should('contain','$4.10')
        //Add the cross-sell to the cart
        cy.get(this.cart_cross_sell_package).click()
        cy.get(this.cart_amount).should('contain','$6.98')
        //Continue
        cy.get(this.submit_button).click()
    }

    //YouTube Subscribers
    addPackageAdditionsYTHQSB(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '25')
        cy.get(this.upsell_price).should('contain', '$1.65')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$7.48')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '125')
        cy.get(this.cart_amount).should('contain','$9.13')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsYTPRSB(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '25')
        cy.get(this.upsell_price).should('contain', '$1.90')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$8.60')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '125')
        cy.get(this.cart_amount).should('contain','$10.50')
        //Continue
        cy.get(this.submit_button).click()
    }

    //YouTube Likes
    addPackageAdditionsYTHQLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '25')
        cy.get(this.upsell_price).should('contain', '$0.88')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$3.44')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '125')
        cy.get(this.cart_amount).should('contain','$4.32')
        //Continue
        cy.get(this.submit_button).click()
    }

    addPackageAdditionsYTPRLK(){
        //Verify if the correct upsell quantity and price are displayed
        cy.get(this.upsell_amount).should('contain', '25')
        cy.get(this.upsell_price).should('contain', '$0.88')
        //Cart quantity and amount
        cy.get(this.cart_item_quantity_value).should('contain', '100')
        cy.get(this.cart_amount).should('contain', '$4.44')
        //Add the upsell to the cart
        cy.get(this.cart_upsell_package).click()
        cy.get(this.cart_item_quantity_value).should('contain', '125')
        cy.get(this.cart_amount).should('contain','$5.32')
        //Continue
        cy.get(this.submit_button).click()
    }
}