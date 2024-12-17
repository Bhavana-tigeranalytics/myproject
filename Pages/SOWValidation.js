
const { test, Browser, firefox, expect, chromium } = require('@playwright/test');
const testData = require('../tests/TestData');
// const {DBConnection} = require('../Pages/DBConnectionManager.js');


class SowValidation {
    
    constructor(page) {
        this.page = page;
        this.userName = page.locator("//div[@class='yAlK0b']");
        this.next = page.locator("//*[contains(text(),'Next')]");
        this.signin = page.locator("//*[contains(text(),'Continue')]");
        this.login = page.locator("//span[@class='Login_buttonText__lRdGI']");
        this.Overview = page.locator("(// span[contains(text(), 'Overview')])[1]");    
    }

    getLocator(str)
    {
        page.locator(str);
    }
    

    async gotoLoginPage() {
        // await this.page.goto(test.url);
        await this.page.goto(testData.url);


        // Trigger the login action that opens a new window
        const [loginPage] = await Promise.all([
            this.page.waitForEvent('popup'), // Wait for the new page event
            this.login.click() // Trigger the action that opens the new page
        ]);

        console.log("Clicked login page window");

        // Wait for the login page to load
        await loginPage.waitForLoadState();
        console.log("Moved to new window");

        // Interact with the login page
        await loginPage.locator("//div[@class='yAlK0b']").click();
        await this.page.waitForTimeout(5000);

        //Click on Continue and move to home page
        await loginPage.locator("//*[contains(text(),'Continue')]").click();
        await this.page.waitForTimeout(15000);
    }
    
