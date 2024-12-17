// const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
// const testData = require('../tests/TestData');

// class InvestmentsValidation{
//     constructor(page) {
//         this.page = page;
//         this.locators = {
//             userName: "//div[@class='yAlK0b']",
//             next: "//*[contains(text(),'Next')]",
//             signin: "//*[contains(text(),'Continue')]",
//             login: "//span[@class='Login_buttonText__lRdGI']",
//             overview: "(//span[contains(text(), 'Overview')])[1]",
//             overviewAlt: "(//span[contains(text(), 'Overview')])[4]",
//             dropdownChevronDown: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
//             radiobuttonCheckbox: '(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]',
//             svgScrollableLabel: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[7]',
//             dropdownChevronUp: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-up"])[1]',
//             dropdownChevronDownAlt: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
//             checkboxAlt: '(//*[local-name()="span" and @class="glyphicon checkbox checkboxOutlineContrast"])[1]',
//             svgScrollableLabelAlt: '((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[8]',
//             pivotTableCell: '(//*[local-name()="div" and @class="pivotTableCellWrap cell-interactive tablixAlignCenter main-cell "])[5]',
//             scrollableCellsContainer: '(//*[local-name()="div" and @class="scrollable-cells-container "])[3]',
//         };
//     }

//     getLocator(name) {
//         return this.page.locator(this.locators[name]);
//     }

//     async gotoLoginPage() {
//         await this.page.goto('https://onedata.tigeranalyticstest.in/reports');

//         // Trigger the login action that opens a new window
//         const [loginPage] = await Promise.all([
//             this.page.waitForEvent('popup'), // Wait for the new page event
//             this.getLocator('login').click() // Trigger the action that opens the new page
//         ]);

//         console.log("Clicked login page window");

//         // Wait for the login page to load
//         await loginPage.waitForLoadState();
//         console.log("Moved to new window");

//         // Interact with the login page
//         await loginPage.locator(this.locators.userName).click();
//         await this.page.waitForTimeout(5000);

//         // Click on Continue and move to home page
//         await loginPage.locator(this.locators.signin).click();
//         await this.page.waitForTimeout(15000);
//     }
//     async InvestmentsValidation() {
//         let valueList = [];
//         const handles = await this.page.context().pages();

//         for (const page of handles) {
//             await this.page.context().setDefaultNavigationTimeout(60000);
//             await page.bringToFront();
//         }
//         await driver.sleep(30000); // sleep for 30 seconds
//             const frames = this.page.frames();
//             await driver.findElement(By.xpath('(//span[contains(text(), "Overview")])[1]')).click();
//             await driver.sleep(2000); // sleep for 2 seconds
//             await driver.switchTo().frame(0);
//             await driver.sleep(5000); // sleep for 5 seconds
            
//             let InvestmentsTotal1 = await driver.findElement(By.xpath('(//*[local-name()="div" and @class="scrollable-cells-container "])[3]'));
//             console.log("###### InvestmentsTotal1 value");
//             valueList.push(await InvestmentsTotal1.getText());
            
//             await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]')).click();
//             await driver.sleep(3000); // sleep for 3 seconds
//             await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]')).click();
//             await driver.sleep(5000); // sleep for 5 seconds
            
