Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { ThreadsFollowersPage } from "./pages/threads/threads_followers_page"
import { ThreadsLikesPage } from "./pages/threads/threads_likes_page"
import { ThreadsRepostsPage } from "./pages/threads/threads_reposts_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const threadsFollowersPage = new ThreadsFollowersPage()
const threadsLikesPage = new ThreadsLikesPage()
const threadsRepostsPage = new ThreadsRepostsPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('Threads Service Tests', ()=>{


    context('Threads Followers Tests', () =>{
        it('The user is able to purchase 100 High Quality Followers', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.buyThreadsHighQualityFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceTHHQFL()
            accountInformationPage.enterTHAccountInformation()
            packageAdditionsPage.addPackageAdditionsTHHQFL()
            cartSummaryPage.proceedToPaymentTHHQFL()
        })

        it('Verifies that the information on Threads High Quality Followers packages is correct', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.checkThreadsHighQualityFollowersPackages()
        })
    })

    context('Threads Likes Tests', () =>{
        it('The user is able to purchase 100 High Quality Likes', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.goToThreadsLikesPage()
            threadsLikesPage.buyThreadsHighQualityLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceTHHQLK()
            accountInformationPage.enterTHAccountInformation()
            postInformationPage.postInformation()
            packageAdditionsPage.addPackageAdditionsTHHQLK()
            cartSummaryPage.proceedToPaymentTHHQLK()
        })

        it('Verifies that the information on Threads High Quality Likes packages is correct', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.goToThreadsLikesPage()
            threadsLikesPage.checkThreadsHighQualityLikesPackages()
        })
    })

    context('Threads Reposts Tests', () =>{
        it('The user is able to purchase 100 High Quality Reposts', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.goToThreadsRepostsPage()
            threadsRepostsPage.buyThreadsHighQualityRepostsFirstPackage()
            accountInformationPage.verifyQtyAndPriceTHHQRP()
            accountInformationPage.enterTHAccountInformation()
            postInformationPage.postInformation()
            packageAdditionsPage.addPackageAdditionsTHHQRP()
            cartSummaryPage.proceedToPaymentTHHQRP()
        })

        it('Verifies that the information on Threads High Quality Reposts packages is correct', () =>{
            homePage.goToThreadsPage()
            threadsFollowersPage.goToThreadsRepostsPage()
            threadsRepostsPage.checkThreadsHighQualityRepostsPackages()
        })
    })
})