Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types = "cypress"/>
import { HomePage } from "./pages/home_page"
import { SpotifyFollowersPage } from "./pages/spotify/spotify_followers_page"
import { SpotifyPlaysPage } from "./pages/spotify/spotify_plays_page"
import { SpotifyListenersPage } from "./pages/spotify/spotify_listeners_page"
import { AccountInformationPage } from "./pages/checkout pages/account_information_page"
import { PostInformationPage } from "./pages/checkout pages/post_information_page"
import { PackageAdditionsPage } from "./pages/checkout pages/package_additions_page"
import { CartSummaryPage } from "./pages/checkout pages/cart_summary_page"

const homePage = new HomePage()
const spotifyFollowersPage = new SpotifyFollowersPage()
const spotifyPlaysPage = new SpotifyPlaysPage()
const spotifyListenersPage = new SpotifyListenersPage()
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

    context('Spotify Plays Tests', () =>{
        it('The user is able to purchase 1,000 High Quality Plays', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.goToSpotifyPlaysPage()
            spotifyPlaysPage.buySpotifyHighQualityPlaysFirstPackage()
            accountInformationPage.verifyQtyAndPriceSPHQPL()
            accountInformationPage.enterSPAccountInformation()
            postInformationPage.chooseYourTrack()
            packageAdditionsPage.addPackageAdditionsSPHQPL()
            cartSummaryPage.proceedToPaymentSPHQPL()
        })

        it('Verifies that the information on Spotify High Quality Plays packages is correct', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.goToSpotifyPlaysPage()
            spotifyPlaysPage.checkSpotifyHighQualityPlaysPackages()
        })
    })

    context('Spotify Listeners Tests', () =>{
        it('The user is able to purchase 1,000 High Quality Listeners', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.goToSpotifyListenersPage()
            spotifyListenersPage.buySpotifyHighQualityListenersFirstPackage()
            accountInformationPage.verifyQtyAndPriceSPHQLS()
            accountInformationPage.enterSPAccountInformation()
            packageAdditionsPage.addPackageAdditionsSPHQLS()
            cartSummaryPage.proceedToPaymentSPHQLS()
        })

        it('Verifies that the information on Spotify High Quality Listeners packages is correct', () =>{
            homePage.goToSpotifyPage()
            spotifyFollowersPage.goToSpotifyListenersPage()
            spotifyListenersPage.checkSpotifyHighQualityListenersPackages()
        })
    })
})