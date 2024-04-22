export class AccountInformationPage{

    checkout_service_qty = '.service-qty'
    checkout_service_price = '.price'
    submit_button = '.form__actions > .form__btn'

    tiktok_checkout_account_information_handle = '#socialboosting_tiktok_checkout_account_information_handle'
    tiktok_checkout_account_information_email = '#socialboosting_tiktok_checkout_account_information_email'
    //tiktok_profile = '[data-sb-identifier="earth"]'

    instagram_checkout_account_information_username = '#socialboosting_instagram_checkout_account_information_username'
    instagram_checkout_account_information_email = '#socialboosting_instagram_checkout_account_information_email'

    //YouTube Account Information
    youtube_checkout_account_information_username = '#youtube_checkout_search'
    youtube_checkout_account_information_email = '#socialboosting_youtube_checkout_account_information_email'
    youtube_channel = '[data-sb-identifier="UCwmZiChSryoWQCZMIQezgTg"]'

    //Spotify Account Information
    spotify_checkout_account_information_username = '#spotify_checkout_search'
    spotify_channel = '[data-sb-identifier="4QQgXkCYTt3BlENzhyNETg"]'
    spotify_checkout_account_information_email = '#socialboosting_spotify_checkout_account_information_email'

    //SoundCloud Account Information
    soundcloud_checkout_account_information_username = '#soundcloud_checkout_search'
    soundcloud_channel = '[data-sb-identifier="galactic-earth"]'
    soundcloud_checkout_account_information_email = '#socialboosting_soundcloud_checkout_account_information_email'

    //TikTok Followers
    verifyQtyAndPriceTKTHQFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 High Quality Followers')
        cy.get(this.checkout_service_price).should('contain', '$8.50')
    }

    verifyQtyAndPriceTKTPRFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 Premium Followers')
        cy.get(this.checkout_service_price).should('contain', '$14.50')
    }

    enterAccountInformation(){
        //Populate the account information
        cy.get(this.tiktok_checkout_account_information_handle).type('earth')
        //cy.get(this.tiktok_profile).first().click({force:true})
        cy.get(this.tiktok_checkout_account_information_email).type('frantisek@socialboosting.com')
        cy.get(this.submit_button).click({force:true})
    }

    //TikTok Likes
    verifyQtyAndPriceTKTHQLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 High Quality Likes')
        cy.get(this.checkout_service_price).should('contain', '$8.05')
    }

    verifyQtyAndPriceTKTPRLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','100 Premium Likes')
        cy.get(this.checkout_service_price).should('contain', '$7.48')
    }

    //TikTok Views
    verifyQtyAndPriceTKTVW(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','1,000 High Quality Views')
        cy.get(this.checkout_service_price).should('contain', '$4.59')
    }

    //TikTok Comments
    verifyQtyAndPriceTKTHQCM(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','10 High Quality Comments')
        cy.get(this.checkout_service_price).should('contain', '$5.55')
    }

    verifyQtyAndPriceTKTPRCM(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','10 Premium Comments')
        cy.get(this.checkout_service_price).should('contain', '$6.70')
    }

    //TikTok Shares
    verifyQtyAndPriceTKTSHR(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','100 High Quality Shares')
        cy.get(this.checkout_service_price).should('contain', '$2.54')
    }

    //TikTok Saves
    verifyQtyAndPriceTKTSV(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','100 High Quality Saves')
        cy.get(this.checkout_service_price).should('contain', '$2.22')
    }

    //Instagram Followers
    verifyQtyAndPriceIGHQFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"500 High Quality Followers")
        cy.get(this.checkout_service_price).should('contain', '$9.88')
    }

    verifyQtyAndPriceIGPRFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','500 Premium Followers')
        cy.get(this.checkout_service_price).should('contain', '$11.11')
    }

    enterIGAccountInformation(){
        //Populate the account information
        cy.get(this.instagram_checkout_account_information_username).type('earth')
        cy.get(this.instagram_checkout_account_information_email).type('frantisek@socialboosting.com')
        cy.get(this.submit_button).click()
    }

    //Instagram Likes
    verifyQtyAndPriceIGHQLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 High Quality Likes')
        cy.get(this.checkout_service_price).should('contain', '$4.59')
    }

    verifyQtyAndPriceIGPRLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 Premium Likes')
        cy.get(this.checkout_service_price).should('contain', '$6.61')
    }

    verifyQtyAndPriceIGVFLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','1 Verified Like')
        cy.get(this.checkout_service_price).should('contain', '$5.00')
    }

    //Instagram Views
    verifyQtyAndPriceIGVW(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','1,000 High Quality Views')
        cy.get(this.checkout_service_price).should('contain', '$4.03')
    }

    //Instagram Comments
    verifyQtyAndPriceIGHQCM(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','5 High Quality Comments')
        cy.get(this.checkout_service_price).should('contain', '$2.33')
    }

    verifyQtyAndPriceIGPRCM(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','5 Premium Comments')
        cy.get(this.checkout_service_price).should('contain', '$3.33')
    }

    //Instagram Reels Likes
    verifyQtyAndPriceIGRLLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 High Quality Reels-Likes')
        cy.get(this.checkout_service_price).should('contain', '$4.59')
    }

    //Instagram Reels Views
    verifyQtyAndPriceIGRLVW(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','1,000 High Quality Reels-Views')
        cy.get(this.checkout_service_price).should('contain', '$2.88')
    }

    //YouTube Subscribers
    verifyQtyAndPriceYTHQSB(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"100 High Quality Subscribers")
        cy.get(this.checkout_service_price).should('contain', '$7.48')
    }

    verifyQtyAndPriceYTPRSB(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','100 Premium Subscribers')
        cy.get(this.checkout_service_price).should('contain', '$8.60')
    }

    enterYTAccountInformation(){
        //Populate the account information
        cy.get(this.youtube_checkout_account_information_username).type('earth')
        cy.get(this.youtube_channel).first().click()
        cy.get(this.youtube_checkout_account_information_email).type('frantisek@socialboosting.com')
        cy.get(this.submit_button).click()
    }

    //YouTube Likes
    verifyQtyAndPriceYTHQLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"250 High Quality Likes")
        cy.get(this.checkout_service_price).should('contain', '$7.77')
    }

    verifyQtyAndPriceYTPRLK(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain','250 Premium Likes')
        cy.get(this.checkout_service_price).should('contain', '$8.88')
    }

    //YouTube Views
    verifyQtyAndPriceYTHQVW(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"500 High Quality Views")
        cy.get(this.checkout_service_price).should('contain', '$5.75')
    }

    //YouTube Comments
    verifyQtyAndPriceYTHQCM(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"10 High Quality Comments")
        cy.get(this.checkout_service_price).should('contain', '$3.33')
    }

    //YouTube Shares
    verifyQtyAndPriceYTHQSH(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"50 High Quality Shares")
        cy.get(this.checkout_service_price).should('contain', '$2.22')
    }

    //Spotify Followers
    verifyQtyAndPriceSPHQFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"250 High Quality Followers")
        cy.get(this.checkout_service_price).should('contain', '$6.66')
    }

    enterSPAccountInformation(){
        //Populate the account information
        cy.get(this.spotify_checkout_account_information_username).type('earth')
        cy.get(this.spotify_channel).first().click()
        cy.get(this.spotify_checkout_account_information_email).type('frantisek@socialboosting.com')
        cy.get(this.submit_button).click()
    }

    //Spotify Plays
    verifyQtyAndPriceSPHQPL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"1,000 High Quality Plays")
        cy.get(this.checkout_service_price).should('contain', '$3.44')
    }

    //Spotify Listeners
    verifyQtyAndPriceSPHQLS(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"1,000 High Quality Listeners")
        cy.get(this.checkout_service_price).should('contain', '$14.14')
    }

    //SoundCloud Followers
    verifyQtyAndPriceSCHQFL(){
        //Verify if the correct quantity and price are displayed
        cy.get(this.checkout_service_qty).should('contain',"100 High Quality Followers")
        cy.get(this.checkout_service_price).should('contain', '$2.22')
    }

    enterSCAccountInformation(){
        //Populate the account information
        cy.get(this.soundcloud_checkout_account_information_username).type('earth')
        cy.get(this.soundcloud_channel).first().click()
        cy.get(this.soundcloud_checkout_account_information_email).type('frantisek@socialboosting.com')
        cy.get(this.submit_button).click()
    }
}