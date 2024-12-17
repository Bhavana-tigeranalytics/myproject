
const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 

class Projections {
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

        this.projectionsLocator={
            eightmore:"(//span[contains(text(), '8 more')])",
            projections:"(//span[contains(text(), 'Projections')])",
            ov:"(//span[contains(text(), 'Overview')])[1]",

            tigerTotalSOW: '(//*[local-name()="text" and @class="value"])[1]',
            portfolioTotalSOW:'(//*[local-name()="text" and @class="value"])[2]',
            projectionsNetaddTotalTiger:'(//*[local-name()="text" and @class="value"])[3]',
            projectionsNetaddTotalPortfolio:'(//*[local-name()="text" and @class="value"])[4]',

            CPTigerTotalProjectionNetadd_1:'(//*[local-name()="text" and @class="value"])[5]',
            CPportfolioTotalProjectionNetadd_1:'(//*[local-name()="text" and @class="value"])[6]',
            CPTigerTotalProjectionNetadd_2:'(//*[local-name()="text" and @class="value"])[7]',
            CPportfolioTotalProjectionNetadd_2:'(//*[local-name()="text" and @class="value"])[17]',

            DPTigerTotalProjectionNetadd_1:'(//*[local-name()="text" and @class="value"])[8]',
            DPportfolioTotalProjectionNetadd_1:'(//*[local-name()="text" and @class="value"])[18]',
            DPTigerTotalProjectionNetadd_2:'(//*[local-name()="text" and @class="value"])[9]',
            DPportfolioTotalProjectionNetadd_2:'(//*[local-name()="text" and @class="value"])[19]',

            DossierNetaddTiger: '(//*[local-name()="text" and @class="value"])[10]',
            DossierNetaddPortfolio:'(//*[local-name()="text" and @class="value"])[11]',
            DossierNetaddTiger_2: '(//*[local-name()="text" and @class="value"])[12]',
            DossierNetaddPortfolio_2:'(//*[local-name()="text" and @class="value"])[13]',

            NetaddComparision_tiger_DossiervsCP:'(//*[local-name()="text" and @class="value"])[14]',
            NetaddComparision_portfolio_DossiervsCP:'(//*[local-name()="text" and @class="value"])[20]',
            NetaddComparision_tiger_DossiervsDP:'(//*[local-name()="text" and @class="value"])[15]',
            NetaddComparision_portfolio_DossiervsDP:'(//*[local-name()="text" and @class="value"])[21]',

            openDemandsTiger:'(//*[local-name()="text" and @class="value"])[16]',
            openDemandPortfolio:'(//*[local-name()="text" and @class="value"])[22]',


            currentmonthsow:"((//*[local-name()='svg' and @class='svgScrollable'])[1]//*[name()='text' and @class='label'])[14]"

        }

    }

    getLocator(name){
        return this.page.locator(this.locators[name]);
    }

    async gotoLoginPage() {
        // await this.page.goto('https://proud-hill-0a3063a10.4.azurestaticapps.net');
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

    async Projections(){
        //await this.getLocator('overview').click();
        //console.log("Overview Clicked");

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 

        //await frames[0].locator(this.projectionsLocator.eightmore).click();
        // await this.page.waitForTimeout(2000);

        await frames[0].locator(this.projectionsLocator.projections).click();
        await this.page.waitForTimeout(2000);

        var TotalSOWvalueList = [];
        var boolean=[];

        const TotalSOWTiger = await frames[1].locator(this.projectionsLocator.tigerTotalSOW).textContent();
        console.log(" Total SOW Tiger " + TotalSOWTiger);
        TotalSOWvalueList.push(TotalSOWTiger);

        const TotalSOWPortfolio = await frames[1].locator(this.projectionsLocator.portfolioTotalSOW).textContent();
        console.log(" Total SOW Portfolio " + TotalSOWPortfolio);
        TotalSOWvalueList.push(TotalSOWPortfolio);

        console.log("## Total SOW valueList  :" + TotalSOWvalueList);
        const vl = this.areAllValuesEqual(TotalSOWvalueList);
        console.log(" result : " + vl); 
        boolean.push(vl)

        var TotalNetaddvalueList = [];

        const TotalNetaddTiger = await frames[1].locator(this.projectionsLocator.projectionsNetaddTotalTiger).textContent();
        console.log(" Total Netadd Tiger " +TotalNetaddTiger);
        TotalNetaddvalueList.push(TotalNetaddTiger);

        const TotalNetaddPortfolio = await frames[1].locator(this.projectionsLocator.projectionsNetaddTotalPortfolio).textContent();
        console.log(" Total Netadd Portfolio " + TotalNetaddPortfolio);
        TotalNetaddvalueList.push(TotalNetaddPortfolio);

        console.log("## Total Netadd valueList  :" + TotalNetaddvalueList);
        const v2 = this.areAllValuesEqual(TotalNetaddvalueList);
        console.log(" result : " + v2);
        boolean.push(v2)

        var CPNetaddvalueslist=[];

        const CPNetadd_Tiger_Total = await frames[1].locator(this.projectionsLocator.CPTigerTotalProjectionNetadd_1).textContent();
        console.log(" CP Projection Tiger " +CPNetadd_Tiger_Total);
        CPNetaddvalueslist.push(CPNetadd_Tiger_Total);

        const CPNetadd_Portfolio_Total = await frames[1].locator(this.projectionsLocator.CPportfolioTotalProjectionNetadd_1).textContent();
        console.log(" CP Projection Portfolio " + CPNetadd_Portfolio_Total);
        CPNetaddvalueslist.push(CPNetadd_Portfolio_Total);

        console.log("## Total CP Projection Netadd valueList  :" + CPNetaddvalueslist);
        const v3 = this.areAllValuesEqual(CPNetaddvalueslist);
        console.log(" result : " + v3);
        boolean.push(v3)

        var CPNetaddvalueslist_latest=[];

        const CPNetadd_Tiger_Total_latest = await frames[1].locator(this.projectionsLocator.CPTigerTotalProjectionNetadd_2).textContent();
        console.log("Latest CP Projection Tiger " +CPNetadd_Tiger_Total_latest);
        CPNetaddvalueslist_latest.push(CPNetadd_Tiger_Total_latest);

        const CPNetadd_Portfolio_Total_latest = await frames[1].locator(this.projectionsLocator.CPportfolioTotalProjectionNetadd_2).textContent();
        console.log("Latest CP Projection Portfolio " + CPNetadd_Portfolio_Total_latest);
        CPNetaddvalueslist_latest.push(CPNetadd_Portfolio_Total_latest);

        console.log("## Latest CP Projection Netadd valueList:" + CPNetaddvalueslist_latest);
        const v4 = this.areAllValuesEqual(CPNetaddvalueslist_latest);
        console.log(" result : " + v4);
        boolean.push(v4)


        var DPNetaddvalueslist=[];

        const DPNetadd_Tiger_Total = await frames[1].locator(this.projectionsLocator.DPTigerTotalProjectionNetadd_1).textContent();
        console.log(" DP Projection Tiger " +DPNetadd_Tiger_Total);
        DPNetaddvalueslist.push(DPNetadd_Tiger_Total);

        const DPNetadd_Portfolio_Total = await frames[1].locator(this.projectionsLocator.DPportfolioTotalProjectionNetadd_1).textContent();
        console.log(" DP Projection Portfolio " + DPNetadd_Portfolio_Total);
        DPNetaddvalueslist.push(DPNetadd_Portfolio_Total);

        console.log("## Total DP Projection Netadd valueList  :" + DPNetaddvalueslist);
        const v5 = this.areAllValuesEqual(DPNetaddvalueslist);
        console.log(" result : " + v5);
        boolean.push(v5)


        var DPNetaddvalueslist_latest=[];

        const DPNetadd_Tiger_Total_latest = await frames[1].locator(this.projectionsLocator.DPTigerTotalProjectionNetadd_2).textContent();
        console.log("Latest DP Projection Tiger " +DPNetadd_Tiger_Total_latest);
        DPNetaddvalueslist_latest.push(DPNetadd_Tiger_Total_latest);

        const DPNetadd_Portfolio_Total_latest = await frames[1].locator(this.projectionsLocator.DPportfolioTotalProjectionNetadd_2).textContent();
        console.log("Latest DP Projection Portfolio " + DPNetadd_Portfolio_Total_latest);
        DPNetaddvalueslist_latest.push(DPNetadd_Portfolio_Total_latest);

        console.log("## Latest DP Projection Netadd valueList:" + DPNetaddvalueslist_latest);
        const v6 = this.areAllValuesEqual(DPNetaddvalueslist_latest);
        console.log(" result : " + v6);
        boolean.push(v6)



        const DossierNetadd_valuesList=[]

        const DossierNetadd_Tiger= await frames[1].locator(this.projectionsLocator.DossierNetaddTiger).textContent();
        console.log("Dossier Netadd Tiger "+ DossierNetadd_Tiger);
        DossierNetadd_valuesList.push(DossierNetadd_Tiger)

        const DossierNetadd_Portfolio= await frames[1].locator(this.projectionsLocator.DossierNetaddPortfolio).textContent();
        console.log("Dossier Netadd Portfolio "+ DossierNetadd_Portfolio);
        DossierNetadd_valuesList.push(DossierNetadd_Portfolio)

        console.log("## Dossier Netadd:" + DossierNetadd_valuesList);
        const v7 = this.areAllValuesEqual(DossierNetadd_valuesList);
        console.log(" result : " + v7);
        boolean.push(v7)


        const DossierNetadd_valuesList_latest=[]

        const DossierNetadd_Tiger_latest= await frames[1].locator(this.projectionsLocator.DossierNetaddTiger_2).textContent();
        console.log("Dossier Netadd Tiger Latest "+ DossierNetadd_Tiger_latest);
        DossierNetadd_valuesList_latest.push(DossierNetadd_Tiger_latest)

        const DossierNetadd_Portfolio_latest= await frames[1].locator(this.projectionsLocator.DossierNetaddPortfolio_2).textContent();
        console.log("Dossier Netadd Portfolio Latest"+ DossierNetadd_Portfolio_latest);
        DossierNetadd_valuesList_latest.push(DossierNetadd_Portfolio_latest)

        console.log("## Dossier Netadd Latest:" + DossierNetadd_valuesList_latest);
        const v8 = this.areAllValuesEqual(DossierNetadd_valuesList_latest);
        console.log(" result : " + v8);
        boolean.push(v8)



        const NetaddComparision_DossiervsCP_valuelist=[];

        const NetaddComparision_tiger_DossiervsCP= await frames[1].locator(this.projectionsLocator.NetaddComparision_tiger_DossiervsCP).textContent();
        console.log("Netadd Comparision Tiger DossiervsCP : "+ NetaddComparision_tiger_DossiervsCP);
        NetaddComparision_DossiervsCP_valuelist.push(NetaddComparision_tiger_DossiervsCP)

        const NetaddComparision_portfolio_DossiervsCP= await frames[1].locator(this.projectionsLocator.NetaddComparision_portfolio_DossiervsCP).textContent();
        console.log("Netadd Comparision Portfolio DossiervsCP "+ NetaddComparision_portfolio_DossiervsCP);
        NetaddComparision_DossiervsCP_valuelist.push(NetaddComparision_portfolio_DossiervsCP)

        console.log("## Netadd Comparision Dossier VS CP  :" + NetaddComparision_DossiervsCP_valuelist);
        const v9 = this.areAllValuesEqual(NetaddComparision_DossiervsCP_valuelist);
        console.log(" result : " + v9);
        boolean.push(v9)


        const NetaddComparision_DossiervsDP_valuelist=[];

        const NetaddComparision_tiger_DossiervsDP= await frames[1].locator(this.projectionsLocator.NetaddComparision_tiger_DossiervsDP).textContent();
        console.log("Netadd Comparision Tiger DossiervsDP : "+ NetaddComparision_tiger_DossiervsDP);
        NetaddComparision_DossiervsDP_valuelist.push(NetaddComparision_tiger_DossiervsDP)

        const NetaddComparision_portfolio_DossiervsDP= await frames[1].locator(this.projectionsLocator.NetaddComparision_portfolio_DossiervsDP).textContent();
        console.log("Netadd Comparision Portfolio DossiervsDP "+ NetaddComparision_portfolio_DossiervsDP);
        NetaddComparision_DossiervsDP_valuelist.push(NetaddComparision_portfolio_DossiervsDP)

        console.log("## Netadd Comparision Dossier VS DP  :" + NetaddComparision_DossiervsDP_valuelist);
        const v10 = this.areAllValuesEqual(NetaddComparision_DossiervsDP_valuelist);
        console.log(" result : " + v10);
        boolean.push(v10)


        var OpenDemand_Valuelist = [];

        const Open_demand_tiger = await frames[1].locator(this.projectionsLocator.openDemandsTiger).textContent();
        console.log(" Open Demand Tiger" +Open_demand_tiger);
        OpenDemand_Valuelist.push(Open_demand_tiger);

        const Open_demand_Portfolio = await frames[1].locator(this.projectionsLocator.openDemandPortfolio).textContent();
        console.log(" Open Demand Portfolio " + Open_demand_Portfolio);
        OpenDemand_Valuelist.push(Open_demand_Portfolio);

        console.log("## Open Demand Valuelist  :" + OpenDemand_Valuelist);
        const valuesEqual = this.areAllValuesEqual(OpenDemand_Valuelist);
        console.log(" result : " + valuesEqual);
        boolean.push(valuesEqual)

        await frames[0].locator(this.projectionsLocator.ov).click();
        await this.page.waitForTimeout(2000);

        var TotalCurrentSOWvalueList = []

        await frames[0].locator(this.projectionsLocator.ov).click();
        await this.page.waitForTimeout(2000);

        const current_sow = await frames[1].locator(this.projectionsLocator.currentmonthsow).textContent();
        console.log(" current sow " + current_sow);
        TotalCurrentSOWvalueList.push(current_sow)

        await frames[0].locator(this.projectionsLocator.projections).click();
        await this.page.waitForTimeout(2000)
        
        const Total_SOWTiger = await frames[1].locator(this.projectionsLocator.tigerTotalSOW).textContent();
        console.log(" Total SOW Tiger " + Total_SOWTiger);
        TotalCurrentSOWvalueList.push(TotalSOWTiger)

        console.log("## Total Current SOWvalueList  :" +TotalCurrentSOWvalueList );
        const values2Equal = this.areAllValuesEqual(TotalCurrentSOWvalueList);
        console.log(" result : " + values2Equal);
        boolean.push(values2Equal)



        const check=this.foundfalse(boolean)
        const report = Boolean(check)
        if(this.foundfalse(boolean)){
            throw new Error("Values are not equal"); 
        }
        
        console.log("the result:",true)
    

    }

    foundfalse(boolean){
        console.log(boolean)

        if(boolean.includes(false)){
            return true
        }
        else{
            return false
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

module.exports = { Projections };
