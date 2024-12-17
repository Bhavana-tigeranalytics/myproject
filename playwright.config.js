// @ts-check
const { devices } = require('@playwright/test');
const { default: globalSetup } = require('./global-setup');

const config = {
  globalSetup:"./global-setup",
  testDir:  './tests',
  retries :0,
  workers: 3,
  /* Maximum time one test can run for. */
  //10
  timeout: 1300 * 1000,
  expect: {
    timeout: 160000
  },
  
  reporter: 'html',
  
      use: {

        browserName : 'firefox',
        headless : true ,
        screenshot : 'on',
        storageState: "./Auth.json",
        
        trace : 'on',//off,on
       // ...devices['']
     //   viewport : {width:720,height:720}
         }

   

};

module.exports = config;


