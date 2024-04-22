Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { SoundCloudFollowersPage } from "./pages/soundcloud/soundcloud_followers_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const soundcloudFollowersPage = new SoundCloudFollowersPage()
const accountInformationPage = new AccountInformationPage()
const postInformationPage = new PostInformationPage()
const packageAdditionsPage = new PackageAdditionsPage()
const cartSummaryPage = new CartSummaryPage()

describe('SoundCloud Service Tests', ()=>{


    context('SoundCloud Followers Tests', () =>{
        it('The user is able to purchase 100 High Quality Followers', () =>{
            homePage.goToSoundCloudPage()
            soundcloudFollowersPage.buySoundCloudHighQualityFollowersFirstPackage()
            accountInformationPage.verifyQtyAndPriceSCHQFL()
            accountInformationPage.enterSCAccountInformation()
            packageAdditionsPage.addPackageAdditionsSCHQFL()
            cartSummaryPage.proceedToPaymentSCHQFL()
        })

        it('Verifies that the information on SoundCloud High Quality Followers packages is correct', () =>{
            homePage.goToSoundCloudPage()
            soundcloudFollowersPage.checkSoundCloudHighQualityFollowersPackages()
        })
    })
})