//             let InvestmentsTotal2 = await driver.findElement(By.xpath('((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[8]'));
//             valueList.push(await InvestmentsTotal2.getText());
//             console.log("###### InvestmentsTotal2 value", InvestmentsTotal2);
            
            // await driver.switchTo().defaultContent();
            // await driver.findElement(By.xpath('(//span[contains(text(), "Delivery Mix DP")])')).click();
            // await driver.sleep(2000); // sleep for 2 seconds
            // await driver.switchTo().frame(0);
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]')).click();
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // let InvestmentsTotal3 = await driver.findElement(By.xpath('(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignCenter main-cell "])[2]'));
            // valueList.push(await InvestmentsTotal3.getText());
            // console.log("###### InvestmentsTotal3 value", InvestmentsTotal3);
            
            // await driver.switchTo().defaultContent();
            // await driver.findElement(By.xpath('(//span[contains(text(), "People Mix")])')).click();
            // await driver.sleep(2000); // sleep for 2 seconds
            // await driver.switchTo().frame(0);
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]')).click();
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // let InvestmentsTotal4 = await driver.findElement(By.xpath('(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignCenter main-cell "])[2]'));
            // valueList.push(await InvestmentsTotal4.getText());
            // console.log("###### InvestmentsTotal4 value", InvestmentsTotal4);
            
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]')).click();
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // let InvestmentsTotal5 = await driver.findElement(By.xpath('((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[8]'));
            // valueList.push(await InvestmentsTotal5.getText());
            // console.log("###### InvestmentsTotal5 value", InvestmentsTotal5);
            
            // await driver.switchTo().defaultContent();
            // await driver.findElement(By.xpath('(//span[contains(text(), "Overview")])[4]')).click();
            // await driver.sleep(2000); // sleep for 2 seconds
            // await driver.switchTo().frame(0);
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon checkbox checkboxOutlineContrast"])[1]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-up"])[1]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            
            // let InvestmentsTotal6 = await driver.findElement(By.xpath('(//*[local-name()="div" and @class="pivotTableCellWrap cell-interactive tablixAlignCenter main-cell "])[2]'));
            // valueList.push(await InvestmentsTotal6.getText());
            // console.log("###### InvestmentsTotal6 value", InvestmentsTotal6);
            
            // await driver.findElement(By.xpath('(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]')).click();
            // await driver.sleep(3000); // sleep for 3 seconds
            // await driver.findElement(By.xpath('(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]')).click();
            // await driver.sleep(5000); // sleep for 5 seconds
            
            // let InvestmentsTotal7 = await driver.findElement(By.xpath('((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[8]'));
            // valueList.push(await InvestmentsTotal7.getText());
            // console.log("###### InvestmentsTotal7 value", InvestmentsTotal7);
            
            
//         if (!check(valueList)) {
//             throw new Error("Values are not equal");
//         }
//     }
//     areAllValuesEqual(arr) {
//         // If the array has fewer than 2 elements, they are technically all equal
//         if (arr.length < 2) {
//             return true;
//         }

//         // Get the first value as the reference
//         var firstValue = arr[0];

//         // Iterate through the rest of the array
//         for (var i = 1; i < arr.length; i++) {
//             // If any value is different from the first one, return false
//             if (arr[i] !== firstValue) {
//                 return false;
//             }
//         }

//         // If all values are equal, return true
//         return true;
//     }
// }

// module.exports = { InvestmentsValidation };
// const { test, expect, chromium } = require('@playwright/test');
// const testData = require('../tests/TestData');

// class InvestmentsValidation {
//     constructor(page) {
//         this.page = page;
//         this.locators = {
//             userName: "//div[@class='yAlK0b']",
//             next: "//*[contains(text(),'Next')]",
//             signin: "//*[contains(text(),'Continue')]",
//             login: "//span[@class='Login_buttonText__lRdGI']",
//             overview: "(//span[contains(text(), 'Overview')])[1]",
//             overviewAlt: "(//span[contains(text(), 'Overview')])[4]",
//             dropdownChevronDown: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
//             radiobuttonCheckbox: '(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]',
//             svgScrollableLabel: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[8]',
//             dropdownChevronUp: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-up"])[1]',
//             dropdownChevronDownAlt: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
//             checkboxAlt: '(//*[local-name()="span" and @class="glyphicon checkbox checkboxOutlineContrast"])[1]',
//             svgScrollableLabelAlt: '((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[8]',
//             pivotTableCell: '(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignCenter main-cell "])[2]',
//             scrollableCellsContainer: '(//*[local-name()="div" and @class="scrollable-cells-container "])[3]',
//         };
//     }

//     getLocator(name) {
//         return this.page.locator(this.locators[name]);
//     }

//     async gotoLoginPage() {
//         await this.page.goto('https://onedata.tigeranalyticstest.in/reports');

//         // Trigger the login action that opens a new window
//         const [loginPage] = await Promise.all([
//             this.page.waitForEvent('popup'), // Wait for the new page event
//             this.getLocator('login').click() // Trigger the action that opens the new page
//         ]);

//         console.log("Clicked login page window");

//         // Wait for the login page to load
//         await loginPage.waitForLoadState();
//         console.log("Moved to new window");

//         // Interact with the login page
//         await loginPage.locator(this.locators.userName).click();
//         await this.page.waitForTimeout(5000);

