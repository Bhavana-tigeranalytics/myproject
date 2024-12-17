const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class EBHCPage {
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

        this.ebhclocators={
            overview: "(//span[contains(text(), 'Overview')])[1]",
            deliveryTab:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            ebhcByAlotTime:'(//*[local-name()="svg" and @class="card"])[6]',
            dropdown_1:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            moMTotal:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            ebhcMomTotal:'((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[9]',
            accountList:'// span[contains(text(), "Account List")]',
            ebhcAccountList:'(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignRight main-cell "])[6]',
            deliveryCP:'// span[contains(text(), "Delivery HC & Mix")]',
            ebhcDeliveryCP:'(//*[local-name()="div" and @class="pivotTableCellNoWrap tablixAlignRight main-cell "])[3]',
            deliveryDP:'// span[contains(text(), "Delivery Mix DP")]',
            dropdown2:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])',
            all:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            alotTypeDeliveryDP:'(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignCenter main-cell "])[14]',
            ebhcDeliveryDP:'(//*[local-name()="text" and @class="value"])[4]',
            peopleMix:'// span[contains(text(), "People Mix")]',
            dropdown3:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            all2:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            AlotTimePeoplemix:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[13]/transform/div/div[3]/div/div/visual-modern/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[3]',
            // dropdownpeoplemix:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            dropdownpeoplemix:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            peopleMixEbhc:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            ebhcPepleMix:'((//*[local-name()="svg" and @class="svgScrollable"])[1]//*[name()="text" and @class="label"])[9]',
            practiceOverview:'(// span[contains(text(), "Overview")])[4]',
            dropdown4:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            all3:'(//*[local-name()="div" and @class="slicerItemContainer"])[1]',
            practiceAlotTime:'(//*[local-name()="div" and @class="pivotTableCellWrap cell-interactive tablixAlignRight main-cell "])[1]',
            monthlytrendDropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[2]',
            monthlytrendAll:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            ebhcMonthlyTrend:'((//*[local-name()="svg" and @class="svgScrollable"])[7]//*[name()="text" and @class="label"])[9]',
            practiceList:'(//div[@class="visual customPadding allow-deferred-rendering visual-actionButton"])[1]',
            practiceDropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            selectall:'(//*[local-name()="div" and @class="slicerItemContainer"])[1]',
            ebhcpracticeList:'(//*[local-name()="div" and @class="pivotTableCellNoWrap cell-interactive tablixAlignRight main-cell "])[2]',
            industry:"((//*[local-name()='svg' and @class='svgScrollable'])[2]//*[name()='text' and @class='label'])[9]",
            more:"(// span[contains(text(), '2 more')])[2]",
            insights:"// span[contains(text(), 'Industry Segment Insights')]"
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

    async EBHCPage() {
        await this.getLocator('overview').click();
        console.log("Overview Clicked");

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`);

        await frames[0].locator(this.ebhclocators.overview).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ebhclocators.deliveryTab).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ebhclocators.dropdown_1).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.moMTotal).click();
        await this.page.waitForTimeout(2000);

        const ebhcvalues1 = await frames[1].locator(this.ebhclocators.ebhcByAlotTime).textContent();
        console.log(" value 1 " + ebhcvalues1);
        valueList.push(ebhcvalues1);


        const ebhcvalues2 = await frames[1].locator(this.ebhclocators.ebhcMomTotal).textContent();
        console.log(" value 2 " + ebhcvalues2);
        valueList.push(ebhcvalues2);

        await frames[0].locator(this.ebhclocators.accountList).click();
        await this.page.waitForTimeout(2000)

        const ebhcvalues3 = await frames[1].locator(this.ebhclocators.ebhcAccountList).textContent();
        console.log(" value 3 " + ebhcvalues3);
        valueList.push(ebhcvalues3);

        await frames[0].locator(this.ebhclocators.deliveryCP).click();
        await this.page.waitForTimeout(2000);

        const ebhcvalues4 = await frames[1].locator(this.ebhclocators.ebhcDeliveryCP).textContent();
        console.log(" value 4 " + ebhcvalues4);
        valueList.push(ebhcvalues4);

        await frames[0].locator(this.ebhclocators.deliveryDP).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ebhclocators.dropdown2).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.all).click();
        await this.page.waitForTimeout(5000);


        const ebhcvalues5 = await frames[1].locator(this.ebhclocators.alotTypeDeliveryDP).textContent();
        console.log(" value 5 " + ebhcvalues5);
        valueList.push(ebhcvalues5);

        const ebhcvalues6 =await frames[1].locator(this.ebhclocators.ebhcDeliveryDP).textContent();
        console.log(" value 6 " + ebhcvalues6);
        valueList.push(ebhcvalues6)

        await frames[0].locator(this.ebhclocators.peopleMix).click(),
        await this.page.waitForTimeout(3000);

        await frames[1].locator(this.ebhclocators.dropdown3).click();
        await this.page.waitForTimeout(4000);
        await frames[1].locator(this.ebhclocators.all2).click();
        await this.page.waitForTimeout(6000);

        
        const ebhcvalues7 =await frames[1].locator(this.ebhclocators.AlotTimePeoplemix).textContent();
        console.log(" value 7 "+ ebhcvalues7);
        valueList.push(ebhcvalues7)

        await frames[1].locator(this.ebhclocators.dropdownpeoplemix).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.peopleMixEbhc).click();
        await this.page.waitForTimeout(2000);
        
        const ebhcvalues8= await frames[1].locator(this.ebhclocators.ebhcPepleMix).textContent();
        console.log(" values 8 "+ ebhcvalues8);
        valueList.push(ebhcvalues8)

        await frames[0].locator(this.ebhclocators.practiceOverview).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ebhclocators.dropdown4).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.all3).click();
        await this.page.waitForTimeout(2000);

        const ebhcvalues9 = await frames[1].locator(this.ebhclocators.practiceAlotTime).textContent();
        console.log(" value 9 "+ ebhcvalues9);
        valueList.push(ebhcvalues9)

        await frames[1].locator(this.ebhclocators.monthlytrendDropdown).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.monthlytrendAll).click();
        await this.page.waitForTimeout(2000);

        const ebhcvalues10 = await frames[1].locator(this.ebhclocators.ebhcMonthlyTrend).textContent();
        console.log(" value10 "+ ebhcvalues10);
        valueList.push(ebhcvalues10)

        await frames[1].locator(this.ebhclocators.practiceList).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.practiceDropdown).click();
        await this.page.waitForTimeout(2000);
        await frames[1].locator(this.ebhclocators.selectall).click();
        await this.page.waitForTimeout(2000);

        const ebhcvalues11 = await frames[1].locator(this.ebhclocators.ebhcpracticeList).textContent();
        console.log(" value11 "+ ebhcvalues11);
        valueList.push(ebhcvalues11)

        await frames[0].locator(this.ebhclocators.more).click();
        await this.page.waitForTimeout(2000);
        
        await frames[0].locator(this.ebhclocators.insights).click();
        await this.page.waitForTimeout(2000)

        const ebhcvalues12 = await frames[1].locator(this.ebhclocators.industry).textContent();
        console.log(" value12"+ ebhcvalues12);
        valueList.push(ebhcvalues12)


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

module.exports = { EBHCPage };