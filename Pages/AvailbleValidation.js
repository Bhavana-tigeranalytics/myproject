const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData');

class Availible{
    constructor(page) {
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            overview: "(//span[contains(text(), 'Overview')])[1]",
            deliveryTab:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            overviewAlt: "(//span[contains(text(), 'Overview')])[4]",
            dropdownChevronDown: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            radiobuttonCheckbox: '(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[4]',
            svgScrollableLabel: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[8]',
            dropdownChevronUp: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-up"])[1]',
            dropdownChevronDownAlt: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
            checkboxAlt: '(//*[local-name()="span" and @class="glyphicon checkbox checkboxOutlineContrast"])[1]',
            svgScrollableLabelAlt: '((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[9]',
            pivotTableCell: '(//*[local-name()="div" and @class="pivotTableCellWrap cell-interactive tablixAlignCenter main-cell "])[5]',
            scrollableCellsContainer: '(//*[local-name()="div" and @class="scrollable-cells-container "])[6]',
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

    async AvailableValidation() {
        let valueList = [];
        const handles = await this.page.context().pages();

        for (const page of handles) {
            await this.page.context().setDefaultNavigationTimeout(60000);
            await page.bringToFront();
        }

        // Wait for 30 seconds
        await this.page.waitForTimeout(30000);

        // Click on Overview
        await this.getLocator('overview').click();
        await this.page.waitForTimeout(2000);

        
        
        // Switch to frame
        const frames = this.page.frames();

        await frames[1].locator(this.locators.deliveryTab).click();
        await this.page.waitForTimeout(2000); 

        await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
        const availableTotal1 = await frames[1].locator(this.locators.scrollableCellsContainer).textContent();
        console.log("###### AvailableTotal1 value ");
        console.log(" values1 " + availableTotal1);
        valueList.push(availableTotal1);

        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox).click();
        await this.page.waitForTimeout(6000);
        const availableTotal2 = await frames[1].locator(this.locators.svgScrollableLabel).textContent();
        console.log(" values2 " + availableTotal2);
        valueList.push(availableTotal2);
        console.log("###### AvailableTotal2 value ", availableTotal2);

        await this.page.context().clearCookies();

        await this.getLocator('overviewAlt').click();
        await this.page.waitForTimeout(2000);

        await this.page.waitForTimeout(5000);
        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.checkboxAlt).click();
        await this.page.waitForTimeout(5000);
        await frames[1].locator(this.locators.dropdownChevronUp).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.dropdownChevronDownAlt).click();
        await this.page.waitForTimeout(5000);
        await frames[1].locator(this.locators.radiobuttonCheckbox).click();
        await this.page.waitForTimeout(6000);
        const availableTotal3 = await frames[1].locator(this.locators.pivotTableCell).textContent();
        console.log(" values3 " + availableTotal3);
        valueList.push(availableTotal3);

        const availableTotal4 = await frames[1].locator(this.locators.svgScrollableLabelAlt).textContent();
        console.log(" values4 " + availableTotal4);
        valueList.push(availableTotal4);
        console.log("###### AvailableTotal4 value ", availableTotal4);

        const valuesEqual = this.areAllValuesEqual(valueList);
        console.log("Values are equal: ", valuesEqual);
        expect(valuesEqual).toBeTruthy();

        if (!valuesEqual) {
            throw new Error("Values are not equal");
        }

        // console.log("## valueList  :", valueList);
        // assert(this.areAllValuesEqual(valueList), "Values are equal");
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


        // for (let i = 1; i < arr.length; i++) {
        //     if (String(arr[i]).trim() !== firstValue) {
        //         return false;
        //     }
        // }

        return true;
    }
}
    // areAllValuesEqual(arr) {
    //     // If the array has fewer than 2 elements, they are technically all equal
    //     if (arr.length < 2) {
    //         return true;
    //     }

    //     // Get the first value as the reference
    //     var firstValue = arr[0];

    //     // Iterate through the rest of the array
    //     for (var i = 1; i < arr.length; i++) {
    //         // If any value is different from the first one, return false
    //         if (arr[i] !== firstValue) {
    //             return false;
    //         }
    //     }

    //     // If all values are equal, return true
    //     return true;
    // }
//}

module.exports = { Availible };
