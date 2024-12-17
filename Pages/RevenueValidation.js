const { test, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData');

class RevenueValidation {
    constructor(page) {
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            overview: "(//span[contains(text(), 'Overview')])[3]",
            portfolioview:"(//span[contains(text(), 'Portfolio View')])",
            dropdownChevron: "(//*[local-name()='i' and @class='dropdown-chevron powervisuals-glyph chevron-down'])[1]",
            radioButton: "(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[2]",
            frameCard: "(//*[local-name()='svg' and @class='card'][1])[4]",
            revenueTotal2: '//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[7]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/div[3]',
            clickLinkToFollow: "(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            svgScrollableLabel: "((//*[local-name()='svg' and @class='svgScrollable'])[3]//*[name()='text' and @class='label'])[6]",
            MonthlyReport:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            frameCard2:"(//*[local-name()='svg' and @class='card'][1])[4]",
            revenueTotal5:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[11]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[1]/div[3]/div/div[1]',
            more:"(// span[contains(text(), '2 more')])[2]",
            industry:"// span[contains(text(), 'Industry Segment Insights')]",
            revenueTotal6:"((//*[local-name()='svg' and @class='svgScrollable'])[1]//*[name()='text' ])[9]"
        
        };  
    }

    getLocator(name) {
        return this.page.locator(this.locators[name]);
    }

    async gotoLoginPage() {
        await this.page.goto(' https://onedatapreprod.tigeranalyticstest.in/reports');

        const [loginPage] = await Promise.all([
            this.page.waitForEvent('popup'), // Wait for the new page event
            this.getLocator('login').click() // Trigger the action that opens the new page
        ]);

        console.log("Clicked login page window");

        // Wait for the login page to load
        await loginPage.waitForLoadState();
        console.log("Moved to new window");

        // Interact with the login page
        await loginPage.locator(this.locators.userName).click();
        await this.page.waitForTimeout(5000);

        // Click on Continue and move to home page
        await loginPage.locator(this.locators.signin).click();
        await this.page.waitForTimeout(15000);
    }

    async validateRevenue() {
        const valueList = [];
        const frames = await this.page.frames();

        await this.page.waitForTimeout(5000);

        await this.getLocator('overview').click();
        console.log("Overview Clicked");

        await this.page.waitForTimeout(10000);

        const frame = frames[1];
        await frame.waitForSelector(this.locators.dropdownChevron);
        await frame.locator(this.locators.dropdownChevron).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(this.locators.radioButton).click();
        await this.page.waitForTimeout(5000);

        const revenueTotal1 = await frame.locator(this.locators.frameCard).textContent();
        const subStringRevenue1 = revenueTotal1.substring(1, 6);
        valueList.push(subStringRevenue1);
        console.log(`Value 1: ${subStringRevenue1}`);

        const revenueTotal2 = await frame.locator(this.locators.revenueTotal2).textContent();
        const removeComma = revenueTotal2.replace(/,/g, '');
        console.log(`Raw Value 2: ${revenueTotal2}`);
        const revenueInt = parseInt(removeComma.substring(1));
        const revenueMillion = (revenueInt / 1000000);
        const revenueRound = revenueMillion.toFixed(2); // Ensure 2 decimal places
        valueList.push(revenueRound);
        console.log(`Value 2: ${revenueRound}`);

        await frame.locator(this.locators.clickLinkToFollow).click();
        await this.page.waitForTimeout(5000);

        const revenueTotal3 = await frame.locator(this.locators.svgScrollableLabel).textContent();
        const subStringRevenue3 = revenueTotal3.substring(1, 6);
        valueList.push(subStringRevenue3);
        console.log(`Value 3: ${subStringRevenue3}`);


        await frames[0].locator(this.locators.portfolioview).click();
        await this.page.waitForTimeout(2000)

        await frames[1].locator(this.locators.MonthlyReport).click();
        await this.page.waitForTimeout(3000);

        const revenueTotal4 = await frame.locator(this.locators.frameCard2).textContent();
        const subStringRevenue2 = revenueTotal4.substring(1, 6);
        valueList.push(subStringRevenue2);
        console.log(`Value 4: ${subStringRevenue2}`);

        const revenueTotal5 = await frame.locator(this.locators.revenueTotal5).textContent();
        const removeCommaval = revenueTotal5.replace(/,/g, '');
        console.log(`Raw Value 5: ${revenueTotal5}`);
        const revenueInteger = parseInt(removeCommaval.substring(1));
        const revenueMillions = (revenueInteger / 1000000);
        const revenueRounded = revenueMillions.toFixed(2); // Ensure 2 decimal places
        valueList.push(revenueRound);
        console.log(`Value 5: ${revenueRounded}`);

        await frames[0].locator(this.locators.more).click();
        await this.page.waitForTimeout(2000);
        await frames[0].locator(this.locators.industry).click();
        await this.page.waitForTimeout(2000)
        const revenueTotal6 = await frames[1].locator(this.locators.revenueTotal6).textContent();
        console.log(" value 6: "+ revenueTotal6);
        valueList.push(revenueTotal6)



        console.log("Final valueList: ", valueList);
        const valuesEqual = this.areAllValuesEqual(valueList);
        console.log("Values are equal: ", valuesEqual);
        expect(valuesEqual).toBeTruthy(); // Asserting the values are equal

        if (!valuesEqual) {
            throw new Error("Values are not equal");
        }
    }

    areAllValuesEqual(arr) {
        if (arr.length < 2) {
            return true;
        }

        const firstValue = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== firstValue) {
                 if (Math.abs((arr[i]) - firstValue) > 1)
                return false;
            }
        }

        return true;
    }
}

module.exports = { RevenueValidation };

