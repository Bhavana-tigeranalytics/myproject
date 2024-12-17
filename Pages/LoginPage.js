// const { test, expect, chromium } = require('@playwright/test');
// const { time, log } = require('console');

// exports.LoginPage=
// class LoginPage{
//     constructor(page)
// {

//     this.page = page;
//     this.userName = page.locator("input#i0116");
//     this.next = page.locator("input#idSIButton9");
//     this.password = page.locator("input#i0118");
//     this.signin = page.locator("input#idSIButton9");
//     this.anotherway = page.locator("a#signInAnotherWay");
//     this.mobileno = page.locator("//*[contains(text(), 'Text') and contains(text(), '+XX XXXXXXXX55')]");
//     this.verify = page.locator("input#idSubmit_SAOTCC_Continue");
//     this.chat = page.locator('a[href="/chat"]');
//     this.chatbox=page.locator("//span[@class='angular-editor-placeholder']");
//     this.response=page.locator('//*[@id="responseText"]/div/div/div/div/div/p');
//     this.login=page.locator("//span[@class='Login_buttonText__lRdGI']")
//     this.email = page.locator("//div[@class='VV3oRb YZVTmd SmR8'][1]")
//     this.continue=page.locator("//*[contains(text(),'Continue')]")
    

// }

// async gotoLoginPage(){
//     await this.page.goto('https://onedata.tigeranalyticstest.in/reports');
//     await this.page.waitForTimeout(5000);

//     const [loginPage] = await Promise.all([
//         this.page.context().waitForEvent('page'),
//         this.login.click(),
        

//     ]);

//     await loginPage.waitForLoadState('domcontentloaded');
//     await this.email.click();
//     await this.page.waitForTimeout(3000);
//     await this.continue.click();
    
// }

// }
// const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
// //const { firefox } = require('playwright');

// class LoginPage {
//     constructor(page) {
//         this.page = page;
//         this.userName = page.locator("//div[@class='yAlK0b']");
//         this.next = page.locator("//*[contains(text(),'Next')]");
//         this.password = page.locator("//input[@type='password']");
//         this.signin = page.locator("//*[contains(text(),'Continue')]");
//         this.login = page.locator("//span[@class='Login_buttonText__lRdGI']");
//         this.continue=page.locator("//span[@class='VfPpkd-vQzf8d']")
//     }

//     async gotoLoginPage() {
//         await this.page.goto('https://onedata.tigeranalyticstest.in/reports');

//         // Trigger the login action that opens a new window
//         const [loginPage] = await Promise.all([
//             this.page.waitForEvent('popup'), // Wait for the new page event
//             this.login.click() // Trigger the action that opens the new page
//         ]);

//         console.log("Clicked login page window");

//         // Wait for the login page to load
//         await loginPage.waitForLoadState();
//         console.log("Moved to new window");

//         // Interact with the login page
//         await loginPage.locator("//div[@class='yAlK0b']").click();
//         console.log("lohinpage");
//         await this.page.waitForTimeout(2000);
//         await this.continue.click();
//         await this.page.waitForTimeout(3000);
//         console.log("jsjj")

//     }
// }

// module.exports = { LoginPage };
const { chromium } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.login = page.locator("//span[@class='Login_buttonText__lRdGI']");
        this.mail = page.locator("//div[@class='LbOduc']");
        this.continue = page.locator("//*[contains(text(),'Continue')]");
    }

    async gotoLoginPage() {
        await this.page.goto(' https://onedatapreprod.tigeranalyticstest.in/reports');
        await this.page.waitForTimeout(4000);
        
        // Click login and wait for new page to open
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.login.click()
        ]);
        
        // Wait for the new page to load
        await newPage.waitForLoadState('domcontentloaded');
        
        // Interact with the new page
        await newPage.locator("//div[@class='LbOduc']").click();
        await newPage.waitForTimeout(4000);
        await newPage.locator("//*[contains(text(),'Continue')]").click();
        await this.page.waitForTimeout(3000);
 
        // Call the availableValidation method after login steps
    }
};    