//         // Click on Continue and move to home page
//         await loginPage.locator(this.locators.signin).click();
//         await this.page.waitForTimeout(15000);
//     }

//     async InvestmentsValidation() {
//         let valueList = [];
//         const handles = await this.page.context().pages();

//         for (const page of handles) {
//             await this.page.context().setDefaultNavigationTimeout(60000);
//             await page.bringToFront();
//         }

//         // Wait for 30 seconds
//         await this.page.waitForTimeout(30000);

//         // Click on Overview
//         await this.getLocator('overview').click();
//         await this.page.waitForTimeout(2000);
        
//         // Switch to frame
//         const frames = this.page.frames();
//         await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
//         const InvestmentsTotal1 = await frames[1].locator(this.locators.scrollableCellsContainer).textContent();
//         console.log("###### InvestmentsTotal1 value ");
//         console.log(" values1 " + InvestmentsTotal1);
//         valueList.push(InvestmentsTotal1);

//         await frames[1].locator(this.locators.dropdownChevronDown).click();
//         await this.page.waitForTimeout(3000);
//         await frames[1].locator(this.locators.radiobuttonCheckbox).click();
//         await this.page.waitForTimeout(5000);
//         const InvestmentsTotal2 = await frames[1].locator(this.locators.svgScrollableLabel).textContent();
//         console.log(" values2 " + InvestmentsTotal2);
//         valueList.push(InvestmentsTotal2);
//         console.log("###### InvestmentsTotal2 value ", InvestmentsTotal2);

//         await this.page.context().clearCookies();

//         await this.getLocator('overviewAlt').click();
//         await this.page.waitForTimeout(2000);

//         await frames[1].locator(this.locators.dropdownChevronDown).click();
//         await this.page.waitForTimeout(3000);
//         await frames[1].locator(this.locators.checkboxAlt).click();
//         await this.page.waitForTimeout(5000);
//         const InvestmentsTotal3 = await frames[1].locator(this.locators.pivotTableCell).textContent();
//         console.log(" values3 " + InvestmentsTotal3);
//         valueList.push(InvestmentsTotal3);

//         await frames[1].locator(this.locators.dropdownChevronDownAlt).click();
//         await this.page.waitForTimeout(5000);
//         await frames[1].locator(this.locators.radiobuttonCheckbox).click();
//         await this.page.waitForTimeout(5000);
//         const InvestmentsTotal4 = await frames[1].locator(this.locators.svgScrollableLabelAlt).textContent();
//         console.log(" values4 " + InvestmentsTotal4);
//         valueList.push(InvestmentsTotal4);
//         console.log("###### InvestmentsTotal4 value ", InvestmentsTotal4);

//         // console.log("## valueList  :", valueList);
//         // assert(this.areAllValuesEqual(valueList), "Values are equal");
//     }

//     areAllValuesEqual(arr) {
//         // If the array has fewer than 2 elements, they are technically all equal
//         if (arr.length < 2) {
//             return true;
//         }

//         // Get the first value as the reference
//         var firstValue = arr[0];

//         // Iterate through the rest of the array
//         for (var i = 1; i < arr.length; i++) {
//             // If any value is different from the first one, return false
//             if (arr[i] !== firstValue) {
//                 return false;
//             }
//         }

//         // If all values are equal, return true
//         return true;
//     }
// }

