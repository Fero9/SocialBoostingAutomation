Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { YouTubeSubscribersPage } from "./pages/youtube/youtube_subscribers_page"
import { YouTubeLikesPage } from "./pages/youtube/youtube_likes_page"
import { YouTubeViewsPage } from "./pages/youtube/youtube_views_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const youtubeSubscribersPage = new YouTubeSubscribersPage()
const youtubeLikesPage = new YouTubeLikesPage()
const youtubeViewsPage = new YouTubeViewsPage()
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

    context('YouTube Likes Tests', () =>{
        it.only('The user is able to purchase 100 High Quality Likes', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeLikesPage()
            youtubeLikesPage.buyYouTubeHighQualityLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQLK()
            accountInformationPage.enterYTAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsYTHQLK()
            cartSummaryPage.proceedToPaymentYTHQLK()
        })

        it('Verifies that the information on YouTube High Quality Likes packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeLikesPage()
            youtubeLikesPage.checkYouTubeHighQualityLikesPackages()
        })

        it('The user is able to purchase 100 Premium Likes', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeLikesPage()
            youtubeLikesPage.buyYouTubePremiumLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTPRLK()
            accountInformationPage.enterYTAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsYTPRLK()
            cartSummaryPage.proceedToPaymentYTPRLK()
        })

        it('Verifies that the information on YouTube Premium Likes packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeLikesPage()
            youtubeLikesPage.checkYouTubePremiumLikesPackages()
        })
    })

    context('YouTube Views Tests', () =>{
        it.only('The user is able to purchase 500 High Quality Views', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeViewsPage()
            youtubeViewsPage.buyYouTubeHighQualityViewsFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQVW()
            accountInformationPage.enterYTAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsYTHQVW()
            cartSummaryPage.proceedToPaymentYTHQVW()
        })

        it('Verifies that the information on YouTube High Quality Views packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeViewsPage()
            youtubeViewsPage.checkYouTubeHighQualityViewsPackages()
        })
    })
})