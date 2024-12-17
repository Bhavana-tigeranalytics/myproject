const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class GrossMargin {
    constructor(page){
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            overview: "(//span[contains(text(), 'Overview')])[1]",
            clickLinkToFollow: "(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            frameCard: "(//*[local-name()='svg' and @class='card'][1])[3]",
            scrollableViewport: "(//div[@class='scrollable-cells-viewport '])[2]",
            svgScrollableLabel: "((//*[local-name()='svg' and @class='svgScrollable'])[1]//*[name()='text' and @class='label'])[9]",
            textValue: "(//*[local-name()='text' and @class='value'])[2]",
            pivotTableCell: "(//*[local-name()='div' and @class='pivotTableCellNoWrap cell-interactive tablixAlignRight main-cell '])[1]"
        };


        this.grossMarginLocator={
            financeOverview:"(//span[contains(text(), 'Overview')])[3]",
            portfolioview:"(//span[contains(text(), 'Portfolio View')])",
            dropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            all:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            totalGross:'(//*[local-name()="svg" and @class="card"][1])[7]',
            gmGross:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[7]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/div[4]',
            trendsTab:'(//div[@class="visual customPadding allow-deferred-rendering visual-actionButton"])[3]',
            dropdown2:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            all2:'(//*[local-name()="div" and @class="slicerItemContainer"])[5]',
            grossMonthlyrevenue:'((//*[local-name()="svg" and @class="svgScrollable"])[3]//*[name()="text" and @class="label"])[8]',
            grossMarginCard:'(//*[local-name()="svg" and @class="card"][1])[7]',
            gmtotal:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[11]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[1]/div[3]/div/div[4]',
            MonthlyReport:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]"

        }

    }

    getLocator(name){
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
        console.log(this.locators.overview);

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

    async GrossMargin(){
        await this.getLocator('overview').click();
        console.log("Overview Clicked");

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 

        await frames[0].locator(this.grossMarginLocator.financeOverview).click();
        await this.page.waitForTimeout(2000);


        await frames[1].locator(this.grossMarginLocator.dropdown).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.grossMarginLocator.all).click();
        await this.page.waitForTimeout(4000);

        const grossMargin1 = await frames[1].locator(this.grossMarginLocator.totalGross).textContent();
        console.log(" gross margin 1 " + grossMargin1);
        valueList.push(grossMargin1); 

        const grossMargin2 = await frames[1].locator(this.grossMarginLocator.gmGross).textContent();
        console.log(" gross margin 2 " + grossMargin2);
        valueList.push(grossMargin2); 

        await frames[1].locator(this.grossMarginLocator.trendsTab).click();
        await this.page.waitForTimeout(2000);
        
        await frames[1].locator(this.grossMarginLocator.dropdown2).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.grossMarginLocator.all2).click();
        await this.page.waitForTimeout(2000);


        const grossMargin3 = await frames[1].locator(this.grossMarginLocator.grossMonthlyrevenue).textContent();
        console.log(" gross margin 3 " + grossMargin3);
        valueList.push(grossMargin3);


        await frames[0].locator(this.grossMarginLocator.portfolioview).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.grossMarginLocator.MonthlyReport).click();
        await this.page.waitForTimeout(3000);

        const grossMargin4 = await frames[1].locator(this.grossMarginLocator.grossMarginCard).textContent();
        console.log(" gross margin 4 " + grossMargin4);
        valueList.push(grossMargin4);


        const grossMargin5 = await frames[1].locator(this.grossMarginLocator.gmtotal).textContent();
        console.log(" gross margin 5 " + grossMargin5);
        valueList.push(grossMargin5);

        console.log("## valueList  :" + valueList);
        const valuesEqual = this.areAllValuesEqual(valueList);
        console.log("Values are equal: ", valuesEqual);
        expect(valuesEqual).toBeTruthy();

        if (!valuesEqual) {
            throw new Error("Values are not equal");
        }
        

    }

    areAllValuesEqual(arr) {
        // If the array has fewer than 2 elements, they are technically all equal
        if (arr.length < 2) {
            return true;
        }

        // Get the first value as the reference
        var firstValue = arr[0];

        // Iterate through the rest of the array
        for (var i = 1; i < arr.length; i++) {
            // If any value is different from the first one, return false
            if (arr[i] !== firstValue) {
                return false;
            }
        }

        // If all values are equal, return true
        return true; 
    }




} 

module.exports = { GrossMargin }; 