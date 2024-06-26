Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"
import { InstagramFollowersPage } from "./pages/instagram/instagram_followers_page"
import { InstagramLikesPage } from "./pages/instagram/instagram_likes_page"
import { InstagramViewsPage } from "./pages/instagram/instagram_views_page"
import { InstagramCommentsPage } from "./pages/instagram/instagram_comments_page"
import { InstagramReelsLikesPage } from "./pages/instagram/instagram_reels_likes_page"
import { InstagramReelsViewsPage } from "./pages/instagram/instagram_reels_views_page"
import { slowCypressDown } from 'cypress-slow-down'

const homePage = new HomePage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()
const instagramFollowersPage = new InstagramFollowersPage()
const instagramLikesPage = new InstagramLikesPage()
const instagramViewsPage = new InstagramViewsPage()
const instagramCommentsPage = new InstagramCommentsPage()
const instagramReelsLikesPage = new InstagramReelsLikesPage()
const instagramReelsViewsPage = new InstagramReelsViewsPage()

describe('Instagram Service Tests', ()=>{
    context.only('Instagram Followers Tests', () =>{
        it('The user is able to purchase 500 High Quality Followers', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.buyInstagramHighQualityFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGHQFL()
            accountInformationPage.enterIGAccountInformation()
            packageAdditionsPage.addPackageAdditionsIGHQFL()
            cartSummaryPage.proceedToPaymentIGHQFL()
        })

        it('The user is able to purchase 500 Premium Followers', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.buyInstagramPremiumFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGPRFL()
            accountInformationPage.enterIGAccountInformation()
            packageAdditionsPage.addPackageAdditionsIGPRFL()
            cartSummaryPage.proceedToPaymentIGPRFL()
        })

        it('Verifies that the information on Instagram High Quality Followers packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.checkInstagramHighQualityFollowersPackages()
        })

        it('Verifies that the information on Instagram Premium Followers packages is correct', ()=>{
            homePage.goToInstagramPage()
            instagramFollowersPage.checkinstagramPremiumFollowersPackages()
        })
    })
    

    context.only('Instagram Likes Tests', ()=>{
        it('The user is able to purchase 250 High Quality Likes', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.buyInstagramHighQualityLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGHQLK()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGHQLK()
            cartSummaryPage.proceedToPaymentIGHQLK()
        })
    
        it('The user is able to purchase 250 Premium Likes', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.buyInstagramPremiumLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGPRLK()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGPRLK()
            cartSummaryPage.proceedToPaymentIGPRLK()
        })

        it('The user is able to purchase 1 Verified Like', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.buyInstagramVerifiedLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGVFLK()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGVFLK()
            cartSummaryPage.proceedToPaymentIGVFLK()
        })
    
        it('Verifies that the information on Instagram High Quality Likes packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.checkInstagramHighQualityLikesPackages()
        })
    
        it('Verifies that the information on Instagram Premium Likes packages is correct', ()=>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.checkInstagramPremiumLikesPackages()
        })

        it('Verifies that the information on Instagram Verified Likes packages is correct', ()=>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramLikesPage()
            instagramLikesPage.checkInstagramVerifiedLikesPackages()
        })
    })
    
    context.only('Instagram Views Tests', ()=>{
        it('The user is able to purchase 1,000 Views', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramViewsPage()
            instagramViewsPage.buyInstagramViewsFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGVW()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGVW()
            cartSummaryPage.proceedToPaymentIGVW()
        })
    
        it('Verifies that the information on Instagram Views packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramViewsPage()
            instagramViewsPage.checkInstagramViewsPackages()
        })
    })
    
    context.only('Instagram Comments Tests', () =>{
        it('The user is able to purchase 5 High Quality Comments', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramCommentsPage()
            instagramCommentsPage.buyInstagramHighQualityCommentsFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGHQCM()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGHQCM()
            cartSummaryPage.proceedToPaymentIGHQCM()
        })
    
        it('The user is able to purchase 5 Premium Comments', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramCommentsPage()
            cy.wait(2000)
            instagramCommentsPage.buyInstagramPremiumCommentsFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGPRCM()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGPRCM()
            cartSummaryPage.proceedToPaymentIGPRCM()
        })

        it('Verifies that the information on Instagram High Quality Comments packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramCommentsPage()
            instagramCommentsPage.checkInstagramHighQualityCommentsPackages()
        })

        it('Verifies that the information on Instagram Premium Comments packages is correct', ()=>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramCommentsPage()
            instagramCommentsPage.buyInstagramPremiumCommentsFirstPackage()
        })
    })

    context('Instagram Reels Likes Tests', ()=>{
        it('The user is able to purchase 250 Reels Likes', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramReelsLikesPage()
            instagramReelsLikesPage.buyInstagramReelsLikesFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGRLLK()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGRLLK()
            cartSummaryPage.proceedToPaymentIGRLLK()
        })
    
        it('Verifies that the information on Instagram Reels Likes packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramReelsLikesPage()
            instagramReelsLikesPage.checkInstagramReelsLikesPackages()
        })
    })

    context('Instagram Reels Views Tests', ()=>{
        it('The user is able to purchase 1000 Reels Views', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramReelsViewsPage()
            instagramReelsViewsPage.buyInstagramReelsViewsFirstPackage()
            accountInformationPage.verifyQtyAndPriceIGRLVW()
            accountInformationPage.enterIGAccountInformation()
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsIGRLVW()
            cartSummaryPage.proceedToPaymentIGRLVW()
        })
    
        it('Verifies that the information on Instagram Reels Views packages is correct', () =>{
            homePage.goToInstagramPage()
            instagramFollowersPage.goToInstagramReelsViewsPage()
            instagramReelsViewsPage.checkInstagramReelsViewsPackages()
        })
    })


})