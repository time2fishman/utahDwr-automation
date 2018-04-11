module.exports = {

    url: 'http://wildlife.utah.gov',
    sections: {
        titleBar: {
            selector: 'div[id="utahgov_statewideheader"]',
            elements: {
                utahGovIcon: {
                    selector: '//*[@id="utahgov_statewideheader_brand"]',
                    locateStrategy: 'xpath'
                },
                services: 'a[title="Services"]',
                agencies: 'a[title="Agencies"]',
                searchUtahGov: 'button[id="utahgov_header_search_button"]',
                utahSearchIcon: 'svg[class="utSearchIcon"]',
            }
        },

        topTabBar: {
            selector: 'div[id="header"]',
            elements: {
                wildlifeHeaderImg: 'img[id="wildlifeheaderimg',
                searchBox: {
                    selector: '(//*[@name="q"])[1]',
                    locateStrategy: 'xpath'
                },
                searchButton: {
                    selector: '(//*[@name="sa"])[1]',
                    locateStrategy: 'xpath'
                },
                homeTab: {
                    selector: '//*[@id="current"]/a/span',
                    locateStrategy: 'xpath'
                },
                newsTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[2]/a/span',
                    locateStrategy: 'xpath'
                },
                fishingTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[3]/a/span',
                    locateStrategy: 'xpath'
                },
                huntingTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[4]/a/span',
                    locateStrategy: 'xpath'
                },
                licensesTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[5]/a/span',
                    locateStrategy: 'xpath'
                },
                calendarTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[6]/a/span',
                    locateStrategy: 'xpath'
                },
                learnMoreTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[7]/a/span',
                    locateStrategy: 'xpath'
                },
                aboutUsTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[8]/a/span',
                    locateStrategy: 'xpath'
                },
                multimediaTab: {
                    selector: '//*[@id="mainnavmenu"]/ul/li[9]/a/span',
                    locateStrategy: 'xpath'
                }

            }
        }
    },

    elements: {
        dwrNewsReleases: {
            selector: '//*[@id="mainnavmenu"]/ul/li[2]/div/ul/li[1]/a/span',
            locateStrategy: 'xpath'
        },
        wildlifeBlog: {
            selector: '//*[@id="mainnavmenu"]/ul/li[2]/div/ul/li[2]/a/span',
            locateStrategy: 'xpath'
        },
        wildlifeNewsletters: {
            selector: '//*[@id="mainnavmenu"]/ul/li[2]/div/ul/li[3]/a/span',
            locateStrategy: 'xpath'
        },
        officersOnPatrol: {
            selector: '//*[@id="mainnavmenu"]/ul/li[2]/div/ul/li[4]/a/span',
            locateStrategy: 'xpath'
        },
        subscribeToNewsUpdates: {
            selector: '//*[@id="mainnavmenu"]/ul/li[2]/div/ul/li[5]/a/span',
            locateStrategy: 'xpath'
        }




    }
}