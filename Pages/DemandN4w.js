const { test, expect, chromium } = require('@playwright/test');

class DemandN4WValidation {
    constructor(page) {
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            deliveryHCMix: '(//span[contains(text(),"Delivery HC & Mix")])',
            n4wTotal1: "//span[text()='               N4W  :']//following::visual-container[1]//*[@x='0']",
            n4wTotal2: "(//div[@column-index='6'])[22]",
            moreOptions: '(//span[contains(text(),"4 more")])',
            demand: '(//span[contains(text(),"Demand")])',
            dropdownChevronDown1: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            dropdownChevronDown2: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            billable: '(//span[contains(text(),"Billable")])',
            n4wTotal3: '(//following::visual-container[1]//*[@x="0"])[1]',
        };
    }
    getLocator(name) {
        return this.page.locator(this.locators[name]);
    }

    async gotoLoginPage() {
        await this.page.goto(' https://onedatapreprod.tigeranalyticstest.in/reports');

        // Trigger the login action that opens a new window
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

    async validateDemandN4W() {
        let valueList = [];
        
        const handles = await this.page.context().pages();
        for (const page of handles) {
            await page.bringToFront();
        }

        // Wait for 30 seconds
        await this.page.waitForTimeout(3000);

        // Click on Delivery HC & Mix
        await this.page.locator(this.locators.deliveryHCMix).click();
        await this.page.waitForTimeout(2000);

        // Switch to frame
        const frames = this.page.frames();
        await frames[1].waitForSelector(this.locators.n4wTotal1);
        const Demad_N4WTotal1 = await frames[1].locator(this.locators.n4wTotal1).textContent();
        console.log("###### Demad_N4WTotal1 value ", Demad_N4WTotal1);
        valueList.push(Demad_N4WTotal1);

        const Demad_N4WTotal2 = await frames[1].locator(this.locators.n4wTotal2).textContent();
        console.log("###### Demad_N4WTotal2 value ", Demad_N4WTotal2);
        valueList.push(Demad_N4WTotal2);

        await this.page.context().clearCookies();

        // Click on 4 more options and then Demand
        await this.page.locator(this.locators.moreOptions).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.locators.demand).click();

        await this.page.waitForTimeout(2000);

        // Switch to frame again
        await frames[1].waitForSelector(this.locators.n4wTotal3);

        // Click on dropdown chevrons and Billable
        await frames[1].locator(this.locators.dropdownChevronDown1).click();
        await this.page.waitForTimeout(5000);
        // await frames[1].locator(this.locators.dropdownChevronDown2).click();
        // await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.billable).click();
        await this.page.waitForTimeout(3000);
    

        const Demad_N4WTotal3 = await frames[1].locator(this.locators.n4wTotal3).textContent();
        console.log("###### Demad_N4WTotal3 value ", Demad_N4WTotal3);
        valueList.push(Demad_N4WTotal3);

        const valuesEqual = this.areAllValuesEqual(valueList);
        console.log("Values are equal: ", valuesEqual);
        expect(valuesEqual).toBeTruthy();
        
        if (!valuesEqual) {
            throw new Error("Values are not equal");
        }

        // if (!this.areAllValuesEqual(valueList)) {
        //     throw new Error("Values are not equal");
        // }
    }

    areAllValuesEqual(numbers) {
        if (numbers.length < 2) {
            return true;
        }

        const firstValue = String(numbers[0]).trim();

        let max = parseInt(numbers[0]);
        let min = parseInt(numbers[0]);
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = parseInt(numbers[i]);
            }
            if (parseInt(numbers[i]) < min) {
                min = parseInt(numbers[i]);
            }
        }
        if(max-min>=2){
            return false;
        }

        return true;
    }
}

module.exports = { DemandN4WValidation };


