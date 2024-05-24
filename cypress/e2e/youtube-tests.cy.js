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
import { YouTubeCommentsPage } from "./pages/youtube/youtube_comments_page"
import { YouTubeSharesPage } from "./pages/youtube/youtube_shares_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const youtubeSubscribersPage = new YouTubeSubscribersPage()
const youtubeLikesPage = new YouTubeLikesPage()
const youtubeViewsPage = new YouTubeViewsPage()
const youtubeCommentsPage = new YouTubeCommentsPage()
const youtubeSharesPage = new YouTubeSharesPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('YouTube Service Tests', ()=>{

    context.only('YouTube Subscribers Tests', () =>{
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

    context.only('YouTube Likes Tests', () =>{
        it('The user is able to purchase 100 High Quality Likes', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeLikesPage()
            youtubeLikesPage.buyYouTubeHighQualityLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQLK()
            accountInformationPage.enterYTAccountInformation()
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
        it('The user is able to purchase 500 High Quality Views', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeViewsPage()
            youtubeViewsPage.buyYouTubeHighQualityViewsFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQVW()
            accountInformationPage.enterYTAccountInformation()
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

    context('YouTube Shares Tests', () =>{
        it('The user is able to purchase 50 High Quality Shares', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeSharesPage()
            youtubeSharesPage.buyYouTubeHighQualitySharesFirstPackage()
            accountInformationPage.verifyQtyAndPriceYTHQSH()
            accountInformationPage.enterYTAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsYTHQSH()
            cartSummaryPage.proceedToPaymentYTHQSH()
        })

        it('Verifies that the information on YouTube High Quality Shares packages is correct', () =>{
            homePage.goToYouTubePage()
            youtubeSubscribersPage.goToYouTubeSharesPage()
            youtubeSharesPage.checkYouTubeHighQualitySharesPackages()
        })
    })
})