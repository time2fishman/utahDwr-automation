const data = require('./data')

module.exports = {

    uiFunc: function(browser) {
        let homePage = browser.page.homePage()
        homePage.navigate()
            .expect.section('@titleBar').to.be.visible

        let titleBar = homePage.section.titleBar

        titleBar.assert.visible('@utahGovIcon')
        titleBar.assert.visible('@services')
        titleBar.expect.element('@services').text.to.equal('Services')
        titleBar.assert.visible('@agencies')
        titleBar.expect.element('@agencies').text.to.equal('Agencies')
        titleBar.assert.visible('@searchUtahGov')
        titleBar.expect.element('@searchUtahGov').text.to.equal('Search Utah.gov')
        titleBar.assert.visible('@utahSearchIcon')

        homePage.navigate()
            .expect.section('@topTabBar').to.be.visible

        let topTabBar = homePage.section.topTabBar

        topTabBar.assert.visible('@wildlifeHeaderImg')
        topTabBar.assert.visible('@searchBox')
        topTabBar.expect.element('@searchBox').to.have.value.that.equals('Search Utah Wildlife')
        topTabBar.assert.visible('@searchButton')
        topTabBar.expect.element('@searchButton').to.have.value.that.equals('Search')
        topTabBar.assert.visible('@homeTab')
        topTabBar.expect.element('@homeTab').text.to.equal('Home')
        topTabBar.assert.visible('@newsTab')
        topTabBar.expect.element('@newsTab').text.to.equal('News')
        topTabBar.assert.visible('@fishingTab')
        topTabBar.expect.element('@fishingTab').text.to.equal('Fishing')
        topTabBar.assert.visible('@huntingTab')
        topTabBar.expect.element('@huntingTab').text.to.equal('Hunting')
        topTabBar.assert.visible('@licensesTab')
        topTabBar.expect.element('@licensesTab').text.to.equal('Licenses')
        topTabBar.assert.visible('@calendarTab')
        topTabBar.expect.element('@calendarTab').text.to.equal('Calendar')
        topTabBar.assert.visible('@learnMoreTab')
        topTabBar.expect.element('@learnMoreTab').text.to.equal('Learn more')
        topTabBar.assert.visible('@aboutUsTab')
        topTabBar.expect.element('@aboutUsTab').text.to.equal('About us')
        topTabBar.assert.visible('@multimediaTab')
        topTabBar.expect.element('@multimediaTab').text.to.equal('Multimedia')
        topTabBar.moveToElement('@newsTab', 10, 10)
        browser.pause(2500)
        homePage.assert.visible('@dwrNewsReleases')
        homePage.expect.element('@dwrNewsReleases').text.to.equal('DWR news releases')
        homePage.assert.visible('@wildlifeBlog')
        homePage.expect.element('@wildlifeBlog').text.to.equal('Wildlife blog')
        homePage.assert.visible('@wildlifeNewsletters')
        homePage.expect.element('@wildlifeNewsletters').text.to.equal('Wildlife newsletters')
        homePage.assert.visible('@officersOnPatrol')
        homePage.expect.element('@officersOnPatrol').text.to.equal('Officers on patrol')
        homePage.assert.visible('@subscribeToNewsUpdates')
        homePage.expect.element('@subscribeToNewsUpdates').text.to.equal('Subscribe to news updates')








    }
}