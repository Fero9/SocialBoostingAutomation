Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { YouTubeSubscribersPage } from "./pages/youtube/youtube_subscribers_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const youtubeSubscribersPage = new YouTubeSubscribersPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('YouTube Service Tests', ()=>{

    context('YouTube Subscribers Tests', () =>{
        it('The user is able to purchase 100 High Quality Subscribers', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.buyYouTubeHighQualitySubscribersFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQSB()
            accountInformationPage.enterYTAccountInformation()
            packageAdditionsPage.addPackageAdditionsYTHQSB()
            cartSummaryPage.proceedToPaymentYTHQSB()
        })

        it('Verifies that the information on YouTube High Quality Subscribers packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.checkYouTubeHighQualitySubscribersPackages()
        })

        it('The user is able to purchase 100 Premium Subscribers', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.buyYouTubePremiumSubscribersFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTPRSB()
            accountInformationPage.enterYTAccountInformation()
            packageAdditionsPage.addPackageAdditionsYTPRSB()
            cartSummaryPage.proceedToPaymentYTPRSB()
        })

        it('Verifies that the information on YouTube Premium Subscribers packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.checkYouTubePremiumSubscribersPackages()
        })
    })
})