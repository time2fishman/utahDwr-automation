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
        },
        fishingInformation: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[1]/a/span',
            locateStrategy: 'xpath'
        },
        fishingLicenses: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[2]/a/span',
            locateStrategy: 'xpath'
        },
        stockingReports: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[3]/a/span',
            locateStrategy: 'xpath'
        },
        fishingReports: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[4]/a/span',
            locateStrategy: 'xpath'
        },
        communityFisheries: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[5]/a/span',
            locateStrategy: 'xpath'
        },
        blueRibbonFisheries: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[6]/a/span',
            locateStrategy: 'xpath'
        },
        guidebooksAndRulesFishing: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[7]/a/span',
            locateStrategy: 'xpath'
        },
        lawEnforcementFishing: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[8]/a/span',
            locateStrategy: 'xpath'
        },
        wildlifeBoardAndRacFishing: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[9]/a/span',
            locateStrategy: 'xpath'
        },
        walkInAccessFishing: {
            selector: '//*[@id="mainnavmenu"]/ul/li[3]/div/ul/li[10]/a/span',
            locateStrategy: 'xpath'
        },
        huntingInformation: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[1]/a/span',
            locateStrategy: 'xpath'
        },
        huntingPermits: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[2]/a/span',
            locateStrategy: 'xpath'
        },
        guidebooksAndRulesHunting: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[3]/a/span',
            locateStrategy: 'xpath'
        },
        huntPlanner: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[4]/a/span',
            locateStrategy: 'xpath'
        },
        dedicatedHunters: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[5]/a/span',
            locateStrategy: 'xpath'
        },
        hunterEducation: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[6]/a/span',
            locateStrategy: 'xpath'
        },
        huntBoundaryMaps: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[7]/a/span',
            locateStrategy: 'xpath'
        },
        harvestReporting: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[8]/a/span',
            locateStrategy: 'xpath'
        },
        lawEnforcementHunting: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[9]/a/span',
            locateStrategy: 'xpath'
        },
        wildlifeBoardAndRacHunting: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[10]/a/span',
            locateStrategy: 'xpath'
        },
        walkInAccessHunting: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[11]/a/span',
            locateStrategy: 'xpath'
        },
        coyotes: {
            selector: '//*[@id="mainnavmenu"]/ul/li[4]/div/ul/li[1]/div/ul/li[1]/a/span',
            locateStrategy: 'xpath'
        }




    }
}