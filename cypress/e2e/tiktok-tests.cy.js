Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { TikTokFollowersPage } from "./pages/tiktok/tiktok_followers_page"
import { TikTokLikesPage } from "./pages/tiktok/tiktok_likes_page"
import { TikTokViewsPage } from "./pages/tiktok/tiktok_views_page"
import { TikTokCommentsPage } from "./pages/tiktok/tiktok_comments_page"
import { TikTokSharesPage } from "./pages/tiktok/tiktok_shares_page"
import { TikTokSavesPage } from "./pages/tiktok/tiktok_saves_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const tiktokFollowersPage = new TikTokFollowersPage()
const tiktokLikesPage = new TikTokLikesPage()
const tiktokViewsPage = new TikTokViewsPage()
const tiktokCommentsPage = new TikTokCommentsPage()
const tiktokSharesPage = new TikTokSharesPage()
const tiktokSavesPage = new TikTokSavesPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('TikTok Service Tests', ()=>{

    context('TikTok Followers Tests', () =>{
        it('The user is able to purchase 250 High Quality Followers', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.buyTikTokHighQualityFollowersFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTHQFL()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            packageAdditionsPage.addPackageAdditionsTKTHQFL()
            cartSummaryPage.proceedToPaymentTKTHQFL()
        })

        it('The user is able to purchase 250 Premium Followers', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.buyTikTokPremiumFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceTKTPRFL()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            packageAdditionsPage.addPackageAdditionsTKTPRFL()
            cartSummaryPage.proceedToPaymentTKTPRFL()
        })

        it('Verifies that the information on TikTok High Quality Followers packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.checkTikTokHighQualityFollowersPackages()
        })

        it('Verifies that the information on TikTok Premium Followers packages is correct', ()=>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.checkTikTokPremiumFollowersPackages()
        })
    })

    context('TikTok Likes Tests', ()=>{
        it('The user is able to purchase 250 High Quality Likes', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokLikesPage()
            tiktokLikesPage.buyTikTokHighQualityLikesFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTHQLK()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTHQLK()
            cartSummaryPage.proceedToPaymentTKTHQLK()
        })
    
        it('The user is able to purchase 100 Premium Likes', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokLikesPage()
            tiktokLikesPage.buyTikTokPremiumLikesFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTPRLK()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTPRLK()
            cartSummaryPage.proceedToPaymentTKTPRLK()
        })
    
        it('Verifies that the information on TikTok High Quality Likes packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokLikesPage()
            tiktokLikesPage.checkTikTokHighQualityLikesPackages()
        })
    
        it('Verifies that the information on TikTok Premium Likes packages is correct', ()=>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokLikesPage()
            tiktokLikesPage.checkTikTokPremiumLikesPackages()
        })
    })
    
    context('TikTok Views Tests', ()=>{
        it('The user is able to purchase 1,000 Views', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokViewsPage()
            tiktokViewsPage.buyTikTokViewsFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTVW()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTVW()
            cartSummaryPage.proceedToPaymentTKTVW()
        })
    
        it('Verifies that the information on TikTok Views packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokViewsPage()
            tiktokViewsPage.checkTikTokViewsPackages()
        })
    })
    
    context('TikTok Comments Tests', () =>{
        it('The user is able to purchase 10 High Quality Comments', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokCommentsPage()
            tiktokCommentsPage.buyTikTokHighQualityCommentsFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTHQCM()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTHQCM()
            cartSummaryPage.proceedToPaymentTKTHQCM()
        })
    
        it('The user is able to purchase 10 Premium Comments', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokCommentsPage()
            tiktokCommentsPage.buyTikTokPremiumCommentsFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTPRCM()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTPRCM()
            cartSummaryPage.proceedToPaymentTKTPRCM()
        })

        it('Verifies that the information on TikTok High Quality Comments packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokCommentsPage()
            tiktokCommentsPage.checkTikTokHighQualityCommentsPackages()
        })

        it('Verifies that the information on TikTok Premium Comments packages is correct', ()=>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokCommentsPage()
            tiktokCommentsPage.checkTikTokPremiumCommentsPackages()
        })
    })

    context('TikTok Shares Tests', ()=>{
        it('The user is able to purchase 100 Shares', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokSharesPage()
            tiktokSharesPage.buyTikTokSharesFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTSHR()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTSHR()
            cartSummaryPage.proceedToPaymentTKTSHR()
        })
    
        it('Verifies that the information on TikTok Shares packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokSharesPage()
            tiktokSharesPage.checkTikTokSharesPackages()
        })
    })

    context('TikTok Saves Tests', ()=>{
        it('The user is able to purchase 100 Saves', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokSavesPage()
            tiktokSavesPage.buyTikTokSavesFirstPackage() 
            accountInformationPage.verifyQtyAndPriceTKTSV()
            accountInformationPage.enterAccountInformation()
            cy.wait(5000)
            postInformationPage.chooseYourVideo()
            packageAdditionsPage.addPackageAdditionsTKTSV()
            cartSummaryPage.proceedToPaymentTKTSV()
        })
    
        it('Verifies that the information on TikTok Shares packages is correct', () =>{
            homePage.goToTikTokPage()
            tiktokFollowersPage.goToTikTokSavesPage()
            tiktokSavesPage.checkTikTokSavesPackages()
        })
    })


})