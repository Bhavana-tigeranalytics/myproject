const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class TotalFTEUSCost {
    constructor(page){
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            overview: "(//span[contains(text(), '3 more')])",
            overview1:"(//span[contains(text(), 'US+PNL')])",
            clickLinkToFollow: "(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            frameCard: "(//*[local-name()='svg' and @class='card'][1])[3]",
            scrollableViewport: "(//div[@class='scrollable-cells-viewport '])[2]",
            svgScrollableLabel: "((//*[local-name()='svg' and @class='svgScrollable'])[1]//*[name()='text' and @class='label'])[9]",
            textValue: "(//*[local-name()='text' and @class='value'])[2]",
            pivotTableCell: "(//*[local-name()='div' and @class='pivotTableCellNoWrap cell-interactive tablixAlignRight main-cell '])[1]"
        };


        this.TotalFTEUSCostLocator={
            more:"(//span[contains(text(), '3 more')])",
            uspnl:"(//span[contains(text(), 'US+PNL')])",
            pl:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            ftecost:"(//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[8]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[13]/div[2]/div/div[4])",
            delta:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[3]",
            ftecost2:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[8]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div[13]/div[2]/div/div[2]/div[1]",
        }

    }

    getLocator(name){
        return this.page.locator(this.locators[name]);
    }

    async gotoLoginPage() {
        await this.page.goto('https://proud-hill-0a3063a10.4.azurestaticapps.net/reports');

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
    async TotalFTEUSCost(){
        await this.getLocator('overview').click();
        console.log("Overview Clicked");
        await this.getLocator('overview1').click();
        console.log("Overview1 Clicked");

        

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 


        await frames[1].locator(this.TotalFTEUSCostLocator.pl).click();
        await this.page.waitForTimeout(2000);
        
        const TotalFTE1 = await frames[1].locator(this.TotalFTEUSCostLocator.ftecost). textContent();                                                                                                                                                                                                                                                                                              
        console.log(" TotalFTE 1 " + TotalFTE1);
        valueList.push(TotalFTE1);

        await frames[1].locator(this.TotalFTEUSCostLocator.delta).click();
        await this.page.waitForTimeout(2000);

        const TotalFTE2 = await frames[1].locator(this.TotalFTEUSCostLocator.ftecost2).textContent();
        console.log(" TotalFTE 2 " + TotalFTE2);
        valueList.push(TotalFTE2);

        console.log("valueList: ", valueList);
        const normalizedValues = valueList.map(value => value.replace(/[^\d.-]/g, ''));
        console.log("Normalized Values: ", normalizedValues);
        expect(normalizedValues).toBeTruthy();

        if (!normalizedValues) {
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

module.exports = { TotalFTEUSCost }; 