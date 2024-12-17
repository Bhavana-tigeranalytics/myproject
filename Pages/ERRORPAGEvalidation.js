
// PowerBiPage.js
const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData'); 
const { EBHCPage } = require('./EBHCValidation');

class PowerBiPage {

    constructor(page){
        this.page = page;
        this.locators = {
            userName: "//div[@class='yAlK0b']",
            next: "//*[contains(text(),'Next')]",
            signin: "//*[contains(text(),'Continue')]",
            login: "//span[@class='Login_buttonText__lRdGI']",
            clickLinkToFollow: "(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            frameCard: "(//*[local-name()='svg' and @class='card'][1])[3]",
            scrollableViewport: "(//div[@class='scrollable-cells-viewport '])[2]",
            svgScrollableLabel: "((//*[local-name()='svg' and @class='svgScrollable'])[1]//*[name()='text' and @class='label'])[9]",
            textValue: "(//*[local-name()='text' and @class='value'])[2]",
            pivotTableCell: "(//*[local-name()='div' and @class='pivotTableCellNoWrap cell-interactive tablixAlignRight main-cell '])[1]"
        }; 

        this.ErrorpageLocator={
            //Organisation
            OrgOverview:"(//span[contains(text(), 'Overview')])[1]",
            Orgdropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[1]',
            OrgovToggle:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[3]",
            OrgovEBHC:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[2]",
            OrgovInvestment:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[3]",
            OrgovAvailable:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[4]",
            OrgovTotalDHC:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[5]",
            OrgovMetrics:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[4]",
            OrgovBU:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",

            OrgIndustries:"//span[contains(text(), 'Industries')]",
            OrgIndSowToggle1:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            OrgIndMomToggle2:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            OrgIndLink:"//div[@class='contentContainer']//div[contains(@class,'text ui-role-button-text') and text()='Account Contribution by Segment']",
            OrgIndHome:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div",

            OrgEmployee:"//span[contains(text(), 'Employee - India')]",
            OrgEmpMetrics:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[9]/transform/div/div[3]/div/div/visual-modern/div/div",
            OrgEmpLink:"//*[@id='containerc89fe06c-ffbd-63be-416d-7b488ab398b3']",

            OrgAttrition:"//span[contains(text(), 'Attrition - INDIA')]",
            OrgOnedataUsage:"//span[contains(text(), 'OneData_Usage metrics')]",
            OrgGender:"//span[contains(text(), 'Gender Diversity')]",

            OrgFinancial:"//span[contains(text(), 'Financial Performance')]",
            OrgFintab1:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            OrgFintab2:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            OrgFintab3:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[3]",
            OrgFintab4:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[4]",
            OrgFintab5:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[5]",
            OrgFintab5toggle:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[17]/transform/div/div[3]/div/div/visual-modern/div/div",
            OrgFintab6:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[6]",
            OrgFintab7:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[7]",
            OrgFintab8:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[8]",
            OrgFintab9:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[9]",
            OrgFintab9toggle:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[15]/transform/div/div[3]/div/div/visual-modern/div/div",

            threemore:"(//span[contains(text(), '3 more')])[1]",

            //Account
            AccOverview:"(//span[contains(text(), 'Overview')])[2]",
            Accdropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
            AccovEBHC:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[2]",
            AccovInvestment:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[3]",
            AccovAvailable:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[4]",
            AccovTotalDHC:"(//*[local-name()='span' and @class='glyphicon radiobutton checkboxOutlineContrast'])[5]",
            AccovToggle:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[5]/transform/div/div[2]/visual-container-group/transform/div/div[2]/visual-container[5]/transform/div/div[3]/div/div/visual-modern/div/div",
            AccovDemandLink:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            AccDemToggle:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div",
            AccDemHome:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div",
            AccovTeamLink:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[3]",
            AccTeamHome:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div",


            AccountList:"//span[contains(text(), 'Account List')]",
            Acclistindiatoggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div',
            Acclistindiatoggle2:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div",
            Acclistebhctoggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[2]/transform/div/div[2]/visual-container[2]/transform/div/div[3]/div/div/visual-modern/div/div',
            
            AccPartnerList:"//span[contains(text(), 'Partner List')]",

            AccTHCLiveMonitor:"//span[contains(text(), 'THC Live Monitor')]",
            AccTHCkeyintab:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])",

            twomore:"(//div[@id='box']//span[text()='2 more'])[1]",
            AccTHCMOnthlyInsights:"//span[contains(text(), 'THC Monthly Insights')]",
            ACCTHCMonthlyonsitetab:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',

            AccOnSiteStaffing:"//span[contains(text(), 'On-Site Staffing')]",

            AccProVision:"//span[contains(text(), 'ProVision')]",
            AccProvisionTrendtab:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',

            AccTHCDashboard:"//span[contains(text(), 'THC Dashboard')]",

            //Financials
            FinOverview:"(//span[contains(text(), 'Overview')])[3]",
            FinovTrends:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',

            FinRevenueProjections:"//span[contains(text(), 'Revenue Projections')]",
            FinROWPNL:"//span[contains(text(), 'ROW PNL')]",
            FinPracticePNL:"//span[contains(text(), 'Practice P&L')]",
            eightmore:"//span[contains(text(), '8 more')]",

            FinPortfolioView:"//span[contains(text(), 'Portfolio View')]",
            FinPortfoliotrendstab: '(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',
            FinPorttab1: '(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',
            FinPorttab2: '(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',
            FinPorttab3: '(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[3]',
            FinPorttab4: '(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[6]',
            FinPortfolioMonthlyTab:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[2]',

            FinProjections:"(//span[contains(text(), 'Projections')])[1]",
            FinProjDemandlink:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])',

            FinIndiaPNL:"//span[contains(text(), 'INDIA PNL')]",
            FinPartnershipAlliances:"//span[contains(text(), 'Partnership & Alliances')]",
            FinSGNAPNL:"//span[contains(text(), 'SG&A PNL')]",
            FinUSPNL:"//span[contains(text(), 'US+PNL')]",
            FinConsolidatedPNL:"(//span[contains(text(), 'Consolidated P&L')])[1]",
            FinConsolidatedPNL1:"(//span[contains(text(), 'Consolidated P&L')])[2]",


            //Staffing

            StaffDeliveryHCMix:"//span[contains(text(), 'Delivery HC & Mix')]",
            StaffHCMixdemandlist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[2]',
            StaffHCMixhome:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffHCMixtoggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[7]/transform/div/div[2]/visual-container[1]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffHCMixonsite:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',

            StaffAttritionIndia:"//span[contains(text(), 'Attrition - India (U)')]",

            StaffDeliveryMixDP:"//span[contains(text(), 'Delivery Mix DP')]",
            StaffDeteamlist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',

            StaffPeopleMix:"//span[contains(text(), 'People Mix')]",
            fourmore:"//span[contains(text(), '4 more')]",

            StaffingMetrics:"//span[contains(text(), 'Staffing Metrics')]",
            staffMeAlloclist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[9]',
            staffMeBack:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[3]',
            staffMeFree:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',
            staffMeTraining:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',
            staffMeShadow:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',
            staffMeNB:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[8]',
            staffMeInvest:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[6]',
            staffMeContract:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[7]',
            staffMeA1:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',
            staffMeA1co:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[3]',

            StaffDemand:"//span[contains(text(), 'Demand')]",
            StaffDemhome:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffDemlist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[6]',
            StaffDemHome:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffDemToggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffDemData:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[2]',
            StaffDemHis:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[3]',
            StaffDemHDlist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[4]',

            StaffRampDown:"//span[contains(text(), 'Ramp Down')]",
            StaffRamlist:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[1]',
            StaffHCFTE:"//span[contains(text(), 'HC & FTE')]",
            StaffHctoggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[1]/transform/div/div[2]/visual-container[1]/transform/div/div[3]/div/div/visual-modern/div/div',
            StaffHcAggr:'(//*[local-name()="div" and @aria-label="Page navigation . Click here to follow link"])[2]',
            StaffHctoggleag:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[1]/transform/div/div[2]/visual-container[2]/transform/div/div[3]/div/div/visual-modern/div/div',

            StaffAvailability:"//span[contains(text(), 'Availability')]",

            //Practice

            PractiecOverview:"(//span[contains(text(), 'Overview')])[4]",
            POVSummary:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[1]/transform/div/div[2]/visual-container[2]/transform/div/div[3]/div/div/visual-modern/div',
            POVInvest:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[13]/transform/div/div[3]/div/div/visual-modern/div',
            POVInvestHome:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div',
            POVStaff:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[14]/transform/div/div[3]/div/div/visual-modern/div',
            POVStaffHome:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div',
            POVToggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[9]/transform/div/div[3]/div/div/visual-modern/div/div',
            POVList:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[1]/transform/div/div[2]/visual-container[1]/transform/div/div[3]/div/div/visual-modern/div',
            POVDropdown:'(//*[local-name()="i" and @class="dropdown-chevron powervisuals-glyph chevron-down"])[3]',
            POVEBHC:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[2]',
            POVINV:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[3]',
            POVAvail:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[4]',
            POVDhc:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[5]',
            POVA1:'(//*[local-name()="span" and @class="glyphicon radiobutton checkboxOutlineContrast"])[6]',


            PracticeCapability:"//span[contains(text(), 'Capability')]",
            PCapToggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[2]/transform/div/div[2]/visual-container[2]/transform/div/div[3]/div/div/visual-modern/div/div',


            PracticeEmployee:"(//span[contains(text(), 'Employee')])[1]",
            
            PracticePlanning:"//span[contains(text(), 'Planning')]",
            home:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div',
            PPlHiring:'//div[@class="visual customPadding allow-deferred-rendering visual-actionButton" and contains(.,"Hiring")]',
            PPloffers:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[1]/transform/div/div[2]/visual-container-group/transform/div/div[2]/visual-container/transform/div/div[3]/div/div/visual-modern/div',
            PPlavailability:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[3]/transform/div/div[2]/visual-container-group/transform/div/div[2]/visual-container/transform/div/div[3]/div/div/visual-modern/div',

            tomore:'(// span[contains(text(), "2 more")])[2]',


            insights:"// span[contains(text(), 'Industry Segment Insights')]",
            ininvestment:"//*[@id=container2b9ac957-c142-4a33-69b1-6e103eaf5c78]",
            inebhc:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[16]/transform/div/div[3]/div/div/visual-modern/div/div[1]",
            instaffready:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[13]/transform/div/div[3]/div/div/visual-modern/div/div[1]",
            insg:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[13]/transform/div/div[3]/div/div/visual-modern/div/div[2]",
            insow:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[1]",
            instrat:"(//*[local-name()='div' and @aria-label='Page navigation . Click here to follow link'])[2]",
            inhome:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div",     
            inhome2:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[4]/transform/div/div[3]/div/div/visual-modern/div/div",
            toggle:"//*[@id='pvExplorationHost']/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[6]/transform/div/div[3]/div/div/visual-modern/div/div",


            //US+
            USEmployee:"(//span[contains(text(), 'Employee')])[2]",
            USEmpToggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container[5]/transform/div/div[3]/div/div/visual-modern/div/div',
            USAttrition:"(//span[contains(text(), 'Attrition')])[2]",
            USAttrToggle:'//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-group[9]/transform/div/div[2]/visual-container[3]/transform/div/div[3]/div/div/visual-modern/div/div',
            USPMSCompletionStatus:"//span[contains(text(), 'PMS Completion Status')]",    
    
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

        // Wait for the login page to load
        await loginPage.waitForLoadState();
        console.log("Moved to new window");

        // Interact with the login page
        await loginPage.locator(this.locators.userName).click();
        await this.page.waitForTimeout(3000);

        // Click on Continue and move to home page
        await loginPage.locator(this.locators.signin).click();
        await this.page.waitForTimeout(15000);
    } 

    async Errorpage(){

        // Selecting frame
        await this.page.waitForTimeout(5000);
        const frames = this.page.frames();
        // var valueList = [];

        const title = await frames[1].title();
        console.log(`Frame title: ${title}`); 

        let error_pages=[]
        let no_error_pages=[]


        //Organisation Overview
        await frames[0].locator(this.ErrorpageLocator.OrgOverview).click();
        await this.page.waitForTimeout(2000);
        
        const element = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error=this.count(element)
        console.log(error)
        if (error){
            error_pages.push("Organisation-Overview-"+ element.length)
        }
        else{
            no_error_pages.push("Organisation-Overview")
        }

        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Orgdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgovEBHC).click();
        await this.page.waitForTimeout(2000);

        const element_01 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_01=this.count(element_01)
        console.log(error_01)
        if (error_01){
            error_pages.push("Organisation-Overview-Mom &total-EBHC"+ element_01.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Orgdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgovInvestment).click();
        await this.page.waitForTimeout(2000);

        const element_02 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_02=this.count(element_02)
        console.log(error_02)
        if (error_02){
            error_pages.push("Organisation-Overview-Mom &total-Investment"+ element_02.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Orgdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgovAvailable).click();
        await this.page.waitForTimeout(2000);

        const element_03 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_03=this.count(element_03)
        console.log(error_03)
        if (error_03){
            error_pages.push("Organisation-Overview-Mom &total-Available"+ element_03.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Orgdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgovTotalDHC).click();
        await this.page.waitForTimeout(2000);

        const element_04 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_04=this.count(element_04)
        console.log(error_04)
        if (error_04){
            error_pages.push("Organisation-Overview-Mom &total-Total DHC"+ element_04.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.OrgovMetrics).click();
        await this.page.waitForTimeout(2000);

        const element_06 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_06=this.count(element_06)
        console.log(error_06)
        if (error_06){
            error_pages.push("Organisation-Overview-Metrics"+ element_06.length)
        }
        await this.page.waitForTimeout(2000);

        

        await frames[1].locator(this.ErrorpageLocator.OrgovToggle).click();
        await this.page.waitForTimeout(2000);

        const element_05 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_05=this.count(element_05)
        console.log(error_05)
        if (error_05){
            error_pages.push("Organisation-Overview-Toggle"+ element_05.length)
        }
        await this.page.waitForTimeout(2000);


        await frames[1].locator(this.ErrorpageLocator.OrgovBU).click();
        await this.page.waitForTimeout(2000);

        const element_bu = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_bu=this.count(element_bu)
        console.log(error_bu)
        if (error_bu){
            error_pages.push("Organisation-Overview-BU"+ element_bu.length)
        }
        await this.page.waitForTimeout(2000);


        //Organisation Industry
        await frames[0].locator(this.ErrorpageLocator.OrgIndustries).click();
        await this.page.waitForTimeout(2000);
        
        const element1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error1=this.count(element1)
        console.log(error1)
        if (error1){
            error_pages.push("Organisation-Industry-"+ element1.length)
        }

        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgIndMomToggle2).click();
        await this.page.waitForTimeout(2000);

        const elementind_1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const errorind_1=this.count(elementind_1)
        console.log(errorind_1)
        if (errorind_1){
            error_pages.push("Organisation-Industry-MomToggle"+ elementind_1.length)
        }

        await this.page.waitForTimeout(2000);

        // await frames[1].locator(this.ErrorpageLocator.OrgIndLink).click();
        // await this.page.waitForTimeout(2000);

        // const elementind_3 = await frames[1].locator("//a[@title='See details']").elementHandles();
        // const errorind_3=this.count(elementind_3)
        // console.log(errorind_3)
        // if (errorind_3){
        //     error_pages.push("Organisation-Industry-AC Segment Link"+ elementind_3.length)
        // }
        // await this.page.waitForTimeout(2000);

        // await frames[1].locator(this.ErrorpageLocator.OrgIndHome).click();


        await frames[1].locator(this.ErrorpageLocator.OrgIndSowToggle1).click();
        await this.page.waitForTimeout(2000);

        const elementind_2 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const errorind_2=this.count(elementind_2)
        console.log(errorind_2)
        if (errorind_2){
            error_pages.push("Organisation-Industry-SowToggle"+ elementind_2.length)
        }

        await this.page.waitForTimeout(1000);

        


        // //Organisation Attrition - India

        // await frames[0].locator(this.ErrorpageLocator.OrgAttrition).click();
        // await this.page.waitForTimeout(2000);
        
        // const element3 = await frames[1].locator("//a[@title='See details']").elementHandles();
        // const error3=this.count(element3)
        // console.log(error3)
        // if (error3){
        //     error_pages.push("Organisation-Atrrition-"+ element3.length)
        // }
        // else{
        //     no_error_pages.push("Organisation-Atrrition")
        // }

        // await this.page.waitForTimeout(3000);

        //  //Organisation-OneData Usage Metrics

        //  await frames[0].locator(this.ErrorpageLocator.OrgOnedataUsage).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element4 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error4=this.count(element4)
        //  console.log(error4)
        //  if (error4){
        //      error_pages.push("Organisation-Onedata Usage Metrics-"+ element4.length)
        //  }
        //  else{
        //      no_error_pages.push("Organisation-Onedata Usage Metrics")
        //  }
 
        //  await this.page.waitForTimeout(5000);

        //Organisation Employee - india

        await frames[0].locator(this.ErrorpageLocator.threemore).click();

        await frames[0].locator(this.ErrorpageLocator.OrgEmployee).click();
        await this.page.waitForTimeout(2000);
        
        const element2 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error2=this.count(element2)
        console.log(error2)
        if (error2){
            error_pages.push("Organisation-Employee-"+ element2.length)
        }
        else{
            no_error_pages.push("Organisation-Employee")
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgEmpMetrics).click();
        await this.page.waitForTimeout(2000);

        const element_emp1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_emp1=this.count(element_emp1)
        console.log(error_emp1)
        if (error_emp1){
            error_pages.push("Organisation-Employee-Metrics"+ element_emp1.length)
        }
        await this.page.waitForTimeout(2000);

        // await frames[1].locator(this.ErrorpageLocator.OrgEmpLink).click();
        // await this.page.waitForTimeout(2000);

        // const element_emp2 = await frames[1].locator("//a[@title='See details']").elementHandles();
        // const error_emp2=this.count(element_emp2)
        // console.log(error_emp2)
        // if (error_emp2){
        //     error_pages.push("Organisation-Employee- Anniversary Link"+ element_emp2.length)
        // }
        // await this.page.waitForTimeout(3000);


        //  //Organisation-Gender Diversity

        //  await frames[0].locator(this.ErrorpageLocator.OrgGender).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element5 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error5=this.count(element5)
        //  console.log(error5)
        //  if (error5){
        //      error_pages.push("Organisation-Gender Diversity-"+ element5.length)
        //  }
        //  else{
        //      no_error_pages.push("Organisation-Gender Diversity")
        //  }
        //  await this.page.waitForTimeout(5000);
 


         //Organisation-Financial Performance

         await frames[0].locator(this.ErrorpageLocator.OrgFinancial).click();
         await this.page.waitForTimeout(2000);
         
         const element6 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error6=this.count(element6)
         console.log(error6)
         if (error6){
             error_pages.push("Organisation-Financial Performance-"+ element6.length)
         }
         await this.page.waitForTimeout(2000);

         await frames[1].locator(this.ErrorpageLocator.OrgFintab1).click();
        await this.page.waitForTimeout(2000);

        const element_tab1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab1=this.count(element_tab1)
        console.log(error_tab1)
        if (error_tab1){
            error_pages.push("Organisation-Financials-Revenue&FTE"+ element_tab1.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab2).click();
        await this.page.waitForTimeout(2000);

        const element_tab2 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab2=this.count(element_tab2)
        console.log(error_tab2)
        if (error_tab2){
            error_pages.push("Organisation-Financials-Offshore mix"+ element_tab2.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab3).click();
        await this.page.waitForTimeout(2000);

        const element_tab3 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab3=this.count(element_tab3)
        console.log(error_tab3)
        if (error_tab3){
            error_pages.push("Organisation-Financials-INVCost"+ element_tab3.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab4).click();
        await this.page.waitForTimeout(2000);

        const element_tab4 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab4 =this.count(element_tab4)
        console.log(error_tab4)
        if (error_tab4){
            error_pages.push("Organisation-Financials-GrossMargin"+ element_tab4.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab5).click();
        await this.page.waitForTimeout(2000);

        const element_tab5 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab5=this.count(element_tab5)
        console.log(error_tab5)
        if (error_tab5){
            error_pages.push("Organisation-Financials-TopRevenue"+ element_tab5.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab5toggle).click();
        await this.page.waitForTimeout(2000);

        const element_tabtog5 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tabtog5=this.count(element_tabtog5)
        console.log(error_tabtog5)
        if (error_tabtog5){
            error_pages.push("Organisation-Financials-Top Revenue-Toggle"+ element_tabtog5.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab6).click();
        await this.page.waitForTimeout(2000);

        const element_tab6 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab6=this.count(element_tab6)
        console.log(error_tab6)
        if (error_tab6){
            error_pages.push("Organisation-Financials-TOP10"+ element_tab6.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab7).click();
        await this.page.waitForTimeout(2000);

        const element_tab7 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab7=this.count(element_tab7)
        console.log(error_tab7)
        if (error_tab7){
            error_pages.push("Organisation-Financials-BULevelRev"+ element_tab7.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab8).click();
        await this.page.waitForTimeout(2000);

        const element_tab8= await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab8=this.count(element_tab8)
        console.log(error_tab8)
        if (error_tab8){
            error_pages.push("Organisation-Financials-Offshore Pyramid"+ element_tab8.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab9).click();
        await this.page.waitForTimeout(2000);

        const element_tab9 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tab9=this.count(element_tab9)
        console.log(error_tab9)
        if (error_tab9){
            error_pages.push("Organisation-Financials-Utilization"+ element_tab9.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.OrgFintab9toggle).click();
        await this.page.waitForTimeout(2000);

        const element_tabtog9 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_tabtog9=this.count(element_tabtog9)
        console.log(error_tabtog9)
        if (error_tabtog9){
            error_pages.push("Organisation-Financials-Utilization-Toggle"+ element_tabtog9.length)
        }
        await this.page.waitForTimeout(1000);



         //Account-Overview

         await frames[0].locator(this.ErrorpageLocator.AccOverview).click();
         await this.page.waitForTimeout(2000);
         
         const element7 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error7=this.count(element7)
         console.log(error7)
         if (error7){
             error_pages.push("Account-Overview - "+ element7.length)
         }
 
         await this.page.waitForTimeout(2000);

         await frames[1].locator(this.ErrorpageLocator.Accdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccovEBHC).click();
        await this.page.waitForTimeout(2000);

        const element_acc01 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_acc01=this.count(element_acc01)
        console.log(error_acc01)
        if (error_acc01){
            error_pages.push("Account-Overview-Mom &total-EBHC"+ element_acc01.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Accdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccovInvestment).click();
        await this.page.waitForTimeout(2000);

        const element_acc02 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_acc02=this.count(element_acc02)
        console.log(error_acc02)
        if (error_acc02){
            error_pages.push("Account-Overview-Mom &total-Investment"+ element_acc02.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Accdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccovAvailable).click();
        await this.page.waitForTimeout(2000);

        const element_acc03 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_acc03=this.count(element_acc03)
        console.log(error_acc03)
        if (error_acc03){
            error_pages.push("Account-Overview-Mom &total-Available"+ element_acc03.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Accdropdown).click();
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccovTotalDHC).click();
        await this.page.waitForTimeout(2000);

        const element_acc04 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_acc04=this.count(element_acc04)
        console.log(error_acc04)
        if (error_acc04){
            error_pages.push("Account-Overview-Mom &total-Total DHC"+ element_acc04.length)
        }
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.AccovToggle).click();
        await this.page.waitForTimeout(2000);

        const element_acctog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_acctog=this.count(element_acctog)
        console.log(error_acctog)
        if (error_acctog){
            error_pages.push("Account-Overview-Metrics"+ element_acctog.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccovTeamLink).click();
        await this.page.waitForTimeout(2000);

        const element_accteam = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accteam=this.count(element_accteam)
        console.log(error_accteam)
        if (error_accteam){
            error_pages.push("Account-Overview-Teamlink"+ element_accteam.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccTeamHome).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.AccovDemandLink).click();
        await this.page.waitForTimeout(2000);

        const element_accdemand = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accdemand=this.count(element_accdemand)
        console.log(error_accdemand)
        if (error_accdemand){
            error_pages.push("Account-Overview-Demandlink"+ element_accdemand.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.AccDemToggle).click();
        await this.page.waitForTimeout(2000);

        const element_accdemTog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accdemtog=this.count(element_accdemTog)
        console.log(error_accdemtog)
        if (error_accdemtog){
            error_pages.push("Account-Overview-Demand Link Toggle"+ element_accdemTog.length)
        }
        await this.page.waitForTimeout(1000);

       


         //Account - Account List
         
         await frames[0].locator(this.ErrorpageLocator.AccountList).click();
         await this.page.waitForTimeout(2000);
         
         const element8 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error8=this.count(element8)
         console.log(error8)
         if (error8){
             error_pages.push("Account List - "+ element8.length)
         }

         await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.Acclistindiatoggle).click();
        await this.page.waitForTimeout(2000);

        const element_accindiatog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accindiatog=this.count(element_accindiatog)
        console.log(error_accindiatog)
        if (error_accindiatog){
            error_pages.push("Account List-US+ Toggle"+ element_accindiatog.length)
        }

        await frames[1].locator(this.ErrorpageLocator.Acclistindiatoggle2).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.Acclistebhctoggle).click();
        await this.page.waitForTimeout(2000);

        const element_accebhctog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accebhctog=this.count(element_accebhctog)
        console.log(error_accebhctog)
        if (error_accebhctog){
            error_pages.push("Account List-EBHC Toggle"+ element_accebhctog.length)
        }
        await this.page.waitForTimeout(1000);

         //Account-PartnerList
         
         await frames[0].locator(this.ErrorpageLocator.AccPartnerList).click();
         await this.page.waitForTimeout(2000);
         
         const element9 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error9=this.count(element9)
         console.log(error9)
         if (error9){
             error_pages.push("Account-PartnerList - "+ element9.length)
         }
 
         await this.page.waitForTimeout(1000);

         //Account - THC Live Monitor
         
         await frames[0].locator(this.ErrorpageLocator.AccTHCLiveMonitor).click();
         await this.page.waitForTimeout(2000);
         
         const element10 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error10=this.count(element10)
         console.log(error10)
         if (error10){
             error_pages.push("Account-THC Live Monitor-THC Monitor "+ element10.length)
         }
 
         await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.AccTHCkeyintab).click();
        await this.page.waitForTimeout(2000);

        const element_accthckeytab = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accthckeytab=this.count(element_accthckeytab)
        console.log(error_accthckeytab)
        if (error_accthckeytab){
            error_pages.push("Account-THC Live Monitor-Key INsights"+ element_accthckeytab.length)
        }
        await this.page.waitForTimeout(2000);

        

         //Account - THC Monthly Insights

         await frames[0].locator(this.ErrorpageLocator.twomore).click();
         
         await frames[0].locator(this.ErrorpageLocator.AccTHCMOnthlyInsights).click();
         await this.page.waitForTimeout(2000);
         
         const element11 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error11=this.count(element11)
         console.log(error11)
         if (error11){
             error_pages.push("Account-THC Monthly Insights-Offshore "+ element11.length)
         }
         
         await this.page.waitForTimeout(2000);

         await frames[1].locator(this.ErrorpageLocator.ACCTHCMonthlyonsitetab).click();
        await this.page.waitForTimeout(2000);

        const element_accmonthlytab = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accmonthlytab=this.count(element_accmonthlytab)
        console.log(error_accmonthlytab)
        if (error_accmonthlytab){
            error_pages.push("Account-THC Monthly Insights-Onsite"+ element_accmonthlytab.length)
        }
        await this.page.waitForTimeout(2000);

        //  //Account - On-Site Staffing
         
        //  await frames[0].locator(this.ErrorpageLocator.AccOnSiteStaffing).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element12 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error12=this.count(element12)
        //  console.log(error12)
        //  if (error12){
        //      error_pages.push("Account-On-Site Staffing- "+ element12.length)
        //  }
        //  else{
        //      no_error_pages.push("Account-On-Site Staffing")
        //  }
 
        //  await this.page.waitForTimeout(3000);

         //Account - ProVision
         
         await frames[0].locator(this.ErrorpageLocator.AccProVision).click();
         await this.page.waitForTimeout(2000);
         
         const element13 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error13=this.count(element13)
         console.log(error13)
         if (error13){
             error_pages.push("Account-ProVision-Summary"+ element13.length)
         }
 
         await this.page.waitForTimeout(2000);

         await frames[1].locator(this.ErrorpageLocator.AccProvisionTrendtab).click();
        await this.page.waitForTimeout(2000);

        const element_accprovtab = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_accprovtab=this.count(element_accprovtab)
        console.log(error_accprovtab)
        if (error_accprovtab){
            error_pages.push("Account-ProVision-Trends"+ element_accprovtab.length)
        }
        await this.page.waitForTimeout(2000);

        //  //Account - THC Dashboard
         
        //  await frames[0].locator(this.ErrorpageLocator.AccTHCDashboard).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element14 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error14=this.count(element13)
        //  console.log(error14)
        //  if (error14){
        //      error_pages.push("Account-THC Dashboard - "+ element14.length)
        //  }
        //  else{
        //      no_error_pages.push("THC Dashboard")
        //  }
 
        //  await this.page.waitForTimeout(4000);

        //Financials - Overview
         await frames[0].locator(this.ErrorpageLocator.FinOverview).click();
         await this.page.waitForTimeout(2000);
         
         const element15 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error15=this.count(element15)
         console.log(error15)
         if (error15){
             error_pages.push("Financials-Overview "+ element15.length)
         }
         
         await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinovTrends).click();
        await this.page.waitForTimeout(2000);

        const element_finovtrend = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_finovtrend=this.count(element_finovtrend)
        console.log(error_finovtrend)
        if (error_finovtrend){
            error_pages.push("Financials-Overview-Trends"+ element_finovtrend.length)
        }
        await this.page.waitForTimeout(1000);

        //  //Financials - Revenue Projections
        //  await frames[0].locator(this.ErrorpageLocator.FinRevenueProjections).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element16 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error16=this.count(element16)
        //  console.log(error16)
        //  if (error16){
        //      error_pages.push("Financials-Revenue Projections - "+ element16.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - Revenue Projections")
        //  }
 
        //  await this.page.waitForTimeout(4000);

        //  //Financials - ROW PNL
        //  await frames[0].locator(this.ErrorpageLocator.FinROWPNL).click();
        //  await this.page.waitForTimeout(2000);
         
        //  const element17 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error17=this.count(element17)
        //  console.log(error17)
        //  if (error17){
        //      error_pages.push("Financials-ROW PNL - "+ element17.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - ROW PNL")
        //  }
 
        //  await this.page.waitForTimeout(3000);

        //  //Financials - Practice P&L
        //  await frames[0].locator(this.ErrorpageLocator.FinPracticePNL).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element18 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error18=this.count(element18)
        //  console.log(error18)
        //  if (error18){
        //      error_pages.push("Financials-Practice P&L - "+ element18.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - Practice P&L")
        //  }
 
        //  await this.page.waitForTimeout(3000);

        //  //Financials - Portfolio View

         await frames[0].locator(this.ErrorpageLocator.FinPortfolioView).click();
         await this.page.waitForTimeout(3000);
         
         const element19 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error19=this.count(element19)
         console.log(error19)
         if (error19){
             error_pages.push("Financials-Portfolio View -Snapshot "+ element19.length)
         }
         await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPortfoliotrendstab).click();
        await this.page.waitForTimeout(2000);

        const element_finporttrend = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_finporttrend=this.count(element_finporttrend)
        console.log(error_finporttrend)
        if (error_finporttrend){
            error_pages.push("Financials-Portfolio View -Trends"+ element_finporttrend.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPorttab1).click();
        await this.page.waitForTimeout(2000);

        const element_fintab1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_fintab1=this.count(element_fintab1)
        console.log(error_fintab1)
        if (error_fintab1){
            error_pages.push("Financials-Portfolio View -Revenue by Geo"+ element_fintab1.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPorttab2).click();
        await this.page.waitForTimeout(2000);

        const element_fintab2= await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_fintab2=this.count(element_fintab2)
        console.log(error_fintab2)
        if (error_fintab2){
            error_pages.push("Financials-Portfolio view-Inv&Billing rate"+ element_fintab2.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPorttab3).click();
        await this.page.waitForTimeout(2000);

        const element_fintab3 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_fintab3=this.count(element_fintab3)
        console.log(error_fintab3)
        if (error_fintab3){
            error_pages.push("Financials-Portfolio view-Net Add Offshore"+ element_fintab3.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPorttab4).click();
        await this.page.waitForTimeout(2000);

        const element_fintab4 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_fintab4=this.count(element_fintab4)
        console.log(error_fintab4)
        if (error_fintab4){
            error_pages.push("Financials-Portfolio view-Net Add Onsite"+ element_fintab4.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.FinPortfolioMonthlyTab).click();
        await this.page.waitForTimeout(2000);

        const element_finportmonthtab = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_finportmonthtab=this.count(element_finportmonthtab)
        console.log(error_finportmonthtab)
        if (error_finportmonthtab){
            error_pages.push("Financials-Portfolio view-Monthly Report"+ element_finportmonthtab.length)
        }
        await this.page.waitForTimeout(1000);



        //  Financials - Projections
         await frames[0].locator(this.ErrorpageLocator.FinProjections).click();
         await this.page.waitForTimeout(4000);
         
         const element20 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error20=this.count(element20)
         console.log(error20)
         if (error20){
             error_pages.push("Financials-Projections - "+ element20.length)
         }
    
         await this.page.waitForTimeout(1000);

         await frames[1].locator(this.ErrorpageLocator.FinProjDemandlink).click();
        await this.page.waitForTimeout(2000);

        const element_finprojlink= await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_finprojlink=this.count(element_finprojlink)
        console.log(error_finprojlink)
        if (error_finprojlink){
            error_pages.push("Financials-Projections-Demand Link"+ element_finprojlink.length)
        }
        await this.page.waitForTimeout(1000);


        //  //Financials - INDIA PNL
        //  await frames[0].locator(this.ErrorpageLocator.FinIndiaPNL).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element21 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error21=this.count(element21)
        //  console.log(error21)
        //  if (error21){
        //      error_pages.push("Financials-INDIA PNL - "+ element21.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - INDIA PNL")
        //  }
 
        //  await this.page.waitForTimeout(3000)

        //Financials - Partnership & Alliances
         await frames[0].locator(this.ErrorpageLocator.FinPartnershipAlliances).click();
         await this.page.waitForTimeout(4000);
         
         const element22 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error22=this.count(element22)
         console.log(error22)
         if (error22){
             error_pages.push("Financials-Partnership & Alliances - "+ element22.length)
         }
         else{
             no_error_pages.push("Financials - Partnership & Alliances")
         }
 
         await this.page.waitForTimeout(3000)

        //  //Financials - SG&A PNL
        //  await frames[0].locator(this.ErrorpageLocator.FinSGNAPNL).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element23 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error23=this.count(element23)
        //  console.log(error23)
        //  if (error23){
        //      error_pages.push("Financials-SG&A PNL - "+ element23.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - SG&A PNL")
        //  }
 
        //  await this.page.waitForTimeout(3000)


        //  //Financials -  US+PNL
        //  await frames[0].locator(this.ErrorpageLocator.FinUSPNL).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element24 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error24=this.count(element24)
        //  console.log(error24)
        //  if (error24){
        //      error_pages.push("Financials-US+PNL - "+ element24.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - US+PNL")
        //  }
 
        //  await this.page.waitForTimeout(4000)

        //  //Financials -  Consolidated PNL
        //  await frames[0].locator(this.ErrorpageLocator.FinConsolidatedPNL).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element25 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error25=this.count(element25)
        //  console.log(error25)
        //  if (error25){
        //      error_pages.push("Financials-Consolidated PNL - "+ element25.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - Consolidated PNL")
        //  }
 
        //  await this.page.waitForTimeout(3000)

        //  //Financials -  Consolidated PNL_1
        //  await frames[0].locator(this.ErrorpageLocator.FinConsolidatedPNL1).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element26 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error26=this.count(element26)
        //  console.log(error26)
        //  if (error26){
        //      error_pages.push("Financials-Consolidated PNL_1 - "+ element26.length)
        //  }
        //  else{
        //      no_error_pages.push("Financials - Consolidated PNL_1")
        //  }
 
        //  await this.page.waitForTimeout(3000)

        //Staffing -  Delivery HC & Mix
         await frames[0].locator(this.ErrorpageLocator.StaffDeliveryHCMix).click();
         await this.page.waitForTimeout(4000);
         
         const element27 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error27=this.count(element27)
         console.log(error27)
         if (error27){
             error_pages.push("Staffing-Delivery HC & Mix - "+ element27.length)
         }
 
         await this.page.waitForTimeout(1000)


         await frames[1].locator(this.ErrorpageLocator.StaffHCMixdemandlist).click();
         await this.page.waitForTimeout(2000);

        const element_staffhclink = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffhclink=this.count(element_staffhclink)
        console.log(error_staffhclink)
        if (error_staffhclink){
            error_pages.push("Staffing-Delivery HC & Mix -DemandList"+ element_staffhclink.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.StaffHCMixhome).click();
        await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.StaffHCMixtoggle).click();
        await this.page.waitForTimeout(2000);

        const element_staffhctoggle = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffhctoggle=this.count(element_staffhctoggle)
        console.log(error_staffhctoggle)
        if (error_staffhctoggle){
            error_pages.push("Staffing-Delivery HC & Mix -Toggle"+ element_staffhctoggle.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.StaffHCMixonsite).click();
        await this.page.waitForTimeout(2000);

        const element_staffhconsite = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffhconsite=this.count(element_staffhconsite)
        console.log(error_staffhconsite)
        if (error_staffhconsite){
            error_pages.push("Staffing-Delivery HC & Mix -Onsite"+ element_staffhconsite.length)
        }
        await this.page.waitForTimeout(1000);



        //  //Staffing -  Attrition - India (U)
        //  await frames[0].locator(this.ErrorpageLocator.StaffAttritionIndia).click();
        //  await this.page.waitForTimeout(4000);
         
        //  const element28 = await frames[1].locator("//a[@title='See details']").elementHandles();
        //  const error28=this.count(element28)
        //  console.log(error28)
        //  if (error28){
        //      error_pages.push("Staffing-Attrition - India (U) - "+ element28.length)
        //  }
        //  else{
        //      no_error_pages.push("Staffing -Attrition - India (U)")
        //  }
 
        //  await this.page.waitForTimeout(3000)

         //Staffing - Delivery Mix DP
         await frames[0].locator(this.ErrorpageLocator.StaffDeliveryMixDP).click();
         await this.page.waitForTimeout(4000);
         
         const element29 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error29=this.count(element29)
         console.log(error29)
         if (error29){
             error_pages.push("Staffing-Delivery Mix DP - "+ element29.length)
         }
        //  else{
        //      no_error_pages.push("Staffing - Delivery Mix DP")
        //  }
        await this.page.waitForTimeout(3000)

         await frames[1].locator(this.ErrorpageLocator.StaffDeteamlist).click();
        await this.page.waitForTimeout(2000);

        const element_staffdeteam = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffdeteam=this.count(element_staffdeteam)
        console.log(error_staffdeteam)
        if (error_staffdeteam){
            error_pages.push("Staffing-Delivery Mix DP-Team List"+ element_staffdeteam.length)
        }
        await this.page.waitForTimeout(1000)
 
         await this.page.waitForTimeout(3000)

         //Staffing - People Mix
         await frames[0].locator(this.ErrorpageLocator.StaffPeopleMix).click();
         await this.page.waitForTimeout(4000);
         
         const element30 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error30=this.count(element30)
         console.log(error30)
         if (error30){
             error_pages.push("Staffing-People Mix - "+ element30.length)
         }
        //  else{
        //      no_error_pages.push("Staffing - People Mix")
        //  }
 
         await this.page.waitForTimeout(3000)
         

         

         //Staffing Metrics
         await frames[0].locator(this.ErrorpageLocator.StaffingMetrics).click();
         await this.page.waitForTimeout(4000);
         
         const element31 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error31=this.count(element31)
         console.log(error31)
         if (error31){
             error_pages.push("Staffing Metrics - "+ element31.length)
         }
         else{
             no_error_pages.push("Staffing Metrics")
         }
 
         await this.page.waitForTimeout(3000)

         

        await frames[1].locator(this.ErrorpageLocator.staffMeAlloclist).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeall = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeall=this.count(element_staffMeall)
        console.log(error_staffMeall)
        if (error_staffMeall){
            error_pages.push("Staffing Metrics-Allocation List"+ element_staffMeall.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeBack).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeBack = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeBack=this.count(element_staffMeBack)
        console.log(error_staffMeBack)
        if (error_staffMeBack){
            error_pages.push("Staffing Metrics-BACK"+ element_staffMeBack.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeFree).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeFree = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeFree=this.count(element_staffMeFree)
        console.log(error_staffMeFree)
        if (error_staffMeFree){
            error_pages.push("Staffing Metrics-Free"+ element_staffMeFree.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeTraining).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeTraining = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeTraining=this.count(element_staffMeTraining)
        console.log(error_staffMeTraining)
        if (error_staffMeTraining){
            error_pages.push("Staffing Metrics-Training"+ element_staffMeTraining.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeShadow).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeShadow = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeShadow=this.count(element_staffMeShadow)
        console.log(error_staffMeShadow)
        if (error_staffMeShadow){
            error_pages.push("Staffing Metrics-Shadow"+ element_staffMeShadow.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.staffMeNB).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeNB = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeNB=this.count(element_staffMeNB)
        console.log(error_staffMeNB)
        if (error_staffMeNB){
            error_pages.push("Staffing Metrics-NB Cap Flex"+ element_staffMeNB.length)
        }
        await this.page.waitForTimeout(1000);



        await frames[1].locator(this.ErrorpageLocator.staffMeInvest).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeInvest = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeInvest=this.count(element_staffMeInvest)
        console.log(error_staffMeInvest)
        if (error_staffMeInvest){
            error_pages.push("Staffing Metrics-Investment"+ element_staffMeInvest.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeContract).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeContract = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeContract=this.count(element_staffMeContract)
        console.log(error_staffMeContract)
        if (error_staffMeContract){
            error_pages.push("Staffing Metrics-Contractor"+ element_staffMeContract.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.staffMeA1).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeA1 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeA1=this.count(element_staffMeA1)
        console.log(error_staffMeA1)
        if (error_staffMeA1){
            error_pages.push("Staffing Metrics-A1 Account Summary"+ element_staffMeA1.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.staffMeA1co).click();
        await this.page.waitForTimeout(2000);

        const element_staffMeA1co = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_staffMeA1co=this.count(element_staffMeA1co)
        console.log(error_staffMeA1co)
        if (error_staffMeA1co){
            error_pages.push("Staffing Metrics-A1 Contribution"+ element_staffMeA1co.length)
        }
        await this.page.waitForTimeout(1000);
    

         //Staffing - Demands

         await frames[0].locator(this.ErrorpageLocator.fourmore).click();
         await frames[0].locator(this.ErrorpageLocator.StaffDemand).click();
         await this.page.waitForTimeout(4000);
         
         const element32 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error32=this.count(element32)
         console.log(error32)
         if (error32){
             error_pages.push("Staffing-Demands - "+ element32.length)
         }
         else{
             no_error_pages.push("Staffing - Demands")
         }
 
         await this.page.waitForTimeout(3000)

         await frames[1].locator(this.ErrorpageLocator.StaffDemlist).click();
        await this.page.waitForTimeout(2000);

        const element_StaffDemlist = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffDemlist=this.count(element_StaffDemlist)
        console.log(error_StaffDemlist)
        if (error_StaffDemlist){
            error_pages.push("Staffing-Demands -Demand list"+ element_StaffDemlist.length)
        }
        await this.page.waitForTimeout(1000);
        await frames[1].locator(this.ErrorpageLocator.StaffDemhome).click();
        await this.page.waitForTimeout(2000);
        

        await frames[1].locator(this.ErrorpageLocator.StaffDemToggle).click();
        await this.page.waitForTimeout(2000);

        const element_StaffDemToggle = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffDemToggle=this.count(element_StaffDemToggle)
        console.log(error_StaffDemToggle)
        if (error_StaffDemToggle){
            error_pages.push("Staffing-Demands -Toggle"+ element_StaffDemToggle.length)
        }
        await this.page.waitForTimeout(1000);

        await frames[1].locator(this.ErrorpageLocator.StaffDemData).click();
        await this.page.waitForTimeout(2000);

        const element_StaffDemData = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffDemData=this.count(element_StaffDemData)
        console.log(error_StaffDemData)
        if (error_StaffDemData){
            error_pages.push("Staffing-Demands -Data view"+ element_StaffDemData.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.StaffDemHis).click();
        await this.page.waitForTimeout(2000);

        const element_StaffDemHis = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffDemHis=this.count(element_StaffDemHis)
        console.log(error_StaffDemHis)
        if (error_StaffDemHis){
            error_pages.push("Staffing-Demands -Historical"+ element_StaffDemHis.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.StaffDemHDlist).click();
        await this.page.waitForTimeout(2000);

        const element_StaffDemHDlist = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffDemHDlist=this.count(element_StaffDemHDlist)
        console.log(error_StaffDemHDlist)
        if (error_StaffDemHDlist){
            error_pages.push("Staffing-Demands -HisDemand List"+ element_StaffDemHDlist.length)
        }
        await this.page.waitForTimeout(1000);



         //Staffing - Ramp Down
         await frames[0].locator(this.ErrorpageLocator.StaffRampDown).click();
         await this.page.waitForTimeout(4000);
         
         const element33 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error33=this.count(element33)
         console.log(error33)
         if (error33){
             error_pages.push("Staffing-Ramp Down - "+ element33.length)
         }
         else{
             no_error_pages.push("Staffing - Ramp Down")
         }
 
         await this.page.waitForTimeout(3000)

         await frames[1].locator(this.ErrorpageLocator.StaffRamlist).click();
        await this.page.waitForTimeout(2000);

        const element_StaffRamlist = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffRamlist=this.count(element_StaffRamlist)
        console.log(error_StaffRamlist)
        if (error_StaffRamlist){
            error_pages.push("Staffing - Ramp Down-Ramp list"+ element_StaffRamlist.length)
        }
        await this.page.waitForTimeout(1000);

         //Staffing - HC & FTE
         await frames[0].locator(this.ErrorpageLocator.StaffHCFTE).click();
         await this.page.waitForTimeout(4000);
         
         const element34 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error34=this.count(element34)
         console.log(error34)
         if (error34){
             error_pages.push("Staffing-HC & FTE - "+ element34.length)
         }
         else{
             no_error_pages.push("Staffing - HC & FTE")
         }
 
         await this.page.waitForTimeout(3000)

         await frames[1].locator(this.ErrorpageLocator.StaffHctoggle).click();
        await this.page.waitForTimeout(2000);

        const element_StaffHctoggle = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffHctoggle=this.count(element_StaffHctoggle)
        console.log(error_StaffHctoggle)
        if (error_StaffHctoggle){
            error_pages.push("Staffing - HC & FTE-Toggle"+ element_StaffHctoggle.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.StaffHcAggr).click();
        await this.page.waitForTimeout(2000);

        const element_StaffHcAggr = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffHcAggr=this.count(element_StaffHcAggr)
        console.log(error_StaffHcAggr)
        if (error_StaffHcAggr){
            error_pages.push("OStaffing - HC & FTE-Aggr.FTE"+ element_StaffHcAggr.length)
        }
        await this.page.waitForTimeout(1000);


        await frames[1].locator(this.ErrorpageLocator.StaffHctoggleag).click();
        await this.page.waitForTimeout(2000);

        const element_StaffHctoggleag = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_StaffHctoggleag=this.count(element_StaffHctoggleag)
        console.log(error_StaffHctoggleag)
        if (error_StaffHctoggleag){
            error_pages.push("Staffing - HC & FTE-Aggr Toggle"+ StaffHctoggleag.length)
        }
        await this.page.waitForTimeout(1000);


         //Staffing - Availabaility
         await frames[0].locator(this.ErrorpageLocator.StaffAvailability).click();
         await this.page.waitForTimeout(4000);
         
         const element35 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error35=this.count(element35)
         console.log(error35)
         if (error35){
             error_pages.push("Staffing-Availabaility - "+ element35.length)
         }
         else{
             no_error_pages.push("Staffing - Availabaility")
         }
 
         await this.page.waitForTimeout(3000)

        //  //Practice - Overview
        await frames[0].locator(this.ErrorpageLocator.PractiecOverview).click();
        await this.page.waitForTimeout(4000);
        
        const element36 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error36=this.count(element36)
        console.log(error36)
        if (error36){
            error_pages.push("Practice-Overview - "+ element36.length)
        }
        
        await this.page.waitForTimeout(3000)

        await frames[1].locator(this.ErrorpageLocator.POVList).click();
       await this.page.waitForTimeout(2000);

       const element_POVList = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVList=this.count(element_POVList)
       console.log(error_POVList)
       if (error_POVList){
           error_pages.push("Practice-Overview-List"+ POVList.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVSummary).click();
       await this.page.waitForTimeout(2000);

        await frames[1].locator(this.ErrorpageLocator.POVInvest).click();
       await this.page.waitForTimeout(2000);

       const element_POVInvest = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVInvest=this.count(element_POVInvest)
       console.log(error_POVInvest)
       if (error_POVInvest){
           error_pages.push("Practice-Overview-Investment"+ POVInvest.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVInvestHome).click();
        await this.page.waitForTimeout(2000)

       await frames[1].locator(this.ErrorpageLocator.POVStaff).click();
       await this.page.waitForTimeout(2000);

       const element_POVStaff = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVStaff=this.count(element_POVStaff)
       console.log(error_POVStaff)
       if (error_POVStaff){
           error_pages.push("Practice-Overview-Staffing Ready"+ POVStaff.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVStaffHome).click();
       await this.page.waitForTimeout(2000)

       await frames[1].locator(this.ErrorpageLocator.POVToggle).click();
       await this.page.waitForTimeout(2000);

       const element_POVToggle = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVToggle=this.count(element_POVToggle)
       console.log(error_POVToggle)
       if (error_POVToggle){
           error_pages.push("Organisation-Overview-Toggle"+ POVToggle.length)
       }
       await this.page.waitForTimeout(1000)


       await frames[1].locator(this.ErrorpageLocator.POVDropdown).click();
       await this.page.waitForTimeout(2000);


       await frames[1].locator(this.ErrorpageLocator.POVEBHC).click();
       await this.page.waitForTimeout(2000);

       const element_POVEBHC = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVEBHC=this.count(element_POVEBHC)
       console.log(error_POVEBHC)
       if (error_POVEBHC){
           error_pages.push("Practice-Overview-Dropdown EBHC"+ POVEBHC.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVDropdown).click();
       await this.page.waitForTimeout(1000);


       await frames[1].locator(this.ErrorpageLocator.POVINV).click();
       await this.page.waitForTimeout(2000);

       const element_POVINV = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVINV=this.count(element_POVINV)
       console.log(error_POVINV)
       if (error_POVINV){
           error_pages.push("Practice-Overview-Dropdown -INVESTMENT"+ POVINV.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVDropdown).click();
       await this.page.waitForTimeout(1000);

       await frames[1].locator(this.ErrorpageLocator.POVAvail).click();
       await this.page.waitForTimeout(2000);

       const element_POVAvail = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVAvail=this.count(element_POVAvail)
       console.log(error_POVAvail)
       if (error_POVAvail){
           error_pages.push("Practice-Overview-Dropdown -Availability"+ POVAvail.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVDropdown).click();
       await this.page.waitForTimeout(1000);

       await frames[1].locator(this.ErrorpageLocator.POVDhc).click();
       await this.page.waitForTimeout(2000);

       const element_POVDhc = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVDhc=this.count(element_POVDhc)
       console.log(error_POVDhc)
       if (error_POVDhc){
           error_pages.push("Practice-Overview-Dropdown -Total DHC"+ POVDhc.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.POVDropdown).click();
       await this.page.waitForTimeout(1000);


       await frames[1].locator(this.ErrorpageLocator.POVA1).click();
       await this.page.waitForTimeout(2000);

       const element_POVA1 = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_POVA1=this.count(element_POVA1)
       console.log(error_POVA1)
       if (error_POVA1){
           error_pages.push("Practice-Overview-Dropdown A1 Contribution"+ POVA1.length)
       }
       await this.page.waitForTimeout(1000)


       


        //Practice - Capability
        await frames[0].locator(this.ErrorpageLocator.PracticeCapability).click();
        await this.page.waitForTimeout(5000);
        
        const element37 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error37=this.count(element37)
        console.log(error37)
        if (error37){
            error_pages.push("Practice-Capability - "+ element37.length)
        }
       await frames[1].locator(this.ErrorpageLocator.PCapToggle).click();
       await this.page.waitForTimeout(2000);

       const element_PCapToggle = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_PCapToggle=this.count(element_PCapToggle)
       console.log(error_PCapToggle)
       if (error_PCapToggle){
           error_pages.push("Practice-Capability -Toggle"+ PCapToggle.length)
       }
       await this.page.waitForTimeout(1000)

       


        //Practice - Employee
        await frames[0].locator(this.ErrorpageLocator.PracticeEmployee).click();
        await this.page.waitForTimeout(4000);
        
        const element38 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error38=this.count(element38)
        console.log(error38)
        if (error38){
            error_pages.push("Practice-Employee - "+ element38.length)
        }
        else{
            no_error_pages.push("Practice - Employee")
        }

        await this.page.waitForTimeout(3000)

        //Practice - Planning
        await frames[0].locator(this.ErrorpageLocator.PracticePlanning).click();
        await this.page.waitForTimeout(4000);
        
        const element39 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error39=this.count(element39)
        console.log(error39)
        if (error39){
            error_pages.push("Practice-Planning - "+ element39.length)
        }

        await this.page.waitForTimeout(4000)

        await frames[1].locator(this.ErrorpageLocator.PPlHiring).click();
       await this.page.waitForTimeout(2000);

       const element_PPlHiring = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_PPlHiring=this.count(element_PPlHiring)
       console.log(error_PPlHiring)
       if (error_PPlHiring){
           error_pages.push("Practice-Planning - Hiring and attribution"+ PPlHiring.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.home).click();
       await this.page.waitForTimeout(2000)



       await frames[1].locator(this.ErrorpageLocator.PPloffers).click();
       await this.page.waitForTimeout(2000);

       const element_PPloffers = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_PPloffers=this.count(element_PPloffers)
       console.log(error_PPloffers)
       if (error_PPloffers){
           error_pages.push("Practice-Planning -Offers"+ PPloffers.length)
       }
       await this.page.waitForTimeout(1000)


       await frames[1].locator(this.ErrorpageLocator.PPlavailability).click();
       await this.page.waitForTimeout(2000);

       const element_PPlavailability = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_PPlavailability=this.count(element_PPlavailability)
       console.log(error_PPlavailability)
       if (error_PPlavailability){
           error_pages.push("Practice-Planning -Availability"+ PPlavailability.length)
       }
       await this.page.waitForTimeout(1000)

       //practice - industry segments insights

       await frames[0].locator(this.ErrorpageLocator.tomore).click();
       await this.page.waitForTimeout(4000)

       await frames[0].locator(this.ErrorpageLocator.insights).click();
        await this.page.waitForTimeout(4000);
        const element43 = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error43=this.count(element43)
        console.log(error43)
        if (error43){
            error_pages.push("Practice-industry segments insights - "+ element43.length)
        }

        await this.page.waitForTimeout(4000)

        await frames[1].locator(this.ErrorpageLocator.insow).click();
       await this.page.waitForTimeout(2000);

       const element_insow = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_insow=this.count(element_insow)
       console.log(error_insow)
       if (error_insow){
           error_pages.push("Practice-industry segments insights-insow"+ insow.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.inhome).click();
       await this.page.waitForTimeout(2000)

       await frames[1].locator(this.ErrorpageLocator.instrat).click();
       await this.page.waitForTimeout(2000);

       const element_instrat = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_instrat=this.count(element_instrat)
       console.log(error_instrat)
       if (error_instrat){
           error_pages.push("Practice-industry segments insights-instrat"+ instrat.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.inhome).click();
       await this.page.waitForTimeout(2000)

       await frames[1].locator(this.ErrorpageLocator.ininvestment).click();
       await this.page.waitForTimeout(2000);

       const element_ininvest = await frames[1].locator("//a[@title='See details']").elementHandles();
       const error_ininvest=this.count(element_ininvest)
       console.log(error_ininvest)
       if (error_ininvest){
           error_pages.push("Practice-industry segments insights-ininvestment"+ ininvestment.length)
       }
       await this.page.waitForTimeout(1000)

       await frames[1].locator(this.ErrorpageLocator.inhome2).click();
       await this.page.waitForTimeout(2000)



         //US+ - Employee
         await frames[0].locator(this.ErrorpageLocator.USEmployee).click();
         await this.page.waitForTimeout(4000);
         
         const element40 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error40=this.count(element40)
         console.log(error40)
         if (error40){
             error_pages.push("US+-Employee - "+ element40.length)
         }
 
         await this.page.waitForTimeout(1000)

        await frames[1].locator(this.ErrorpageLocator.USEmpToggle).click();
        await this.page.waitForTimeout(2000);

        const element_usemptog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_usemptog=this.count(element_usemptog)
        console.log(error_usemptog)
        if (error_usemptog){
            error_pages.push("US+-Employee -Toggle"+ element_usemptog.length)
        }
        await this.page.waitForTimeout(1000);

         
         //US+ - Attrition
         await frames[0].locator(this.ErrorpageLocator.USAttrition).click();
         await this.page.waitForTimeout(4000);
         
         const element41 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error41=this.count(element41)
         console.log(error41)
         if (error41){
             error_pages.push("US+-Attrition - "+ element41.length)
         }
         
         await this.page.waitForTimeout(1000)

         await frames[1].locator(this.ErrorpageLocator.USAttrToggle).click();
        await this.page.waitForTimeout(2000);

        const element_usattrtog = await frames[1].locator("//a[@title='See details']").elementHandles();
        const error_usattrtog=this.count(element_usattrtog)
        console.log(error_usattrtog)
        if (error_usattrtog){
            error_pages.push("US+-Attrition-Toggle"+ element_usattrtog.length)
        }
        await this.page.waitForTimeout(1000);


         //US+ - PMS Completion Status
         await frames[0].locator(this.ErrorpageLocator.USPMSCompletionStatus).click();
         await this.page.waitForTimeout(4000);
         
         const element42 = await frames[1].locator("//a[@title='See details']").elementHandles();
         const error42=this.count(element42)
         console.log(error42)
         if (error42){
             error_pages.push("US+-PMS Completion Status - "+ element42.length)
         }
         else{
             no_error_pages.push("US+ - PMS Completion Status")
         }
 
         await this.page.waitForTimeout(3000)

         console.log("Errors - "+ error_pages)

         for (i in error_pages){
            console.log(i)
         }
        
    }

    count(elements){
        const length= elements.length;
        console.log('Number of matching elements:',length);

        const valuesEqual = this.areAllValuesEqual(length)
        return valuesEqual

    }

    areAllValuesEqual(arr) {
        if (arr != 0) {
            return true;
        }

        // If all values are equal, return true
        return false; 
    }

}
module.exports = { PowerBiPage };


