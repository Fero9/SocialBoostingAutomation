export class CartSummaryPage{

    cartSummaryPageSelectedService = '#socialboosting_checkout_cart_type_package'
    cartSummaryPagePackagePrice = '.item-unit-price'
    cartSummaryPageUpsellName = ':nth-child(2) > .applied-bump-order-package__name'
    cartSummaryPageUpsellPrice = '.applied-bump-order-package__pricing'
    cartSummaryPageCrossSellName = ':nth-child(3) > .applied-bump-order-package__name'
    cartSummaryPageCrossSellPrice = ':nth-child(3) > .applied-bump-order-package__pricing > .sale-price'
    cartSummaryPageCartTotal = '.cart-amount'
    cartSummaryPageSubmitButton = '#proceed-to-payment > .form__btn'

    //TikTok Cart Total
    cartTotalTKTHQFL = '$12.35'
    cartTotalTKTPRFL = '$21.00'

    cartTotalTKTHQLK = '$13.99'
    cartTotalTKTPRLK = '$15.27'

    cartTotalTKTVW = '$10.14'

    cartTotalTKTHQCM = '$11.87'
    cartTotalTKTPRCM = '$9.95'

    cartTotalTKTSHR = '$5.31'

    cartTotalTKTSV = '$4.98'

    //Instagram Cart Total
    cartTotalIGHQFL = '$14.28'
    cartTotalIGPRFL = '$16.11'

    cartTotalIGHQLK = '$8.16'
    cartTotalIGPRLK = '$10.23'
    cartTotalIGVFLK = '$5.00'

    //Instagram Views
    cartTotalIGVW = "$8.45"

    //Instagram Comments
    cartTotalIGHQCM = "$4.66"
    cartTotalIGPRCM = "$4.99"

    //Instagram Reels Likes
    cartTotalIGRLLK = "$6.87"

    //Instagram Reels Views
    cartTotalIGRLVW = "$6.98"

    //YouTube Subs Cart Total
    cartTotalYTHQSB = '$9.13'
    cartTotalYTPRSB = '$10.50'

    //YouTube Likes Cart Total
    cartTotalYTHQSB = '$4.32'
    cartTotalYTPRSB = '$5.32'

    //TikTok Followers
    proceedToPaymentTKTHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$3.85')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$14.50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$6.50')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Likes
    proceedToPaymentTKTHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.05')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.35')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$4.59')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$7.48')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$3.20')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$4.59')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Views
    proceedToPaymentTKTVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.59')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '500')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$2.00')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$3.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Comments
    proceedToPaymentTKTHQCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '10')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.55')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '5')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$2.77')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$3.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '10')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$6.70')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '5')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$3.25')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Shares
    proceedToPaymentTKTSHR(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.54')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.66')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '25')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTSHR)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Saves
    proceedToPaymentTKTSV(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '25')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$0.99')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '50')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.77')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTSV)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Followers
    proceedToPaymentIGHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '500')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$9.88')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$4.40')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '500')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$11.11')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$5.00')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGPRFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Likes
    proceedToPaymentIGHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.88')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.25')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$4.03')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.30')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.90')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$4.03')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGPRLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGVFLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.00')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGVFLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Views
    proceedToPaymentIGVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.03')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '500')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$2.20')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Comments
    proceedToPaymentIGHQCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '5')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.33')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '2')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '50')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '5')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.33')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '2')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.66')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGPRCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Reels Likes
    proceedToPaymentIGRLLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.88')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.88')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGRLLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Reels Views
    proceedToPaymentIGRLVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.88')
        cy.get(this.cartSummaryPageUpsellName).should('contain', '500')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.22')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.88')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGRLVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Subscribers
    proceedToPaymentYTHQSB(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$7.48')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.65')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentYTPRSB(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.60')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$1.90')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTPRSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Likes
    proceedToPaymentYTHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.44')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$0.88')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentYTPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.44')
        cy.get(this.cartSummaryPageUpsellPrice).should('contain', '$0.88')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTPRSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }
}