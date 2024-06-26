export class CartSummaryPage{

    cartSummaryPageSelectedService = '#socialboosting_checkout_cart_type_package'
    cartSummaryPagePackagePrice = '.item-unit-price'
    cartSummaryPageUpsellNameNoCross = '.applied-bump-order-package__name'
    cartSummaryPageUpsellPriceNoCross = '.sale-price'
    cartSummaryPageUpsellNameCross = ':nth-child(2) > .applied-bump-order-package__name'
    cartSummaryPageUpsellPriceCross = ':nth-child(2) > .applied-bump-order-package__pricing > .sale-price'
    cartSummaryPageCrossSellName = ':nth-child(3) > .applied-bump-order-package__name'
    cartSummaryPageCrossSellPrice = ':nth-child(3) > .applied-bump-order-package__pricing > .sale-price'
    cartSummaryPageCrossSellNameTwo = ':nth-child(4) > .applied-bump-order-package__name'
    cartSummaryPageCrossSellPriceTwo = ':nth-child(4) > .applied-bump-order-package__pricing > .sale-price'
    cartSummaryPageCartTotal = '.cart-amount'
    cartSummaryPageSubmitButton = '#proceed-to-payment > .form__btn'

    //TikTok Cart Total
    cartTotalTKTHQFL = '$12.35'
    cartTotalTKTPRFL = '$21.00'

    cartTotalTKTHQLK = '$14.39'
    cartTotalTKTPRLK = '$22.04'

    cartTotalTKTVW = '$10.54'

    cartTotalTKTHQCM = '$11.60'
    cartTotalTKTPRCM = '$9.95'

    cartTotalTKTSHR = '$5.31'

    cartTotalTKTSV = '$4.98'

    //Instagram Cart Total
    cartTotalIGHQFL = '$14.28'
    cartTotalIGPRFL = '$16.11'

    cartTotalIGHQLK = '$13.60'
    cartTotalIGPRLK = '$16.82'
    cartTotalIGVFLK = '$5.00'

    //Instagram Views
    cartTotalIGVW = "$8.00"

    //Instagram Comments
    cartTotalIGHQCM = "$5.32"
    cartTotalIGPRCM = "$5.65"

    //Instagram Reels Likes
    cartTotalIGRLLK = "$12.54"

    //Instagram Reels Views
    cartTotalIGRLVW = "$6.98"

    //YouTube Subs Cart Total
    cartTotalYTHQSB = '$9.13'
    cartTotalYTPRSB = '$10.50'

    //YouTube Likes Cart Total
    cartTotalYTHQLK = '$9.17'
    cartTotalYTPRLK = '$10.43'

    //YouTube Views Cart Total
    cartTotalYTHQVW = '6.74'

    //YouTube Comments Cart Total
    cartTotalYTHQCM = '4.44' 

    //YouTube Shares Cart Total
    cartTotalYTHQSH = '3.55'

    //Spotify Followers Cart Total
    cartTotalSPHQFL = '7.99'

    //Spotify Plays Cart Total
    cartTotalSPHQPL = '4.09'

    //Spotify Plays Cart Total
    cartTotalSPHQLS = '17.39'

    //SoundCloud Followers Cart Total
    cartTotalSCHQFL = '2.72'

    //SoundCloud Likes Cart Total
    cartTotalSCHQLK = '4.99'

    //SoundCloud Plays Cart Total
    cartTotalSCHQPL = '9.08'

    //Threads Followers Cart Total
    cartTotalTHHQFL = '7.05'

    //Threads Likes Cart Total
    cartTotalTHHQLK = '8.83'

    //Threads Reposts Cart Total
    cartTotalTHHQRP = '7.77'

    //Twitter Followers Cart Total
    cartTotalTTHQFL = '10.48'

    //Twitter Likes Cart Total
    cartTotalTTHQLK = '3.22'

    //Twitter Views Cart Total
    cartTotalTTHQVW = '3.88'

    //Twitter Retweets Cart Total
    cartTotalTTHQRT = '2.88'


    //TikTok Followers
    proceedToPaymentTKTHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.50')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$3.85')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$14.50')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$6.50')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Likes
    proceedToPaymentTKTHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.05')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '50')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.35')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '1,000')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$4.99')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$11.49')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$6.00')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '1,500')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$4.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Views
    proceedToPaymentTKTVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.99')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '500')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.00')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$3.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Comments
    proceedToPaymentTKTHQCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '10')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.55')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '5')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.50')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$3.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTHQCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentTKTPRCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '10')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$6.70')
        cy.get(this.cartSummaryPageUpsellNameNoCross).should('contain', '5')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$3.25')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTPRCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Shares
    proceedToPaymentTKTSHR(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.54')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain', '50')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$1.66')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '25')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTSHR)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //TikTok Saves
    proceedToPaymentTKTSV(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain', '25')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$0.99')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '50')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.77')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTKTSV)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Followers
    proceedToPaymentIGHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '500')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$9.88')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$4.40')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '500')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$11.11')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$5.00')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGPRFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Likes
    proceedToPaymentIGHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.59')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.35')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '2,500')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$6.66')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$6.61')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$3.55')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '2,500')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$6.66')
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
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '500')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.75')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$2.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Comments
    proceedToPaymentIGHQCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '5')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.99')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '2')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain', '50')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain', '$1.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGHQCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentIGPRCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '5')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.99')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '2')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$1.66')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGPRCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Reels Likes
    proceedToPaymentIGRLLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.59')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain', '100')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$2.40')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '2,500')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$5.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGRLLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Instagram Reels Views
    proceedToPaymentIGRLVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.88')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain', '500')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$1.22')
        cy.get(this.cartSummaryPageCrossSellName).should('contain', '100')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$2.88')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalIGRLVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Subscribers
    proceedToPaymentYTHQSB(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$7.48')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.65')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentYTPRSB(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.60')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.90')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTPRSB)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Likes
    proceedToPaymentYTHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$7.77')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.40')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    proceedToPaymentYTPRLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.88')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTPRLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Views
    proceedToPaymentYTHQVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '500')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.75')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$0.99')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQVW)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Comments
    proceedToPaymentYTHQCM(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '10')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.33')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQCM)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //YouTube Shares
    proceedToPaymentYTHQSH(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '50')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.33')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalYTHQSH)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Spotify Followers
    proceedToPaymentSPHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$6.66')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.33')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSPHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Spotify Plays
    proceedToPaymentSPHQPL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.44')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$0.65')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSPHQPL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Spotify Listeners
    proceedToPaymentSPHQLS(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$14.14')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$3.25')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSPHQLS)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //SoundCloud Followers
    proceedToPaymentSCHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$0.50')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSCHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //SoundCloud Likes
    proceedToPaymentSCHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageCrossSellName).should('contain','25')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$0.55')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain','500')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain','$2.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSCHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //SoundCloud Plays
    proceedToPaymentSCHQPL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$3.33')
        cy.get(this.cartSummaryPageCrossSellName).should('contain','250')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain', '$0.75')
        cy.get(this.cartSummaryPageCrossSellNameTwo).should('contain','250')
        cy.get(this.cartSummaryPageCrossSellPriceTwo).should('contain','$5.00')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalSCHQPL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Threads Followers
    proceedToPaymentTHHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.55')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.50')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTHHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Threads Likes
    proceedToPaymentTHHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$5.50')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain','50')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$2.22')
        cy.get(this.cartSummaryPageCrossSellName).should('contain','25')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain','$1.11')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTHHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Threads Reposts
    proceedToPaymentTHHQRP(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '100')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$4.44')
        cy.get(this.cartSummaryPageUpsellNameCross).should('contain','25')
        cy.get(this.cartSummaryPageUpsellPriceCross).should('contain', '$1.11')
        cy.get(this.cartSummaryPageCrossSellName).should('contain','50')
        cy.get(this.cartSummaryPageCrossSellPrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTHHQRP)
        cy.get(this.cartSummaryPageSubmitButton).click()
    }

    //Twitter Followers
    proceedToPaymentTTHQFL(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '250')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$8.88')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.60')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTTHQFL)
        cy.get(this.cartSummaryPageSubmitButton).click({force:true})
    }

    //Twitter Likes
    proceedToPaymentTTHQLK(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '50')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.00')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTTHQLK)
        cy.get(this.cartSummaryPageSubmitButton).click({force:true})
    }

    

    //Twitter Views
    proceedToPaymentTTHQVW(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '1,000')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.33')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$1.55')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTTHQVW)
        cy.get(this.cartSummaryPageSubmitButton).click({force:true})
    }

    //Twitter Views
    proceedToPaymentTTHQRT(){
        cy.get(this.cartSummaryPageSelectedService).should('contain', '50')
        cy.get(this.cartSummaryPagePackagePrice).should('contain','$2.22')
        cy.get(this.cartSummaryPageUpsellPriceNoCross).should('contain', '$0.66')
        cy.get(this.cartSummaryPageCartTotal).should('contain', this.cartTotalTTHQRT)
        cy.get(this.cartSummaryPageSubmitButton).click({force:true})
    }
}