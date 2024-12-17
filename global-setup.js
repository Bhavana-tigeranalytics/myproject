const { firefox } = require('@playwright/test'); // Removed test and expect imports
const testData = require('./tests/TestData');

async function globalSetup() {
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const locators = {
        userName: "//input[@id='identifierId']",
        next: "//*[contains(text(),'Next')]",
        password: "//input[@type='password']",
        continue: "//*[contains(text(),'Continue')]",
        login: "//span[@class='Login_buttonText__lRdGI']",
        Authentication: "//*[contains(text(),'Google Authenticator')]"
    };

    const login = async () => {
        await page.goto('https://onedatapreprod.tigeranalyticstest.in/reports');

        // Trigger the login action that opens a new window
        const [loginPage] = await Promise.all([
            context.waitForEvent('page'), // Wait for the new page event
            page.locator(locators.login).click() // Trigger the action that opens the new page
        ]);

        // Wait for the login page to load
        await loginPage.waitForLoadState();
        await loginPage.locator(locators.userName).fill(testData.username);
        await loginPage.locator(locators.next).click();
        await loginPage.locator(locators.password).fill(testData.password);
        await loginPage.locator(locators.next).click();
        await loginPage.locator(locators.Authentication).click();
        await loginPage.waitForTimeout(15000);
        await loginPage.locator(locators.next).click();
        await loginPage.locator(locators.continue).click();
        
        await page.waitForTimeout(5000);
        await context.storageState({ path: "./Auth.json" });  
    };

    // Call the login function
    await login();

    // Clean up: close the browser
    await browser.close(); // Ensure the browser is closed after login
}

module.exports = globalSetup; // Use CommonJS export