// module.exports = { InvestmentsValidation };
const { test, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData');

class InvestmentsValidation {
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
            ppldropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            radiobuttonCheckbox: '(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]',
            radiobuttonCheckbox1: '(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            svgScrollableLabel: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[6]',
            svgScrollableLabe2: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[7]',
            dropdownChevronUp: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-up"])[1]',
            dropdownChevronDownAlt: '(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
            checkboxAlt: '(//*[local-name()="span" and @class="glyphicon checkbox checkboxOutlineContrast"])[1]',
            svgScrollableLabelAlt: '((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[7]',
            pivotTableCell: '(//*[local-name()="div" and @class="pivotTableCellWrap cell-interactive tablixAlignCenter main-cell "])[2]',
            scrollableCellsContainer: '(//*[local-name()="div" and @class="scrollable-cells-container "])[3]',
            scrollableCellsContainer2: '(//*[local-name()="div" and @class="scrollable-cells-container "])[5]',
            deliveryMixDP: "(//span[contains(text(), 'Delivery Mix DP')])",
            peopleMix: "(//span[contains(text(), 'People Mix')])",
            pivotTableCellNoWrap: '((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[14]'
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

    async InvestmentsValidation() {
        let valueList = [];
        const handles = await this.page.context().pages();

        for (const page of handles) {
            await this.page.context().setDefaultNavigationTimeout(60000);
            await page.bringToFront();
        }

        // Wait for 30 seconds
        await this.page.waitForTimeout(3000);

        // Click on Overview
        await this.getLocator('overview').click();
        await this.page.waitForTimeout(2000);
        

        // Switch to frame
        const frames = this.page.frames();
        await frames[1].locator(this.locators.deliveryTab).click();
        await this.page.waitForTimeout(2000);
        await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
        const InvestmentsTotal1 = await frames[1].locator(this.locators.scrollableCellsContainer).textContent();
        valueList.push(InvestmentsTotal1);
        console.log("values1 "+InvestmentsTotal1);

        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox).click();
        await this.page.waitForTimeout(4000);
        const InvestmentsTotal2 = await frames[1].locator(this.locators.svgScrollableLabel).textContent();
        console.log(" values2 " + InvestmentsTotal2);
        valueList.push(InvestmentsTotal2);
        

        await this.page.context().clearCookies();

        // Test case 2 addition
        // await this.page.goto('https://onedata.tigeranalyticstest.in/reports');
        // await this.page.waitForTimeout(5000);
        
        await this.getLocator('deliveryMixDP').click();
        await this.page.waitForTimeout(2000);
        await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
        await this.page.waitForTimeout(5000);

        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox1).click();
        await this.page.waitForTimeout(5000);
        const InvestmentsTotal3 = await frames[1].locator(this.locators.pivotTableCellNoWrap).textContent();
        console.log(" values3 " + InvestmentsTotal3);
        valueList.push(InvestmentsTotal3);

        await this.page.context().clearCookies();

        await this.getLocator('peopleMix').click();
        // await this.page.waitForTimeout(2000);
        // await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
        // await this.page.waitForTimeout(5000);

        await frames[1].locator(this.locators.ppldropdown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox1).click();
        await this.page.waitForTimeout(5000);
        const InvestmentsTotal4 = await frames[1].locator(this.locators.pivotTableCellNoWrap).textContent();
        console.log(" values4 " + InvestmentsTotal4);
        valueList.push(InvestmentsTotal4);

        await this.page.context().clearCookies();

        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox).click();
        await this.page.waitForTimeout(6000);
        const InvestmentsTotal5 = await frames[1].locator(this.locators.svgScrollableLabe2).textContent();
        console.log(" values5 " + InvestmentsTotal5);
        valueList.push(InvestmentsTotal5);

        await this.page.context().clearCookies();

        await this.getLocator('overviewAlt').click();
        await this.page.waitForTimeout(2000);
        // await frames[1].waitForSelector(this.locators.scrollableCellsContainer);
        // await this.page.waitForTimeout(5000);

        await frames[1].locator(this.locators.dropdownChevronDown).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.checkboxAlt).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.dropdownChevronUp).click();
        await this.page.waitForTimeout(3000);
        const InvestmentsTotal6 = await frames[1].locator(this.locators.pivotTableCell).textContent();
        console.log(" values6 " + InvestmentsTotal6);
        valueList.push(InvestmentsTotal6);

        await frames[1].locator(this.locators.dropdownChevronDownAlt).click();
        await this.page.waitForTimeout(3000);
        await frames[1].locator(this.locators.radiobuttonCheckbox).click();
        await this.page.waitForTimeout(5000);
        const InvestmentsTotal7 = await frames[1].locator(this.locators.svgScrollableLabelAlt).textContent();
        console.log(" values7 " + InvestmentsTotal7);
        valueList.push(InvestmentsTotal7);

        

        console.log("## valueList  :" + valueList);
        const vl = this.areAllValuesEqual(valueList);
        
        const valuesEqual = this.areAllValuesEqual(valueList);
        console.log("Values are equal: ", valuesEqual);
        expect(valuesEqual).toBeTruthy();
        
        if (!valuesEqual) {
            throw new Error("Values are not equal");
        }
        

        
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

module.exports = { InvestmentsValidation };

// Test file


// Test file