    async SOWValidationPage() {
        this.Overview.click();
        console.log("Overview Clicked");
//Selecting frame
        await this.page.waitForTimeout(15000);
        const frames = this.page.frames();
        var valueList = [];
            const title = await frames[1].title();
            console.log(`Frame title: ${title}`);
            // await frames[1].locator(testData.Deliverytab).click();
            // await this.page.waitForTimeout(3000);


                    let sowvalues = await frames[1].locator(testData.overviewsoW).textContent();
                    sowvalues=parseInt(sowvalues.replace(/,/g, ''));
                    console.log(" values "+sowvalues)
                    valueList.push(sowvalues);
                    

                    const sowvalues1 = await frames[1].locator(testData.sowoverview2).textContent();
                    console.log(" values1 "+sowvalues1)
                    valueList.push(sowvalues1);

                    // const sowvalues2 = await frames[1].locator(testData.sowoverview3).textContent();
                    // console.log(" values2 "+sowvalues2)
                    // valueList.push(sowvalues2);
 //To navigate to Overview BU 
                    await frames[1].locator(testData.clicklinktofollow).click();
                    await this.page.waitForTimeout(3000);
                    const sowvalues3 = await frames[1].locator(testData.sowoverview4).textContent();
                    console.log(" values3 "+sowvalues3)
                    // valueList.push(sowvalues3);

                    const sowvalues4 = await frames[1].locator(testData.sowoverview5).textContent();
                    console.log(" values4 "+sowvalues4)
                    valueList.push(sowvalues4);
//To Navigate to Accountlist page
                    //await frames[0].locator(testData.AccountListPage).click();
                    //await this.page.waitForTimeout(3000);
                    //const sowvalues5 = await frames[1].locator(testData.sowoverview6).textContent();
                    //console.log(" values5 "+sowvalues5)
                    //valueList.push(sowvalues5);
//To Navigate to Delivery HC & Mix page
                    await frames[0].locator(testData.deliveryhcandmixpage).click();
                    await this.page.waitForTimeout(3000);
                    const sowvalues6 = await frames[1].locator(testData.sowoverview7).textContent();
                    console.log(" values6 "+sowvalues6)
                    valueList.push(sowvalues6); 
                    const sowvalues7 = await frames[1].locator(testData.sowoverview8).textContent();
                    console.log(" values7 "+sowvalues7)
                    valueList.push(sowvalues7);    
//To navigate to Deliverymix DP page
                    await frames[0].locator(testData.delierymixdp).click();
                    await this.page.waitForTimeout(4000);
                    await frames[1].locator(testData.dropdown1).click();
                    await frames[1].locator(testData.selectcheckbox1).click();
                    await this.page.waitForTimeout(4000);
                    const sowvalues8 = await frames[1].locator(testData.sowoverview9).textContent();
                    console.log(" values8 "+sowvalues8)
                    valueList.push(sowvalues8); 
                    await this.page.waitForTimeout(3000); 

                    const sowvalues9 = await frames[1].locator(testData.sowoverview10).textContent();
                    console.log(" values9 "+sowvalues9)
                    valueList.push(sowvalues9); 
                    
                    const sowvalues10 = await frames[1].locator(testData.sowoverview11).textContent();
                    console.log(" values10 "+sowvalues10)
                    valueList.push(sowvalues10); 

//To navigate to People Mix page

                    // await frames[0].locator(testData.peoplemix).click();
                    // await this.page.waitForTimeout(4000);
                    // await frames[1].locator(testData.dropdown2).click();
                    // await frames[1].locator(testData.selectcheckbox2).click();                
                    // await this.page.waitForTimeout(6000);
                    // const sowvalues11 = await frames[1].locator(testData.sowoverview12).textContent();
                    // console.log(" values11 "+sowvalues11)
                    // valueList.push(sowvalues11); 

                    const sowvalues12 = await frames[1].locator(testData.sowoverview13).textContent();
                    console.log(" values12 "+sowvalues12)
                    //valueList.push(sowvalues12); 
//To navigate to Practice Overview
                    await frames[0].locator(testData.PracticeOverview).click();
                    await this.page.waitForTimeout(4000);
                    await frames[1].locator(testData.practicedropdown).click();
                    await frames[1].locator(testData.practicecheckbox).click();
                    await frames[1].locator(testData.dropdownup).click();
                    await this.page.waitForTimeout(4000);
                    // const sowvalues13 = await frames[1].locator(testData.sowoverview14).textContent();
                    // console.log(" values13 "+sowvalues13)
                    // valueList.push(sowvalues13); 
                     
                    const sowvalues15 = await frames[1].locator(testData.sowoverview16).textContent();
                    console.log(" values14 "+sowvalues15)
                    valueList.push(sowvalues15); 

                    await frames[1].locator(testData.practiceclicklinktofollow).click();
                    await this.page.waitForTimeout(4000);
                    const sowvalues14 = await frames[1].locator(testData.sowoverview15).textContent();
                    console.log(" values15 "+sowvalues14)
                    valueList.push(sowvalues14); 
                    //To navigate to Industries 
                    await frames[0].locator(testData.industries).click();
                    await this.page.waitForTimeout(3000);

                    const sowvalues16 = await frames[1].locator(testData.momsowtrend).textContent();
                    console.log(" value16 "+sowvalues16)
                    valueList.push(sowvalues16);

                    //To navigate practice

                    await frames[0].locator(testData.more).click();
                    await this.page.waitForTimeout(3000);
                    await frames[0].locator(testData.industry).click();
                    await this.page.waitForTimeout(3000);

                    const sowvalues17 = await frames[1].locator(testData.industryinsights).textContent();
                    console.log(" value17 "+sowvalues17)
                    valueList.push(sowvalues17);


                    
                   


        console.log("## valueList  :"+valueList);
    
        // await this.page.context().close();
        // const dbValue = await this.connectDB();
        // console.log(`DB Value: Type: ${typeof dbValue}, Value: '${dbValue}'`);

        // valueList.push(dbValue);
        // const vl = this.areAllValuesEqual(valueList);
        // console.log("Result: " + vl);
        if (!this.areAllValuesEqual(valueList)) {
            throw new Error("Values are not equal");
        }
        console.log("All values in valueList are equal.");
        
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
//         // console.log("DB value", dbValue);

//         // Push the DB value to the valueList
//         valueList.push(dbValue);
//         const vl = this.areAllValuesEqual(valueList)
//         console.log(" result : "+vl)
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


module.exports = { SowValidation };
