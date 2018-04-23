const data = require('./data')

module.exports = {

    uiFunc: function(browser) {
        let homePage = browser.page.homePage()

        homePage.navigate()

        let titleBar = homePage.section.titleBar

        homePage.expect.section('@titleBar').to.be.visible

        titleBar.assert.visible('@utahGovIcon')
        titleBar.assert.visible('@services')
        titleBar.expect.element('@services').text.to.equal('Services')
        titleBar.assert.visible('@agencies')
        titleBar.expect.element('@agencies').text.to.equal('Agencies')
        titleBar.assert.visible('@searchUtahGov')
        titleBar.expect.element('@searchUtahGov').text.to.equal('Search Utah.gov')
        titleBar.assert.visible('@utahSearchIcon')

        let topTabBar = homePage.section.topTabBar

        homePage.expect.section('@topTabBar').to.be.visible

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

        browser.pause(3500)

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

        topTabBar.moveToElement('@fishingTab', 10, 10)

        browser.pause(3500)

        homePage.assert.visible('@fishingInformation')
        homePage.expect.element('@fishingInformation').text.to.equal('Fishing information')
        homePage.assert.visible('@fishingLicenses')
        homePage.expect.element('@fishingLicenses').text.to.equal('Fishing licenses')
        homePage.assert.visible('@stockingReports')
        homePage.expect.element('@stockingReports').text.to.equal('Stocking reports')
        homePage.assert.visible('@fishingReports')
        homePage.expect.element('@fishingReports').text.to.equal('Fishing reports')
        homePage.assert.visible('@communityFisheries')
        homePage.expect.element('@communityFisheries').text.to.equal('Community fisheries')
        homePage.assert.visible('@blueRibbonFisheries')
        homePage.expect.element('@blueRibbonFisheries').text.to.equal('Blue Ribbon fisheries')
        homePage.assert.visible('@guidebooksAndRulesFishing')
        homePage.expect.element('@guidebooksAndRulesFishing').text.to.equal('Guidebooks & rules')
        homePage.assert.visible('@lawEnforcementFishing')
        homePage.expect.element('@lawEnforcementFishing').text.to.equal('Law enforcement')
        homePage.assert.visible('@wildlifeBoardAndRacFishing')
        homePage.expect.element('@wildlifeBoardAndRacFishing').text.to.equal('Wildlife Board & RAC')
        homePage.assert.visible('@walkInAccessFishing')
        homePage.expect.element('@walkInAccessFishing').text.to.equal('Walk-in Access')

        topTabBar.moveToElement('@huntingTab', 10, 10)

        browser.pause(3500)

        homePage.assert.visible('@huntingInformation')
        homePage.expect.element('@huntingInformation').text.to.equal('Hunting information')
        homePage.assert.visible('@huntingPermits')
        homePage.expect.element('@huntingPermits').text.to.equal('Hunting permits')
        homePage.assert.visible('@guidebooksAndRulesHunting')
        homePage.expect.element('@guidebooksAndRulesHunting').text.to.equal('Guidebooks & rules')
        homePage.assert.visible('@huntPlanner')
        homePage.expect.element('@huntPlanner').text.to.equal('Hunt planner')
        homePage.assert.visible('@dedicatedHunters')
        homePage.expect.element('@dedicatedHunters').text.to.equal('Dedicated hunters')
        homePage.assert.visible('@hunterEducation')
        homePage.expect.element('@hunterEducation').text.to.equal('Hunter education')
        homePage.assert.visible('@huntBoundaryMaps')
        homePage.expect.element('@huntBoundaryMaps').text.to.equal('Hunt boundary maps')
        homePage.assert.visible('@harvestReporting')
        homePage.expect.element('@harvestReporting').text.to.equal('Harvest reporting')
        homePage.assert.visible('@lawEnforcementHunting')
        homePage.expect.element('@lawEnforcementHunting').text.to.equal('Law enforcement')
        homePage.assert.visible('@wildlifeBoardAndRacHunting')
        homePage.expect.element('@wildlifeBoardAndRacHunting').text.to.equal('Wildlife Board & RAC')
        homePage.assert.visible('@walkInAccessHunting')
        homePage.expect.element('@walkInAccessHunting').text.to.equal('Walk-in Access')

        homePage.moveToElement('@huntingInformation', 10, 10)

        browser.pause(3000)

        homePage.assert.visible('@coyotes')
        homePage.expect.element('@coyotes').text.to.equal('Coyotes')


    }
}