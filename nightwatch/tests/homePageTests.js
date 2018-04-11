const selectors = require('../test_assets/selectors')
const functions = require('../test_assets/functions')
const data = require('../test_assets/data')

module.exports = {

    after: browser => {
        browser.end()
    },
    // Checks if constant elements are present and that they match the expected text/image. 
    // Data and selectors that often change will be omitted from this test.
    'Basic UI check for constant elements to be present and for text to equal what it should': browser => {
        functions.uiFunc(browser)
    }

}