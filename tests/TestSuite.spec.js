const { test, expect } = require('@playwright/test');
const { SowValidation } = require('../Pages/SOWValidation');
const { Availible } = require('../Pages/AvailbleValidation');
const { RevenueValidation }= require('../Pages/RevenueValidation');
const { InvestmentsValidation }= require('../Pages/InverstmentValidation');
const { DemandN4WValidation }= require('../Pages/DemandN4w');
const { EBHCPage } = require('../Pages/EBHCValidation');
const { TotalDHC } = require('../Pages/TotalDHC');
const { GrossMargin } = require('../Pages/GrossMargin');
const { Projections } = require('../Pages/Projections');
const { TotalFTEDelivery } = require('../Pages/TotalFTEDelivery');
const { TotalNONFTEDelivery } = require('../Pages/TotalNONFTEDelivery');
const { TotalFTEDeliveryUS } = require('../Pages/TotalFTEDeliveryUS');
const { NONFTEDeliveryUS } = require('../Pages/NONFTEDeliveryUS');
const { TotalFTEUSCost } = require('../Pages/TotalFTEUSCost');
const { TotalNONFTEUS } = require('../Pages/TotalNONFTEUS');
const { TotalFTEIndia } = require('../Pages/TotalFTEIndia');
const { TotalNonFTEIndia } = require('../Pages/TotalNonFTEIndia');
const { NonFTEIndiaplus } = require('../Pages/NonFTEIndiaplus');
const { PowerBiPage } = require('../Pages/ERRORPAGEvalidation');
const { Nasscom } = require('../Pages/NasscomDHC');
const { EmployeeUs } = require('../Pages/EmployeeUs');

// const { TotalFTEIndiaplus } = require('../Pages/TotalFTEIndiaplus');
const { TotalFTEIndiaplus } = require('../Pages/TotalFTEIndiaplus');

//const { DBConnection } = require('../Pages/DBConnectionManager.js');
const testData = require('./TestData');







// test.only('DBConnection', async () => {
//   const dbManager = new DBConnection();
//   const value = await dbManager.getconnection(testData.sqlQuery5,'sum_of_ebhc'); // Ensure to use await
//   console.log('rounded_value',value); 
// });

test.describe.parallel('Parallel Test Execution', () => {

  test('TC01 - Sowchat', async ({ page }) => {
   const login = new SowValidation(page);
   await login.gotoLoginPage();
   await login.SOWValidationPage();
});


test('TC02 - Ebhcchat', async ({ page }) => {
  const login = new EBHCPage(page);
  await login.gotoLoginPage();
  await login.EBHCPage();
});

test('TC03 - TOTALDHCchat', async ({ page }) => {
  const login = new TotalDHC(page);
  await login.gotoLoginPage();
  await login.TotalDHC();
});

test('TC04 - GROSSMARGINchat', async ({ page }) => {
  const login = new GrossMargin(page);
  await login.gotoLoginPage();
  await login.GrossMargin();
});

test('TC05 - PROJECTIONchat', async ({ page }) => {
  const login = new Projections(page);
  await login.gotoLoginPage();
  await login.Projections();
});

test('TC06 - Availblechat', async ({ page }) => {
  const login = new Availible(page);
  await login.gotoLoginPage();
  await login.AvailableValidation();
});
test('TC07 - RevenueValidation', async ({ page }) => {
  const loginPage = new RevenueValidation(page);
  await loginPage.gotoLoginPage();
  await loginPage.validateRevenue();
});

test('TC08 - InvestmentsValidation', async ({ page }) => {
  const loginPage = new InvestmentsValidation(page);
  await loginPage.gotoLoginPage();
  await loginPage.InvestmentsValidation();
  
});
test('TC09-Demand N4 w validation',async({ page}) => {
  const loginPage = new DemandN4WValidation(page);
  await loginPage.gotoLoginPage();
  await loginPage.validateDemandN4W();
});

test('TC10-Nasscom DHC',async({ page}) => {
    const loginPage = new Nasscom(page);
    await loginPage.gotoLoginPage();
    await loginPage.Nasscom();
  });

  test('TC11-Employee US',async({ page}) => {
    const loginPage = new EmployeeUs(page);
    await loginPage.gotoLoginPage();
    await loginPage.EmployeeUs();
  });

});

//});

// test.only('TC10 - Total FTE Delivery', async ({ page }) => {
  
//     const login = new TotalFTEDelivery(page);
//     await login.gotoLoginPage();
//     await login.TotalFTEDelivery();
  
//  // });
//   test.only('TC11 - Total NON FTE Delivery', async ({ page }) => {
  
//     const login = new TotalNONFTEDelivery(page);
//     await login.gotoLoginPage();
//     await login.TotalNONFTEDelivery();
  
//   });
  // test.only('TC13 - NON FTE Delivery US', async ({ page }) => {

  //   const login = new NONFTEDeliveryUS(page);
  //   await login.gotoLoginPage();
  //   await login.NONFTEDeliveryUS();
  
  // });
  // test.only('TC10 - Total FTE US Cost', async ({ page }) => {
  
  //   const login = new TotalFTEUSCost(page);
  //   await login.gotoLoginPage();
  //   await login.TotalFTEUSCost();
  //});
  // test.only('TC10 - Total NON FTE US', async ({ page }) => {
  
  //   const login = new TotalNONFTEUS(page);
  //   await login.gotoLoginPage();
  //   await login.TotalNONFTEUS();
  // });
  // test.only('TC10 - Total FTE India', async ({ page }) => {
  
  //   const login = new TotalFTEIndia(page);
  //   await login.gotoLoginPage();
  //   await login.TotalFTEIndia();
  // });
  // test.only('TC10 - Total Non FTE India', async ({ page }) => {
  
  //   const login = new TotalNonFTEIndia(page);
  //   await login.gotoLoginPage();
  //   await login.TotalNonFTEIndia();
  // });
  // test.only('TC10 - Total  FTE Indiaplus', async ({ page }) => {
  
  //   const login = new TotalFTEIndiaplus(page);
  //   await login.gotoLoginPage();
  //   await login.TotalFTEIndiaplus();
  // });
  // test.only('TC10 - Non FTE Indiaplus', async ({ page }) => {
  
  //   const login = new NonFTEIndiaplus(page);
  //   await login.gotoLoginPage();
  //   await login.NonFTEIndiaplus();
  // });
//  });=

//  test('TC20 -  Validation', async ({ page }) => {
//   const login = new PowerBiPage(page);
//   await login.gotoLoginPage();
//   await login.Errorpage();
//  });