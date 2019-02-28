var savviTests = {

    testLogin: function (email, password) {
        this
            .setValue('@email', email)
            .setValue('@password', password)
            .click('@login')
        this.expect.element('@siteLogo').to.be.present
    },

    testingFileCabinetAdd: function (folderName) {
        this
            .click('@fileCabinet')
            .waitForElementPresent('@fileCabinetAdd', 5000)
            .click('@fileCabinetAdd')
            .waitForElementPresent('@addNewFolder', 5000)
            .click('@addNewFolder')
            .setValue('@newFolderName', folderName)
            .click('@newFolderCreate')
            .useXpath()
        this.expect.element(`//button[text()="${folderName}"]`).to.be.present
    },

    testingFileCabinetDelete: function (folderName) {
        this.useCss()
        this
            .waitForElementVisible('@fileCabinet', 5000)
            .click('@fileCabinet')
            .waitForElementVisible('@fileCabinetAdd', 5000)
        this.useXpath()
            .waitForElementVisible(`//button[text()="${folderName}"]`, 5000)
        this.click(`(//button[text()="${folderName}"]/../../..//span[@class="btn-content"])[1]`)
        this.useCss()
        this.click('@folderDelete')
        this.click('@folderDelete')
        this.useXpath()
            .waitForElementVisible(`//button[text()="${folderName}"]`, 5000)
        this.expect.element(`//button[text()="${folderName}"]`).to.not.be.present
    }
}

module.exports = {
    url: "http://staging.savvi.legal",
    elements: {
        email: 'input[type="email"]',
        password: 'input[type="password"]',
        login: 'button[type="submit"]',
        siteLogo: '.sidebar__logo',
        fileCabinet: {
            selector: '(//span[@class="sidebar-nav__text"])[8]',
            locateStrategy: 'xpath'
        },
        fileCabinetSearch: 'input[type="search"]',
        fileCabinetAdd: {
            selector: '(//button[@type="button"])[3]',
            locateStrategy: 'xpath'
        },
        addUpload: {
            selector: '(//li[@class="menu-item"])[1]',
            locateStrategy: 'xpath'
        },
        addNewFolder: {
            selector: '(//li[@class="menu-item"])[2]',
            locateStrategy: 'xpath'
        },
        newFolderName: 'input[type="text"]',
        newFolderCreate: {
            selector: '//*[text()="Create"]',
            locateStrategy: 'xpath'
        },
        newFolderCancel: {
            selector: '//*[text()="Cancel"]',
            locateStrategy: 'xpath'
        },
        fileCheck: 'div[aria-label="grid"]',
        folderDelete: {
            selector: '//*[text()="Delete"]',
            locateStrategy: 'xpath'
        },
        folderRename: {
            selector: '//*[text()="Rename"]',
            locateStrategy: 'xpath'
        },
        folderNameArrayLength: 'div[class="be-item-name"]',
        buttonArrayLength: 'button[aria-haspopup="true"]',
    },
    commands: [savviTests]
}