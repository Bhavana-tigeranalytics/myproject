const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class TotalDHC {
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

        this.totaldhcLocator={
            overview: "(//span[contains(text(), 'Overview')])[1]",
            deliveryTab:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            totalDhcAlotTime:'(//*[local-name()="svg" and @class="card"])[5]',
            totalDhcKpi:'(//*[local-name()="text" and @class="value"])[1]',
            dropdownDHC:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            DHCmOM:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[5]',
            TotalDHCmoM:'((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[9]',
            practiceOverview:'(// span[contains(text(), "Overview")])[4]',
            dropdownPractice:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            filterPractice:'(//*[local-name()="div" and @class="slicerItemContainer"])[1]',
            practiceAlotTime:'(//*[local-name()="svg" and @class="card"])[1]',
            monthlytrendDropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            monthlytrendAll:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[5]',
            dhcMonthlyTrend:'((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[9]'
            

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

    async TotalDHC(){
        await this.getLocator('overview').click();
        console.log("Overview Clicked");

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 

        await frames[0].locator(this.totaldhcLocator.overview).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.totaldhcLocator.deliveryTab).click();
        await this.page.waitForTimeout(2000);


        const totaldhc1 = await frames[1].locator(this.totaldhcLocator.totalDhcKpi).textContent();
        console.log(" totaldhc1 " + totaldhc1);
        valueList.push(totaldhc1);

        const totaldhc2 = await frames[1].locator(this.totaldhcLocator.totalDhcAlotTime).textContent();
        console.log(" totaldhc2 " + totaldhc2);
        valueList.push(totaldhc2);

        await frames[1].locator(this.totaldhcLocator.dropdownDHC).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.totaldhcLocator.DHCmOM).click();
        await this.page.waitForTimeout(2000);

        const totaldhc3 = await frames[1].locator(this.totaldhcLocator.TotalDHCmoM).textContent();
        console.log(" totaldhc3 " + totaldhc3);
        valueList.push(totaldhc3);

        await frames[0].locator(this.totaldhcLocator.practiceOverview).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.totaldhcLocator.dropdownPractice).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.totaldhcLocator.filterPractice).click();
        await this.page.waitForTimeout(2000);

        const totaldhc4 = await frames[1].locator(this.totaldhcLocator.practiceAlotTime).textContent();
        console.log(" totaldhc4 " + totaldhc4);
        valueList.push(totaldhc4);

        await frames[1].locator(this.totaldhcLocator.monthlytrendDropdown).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.totaldhcLocator.monthlytrendAll).click();
        await this.page.waitForTimeout(2000);

        const totaldhc5 = await frames[1].locator(this.totaldhcLocator.dhcMonthlyTrend).textContent();
        console.log(" totaldhc5 " + totaldhc5);
        valueList.push(totaldhc5);

        console.log("## valueList  :" + valueList);
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

module.exports = { TotalDHC };