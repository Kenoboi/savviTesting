var savviObjects = {}
var savviData = require('../testAssets/savviData')

module.exports = {
    beforeEach: browser => {
        savviObjects = browser.page.savviPageObjects()
        savviObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Logging in the Website': browser =>{
        savviObjects.testLogin("Napnek@gmail.com","Origami18!")
    },

    // 'Adding a Folder in File Cabinet': browser =>{
    //     savviObjects.testingFileCabinetAdd("Hello World!")
    // },

    'Adding a Folder in File Cabinet': browser =>{
        savviData.entryNames.forEach((entryNames, index) => {
            savviObjects.testingFileCabinetAdd(savviData.entryNames[index])
        })
    },

    'Deleting a Folder in File Cabinet': browser =>{
        savviData.entryNames.forEach((entryNames, index) => {
            savviObjects.testingFileCabinetDelete(savviData.entryNames[index])
        })
    },
}