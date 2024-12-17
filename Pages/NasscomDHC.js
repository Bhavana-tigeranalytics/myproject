const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class Nasscom {
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


        this.NasscomLocator={
            more:"(//span[contains(text(), '3 more')])",
            EmployeeIn:"(//span[contains(text(), 'Employee - India')])",
            GenDiv:"(//span[contains(text(), 'Gender Diversity - India')])",
            Function:'((//*[local-name()="svg" and @class="svgScrollable"])[4]//*[name()="text" and @class="label"])[3]',
            Gender:'((//*[local-name()="svg" and @class="svgScrollable"])[6]//*[name()="text" and @class="label"])[3]',
            Monthlytrend:'((//*[local-name()="svg" and @class="svgScrollable"])[8]//*[name()="text" and @class="label"])[2]',
            TotalHeadcount:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[33]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div/div',
        }


    }

    getLocator(name){
        return this.page.locator(this.locators[name]);
    }

    async gotoLoginPage() {
        await this.page.goto('https://onedatapreprod.tigeranalyticstest.in/reports');

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

    async Nasscom(){
        await this.getLocator('overview').click();
        console.log("Overview Clicked");

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 


      await frames[0].locator(this.NasscomLocator.more).click();
        await this.page.waitForTimeout(2000);

        await frames[0].locator(this.NasscomLocator.EmployeeIn).click();
        await this.page.waitForTimeout(2000);


        const Function1 = await frames[1].locator(this.NasscomLocator.Function).textContent();
        console.log(" Function " + Function1);
        valueList.push(Function1);

        // await frames[1].locator(this.TotalFTEDeliveryLocator.delta).click();
        // await this.page.waitForTimeout(2000);
        
        // await frames[1].locator(this.TotalFTEDeliveryLocator.toggle).click();
        // await this.page.waitForTimeout(2000);

        const Gender1 = await frames[1].locator(this.NasscomLocator.Gender).textContent();
        console.log(" gender" + Gender1);
        valueList.push(Gender1);

        const Monthlytrend1  = await frames[1].locator(this.NasscomLocator.Monthlytrend).textContent();
        console.log("Monthlytrend" + Monthlytrend1);
        valueList.push(Monthlytrend1);

        await frames[0].locator(this.NasscomLocator.GenDiv).click();
        await this.page.waitForTimeout(2000);

        const TotalHeadcount1 = await frames[1].locator(this.NasscomLocator.TotalHeadcount).textContent();
        console.log("TotalHeadcount" + TotalHeadcount1);
        valueList.push(TotalHeadcount1);

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

module.exports = { Nasscom}; 