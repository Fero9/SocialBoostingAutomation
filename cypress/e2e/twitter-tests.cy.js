Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { TwitterFollowersPage } from "./pages/twitter/twitter_followers_page"
import { TwitterLikesPage } from "./pages/twitter/twitter_likes_page"
import { TwitterViewsPage } from "./pages/twitter/twitter_views_page"
import { TwitterRetweetsPage } from "./pages/twitter/twitter_retweets_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const twitterFollowersPage = new TwitterFollowersPage()
const twitterLikesPage = new TwitterLikesPage()
const twitterViewsPage = new TwitterViewsPage()
const twitterRetweetsPage = new TwitterRetweetsPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('Threads Service Tests', ()=>{


    context('Twitter Followers Tests', () =>{
        it('The user is able to purchase 250 High Quality Followers', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.buyTwitterHighQualityFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceTTHQFL()
            accountInformationPage.enterTTAccountInformationNoSearch()
            packageAdditionsPage.addPackageAdditionsTTHQFL()
            cartSummaryPage.proceedToPaymentTTHQFL()
        })

        it('Verifies that the information on Twitter High Quality Followers packages is correct', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.checkTwitterHighQualityFollowersPackages()
        })
    })

    context('Twitter Likes Tests', () =>{
        it('The user is able to purchase 50 High Quality Likes', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterLikesPage()
            twitterLikesPage.buyTwitterHighQualityLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceTTHQLK()
            accountInformationPage.enterTTAccountInformationNoSearch()
            postInformationPage.chooseTheTweet()
            packageAdditionsPage.addPackageAdditionsTTHQLK()
            cartSummaryPage.proceedToPaymentTTHQLK()
        })

        it('Verifies that the information on Twitter High Quality Likes packages is correct', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterLikesPage()
            twitterLikesPage.checkTwitterHighQualityLikesPackages()
        })
    })

    context('Twitter Views Tests', () =>{
        it('The user is able to purchase 1,000 High Quality Views', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterViewsPage()
            twitterViewsPage.buyTwitterHighQualityViewsFirstPackage()
            accountInformationPage.verifyQtyAndPriceTTHQVW()
            accountInformationPage.enterTTAccountInformationNoSearch()
            postInformationPage.chooseTheTweet()
            packageAdditionsPage.addPackageAdditionsTTHQVW()
            cartSummaryPage.proceedToPaymentTTHQVW()
        })

        it('Verifies that the information on Twitter High Quality Views packages is correct', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterViewsPage()
            twitterViewsPage.checkTwitterHighQualityViewsPackages()
        })
    })

    context('Twitter Retweets Tests', () =>{
        it('The user is able to purchase 50 High Quality Retweets', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterRetweetsPage()
            twitterRetweetsPage.buyTwitterHighQualityRetweetsFirstPackage()
            accountInformationPage.verifyQtyAndPriceTTHQRT()
            accountInformationPage.enterTTAccountInformationNoSearch()
            postInformationPage.chooseTheTweet()
            packageAdditionsPage.addPackageAdditionsTTHQRT()
            cartSummaryPage.proceedToPaymentTTHQRT()
        })

        it('Verifies that the information on Twitter High Quality Retweets packages is correct', () =>{
            homePage.goToTwitterPage()
            twitterFollowersPage.goToTwitterRetweetsPage()
            twitterRetweetsPage.checkTwitterHighQualityRetweetsPackages()
        })
    })
})