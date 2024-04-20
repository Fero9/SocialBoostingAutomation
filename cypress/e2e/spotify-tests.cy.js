Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { SpotifyFollowersPage } from "./pages/spotify/spotify_followers_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const spotifyFollowersPage = new SpotifyFollowersPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('Spotify Service Tests', ()=>{


    context('Spotify Followers Tests', () =>{
        it('The user is able to purchase 250 High Quality Followers', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.buySpotifyHighQualityFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceSPHQFL()
            accountInformationPage.enterSPAccountInformation()
            packageAdditionsPage.addPackageAdditionsSPHQFL()
            cartSummaryPage.proceedToPaymentSPHQFL()
        })

        it('Verifies that the information on Spotify High Quality Followers packages is correct', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.checkSpotifyHighQualityFollowersPackages()
        })
    })

    /*
    context('YouTube Comments Tests', () =>{
        it('The user is able to purchase 10 High Quality Comments', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeCommentsPage()
            youtubeCommentsPage.buyYouTubeHighQualityCommentsFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQCM()
            accountInformationPage.enterYTAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsYTHQCM()
            cartSummaryPage.proceedToPaymentYTHQCM()
        })

        it('Verifies that the information on YouTube High Quality Comments packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeCommentsPage()
            youtubeCommentsPage.checkYouTubeHighQualityCommentsPackages()
        })
    })
    */
})