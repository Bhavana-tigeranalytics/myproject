const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');

exports.GenericWarpper=
class GenericWarpper {

    async Excelwriter(response){
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile('../Response');
    
        // Get the first worksheet in the workbook
        const worksheet = workbook.getWorksheet(1); // Assuming the first worksheet
    
        // Find the next available row
        const nextRow = worksheet.lastRow ? worksheet.lastRow.number + 1 : 1;
    
        // Set the text content in the next available row
        const row = worksheet.getRow(nextRow);
        row.getCell(1).value = response;
    
        // Save the updated workbook back to the file
        await workbook.xlsx.writeFile('../Response');
    }

    async enterByCssSelector(page, cssSelector, data) {
        try {
            await page.fill(cssSelector, data);
            console.log(`PASS: The element with the CSS selector ${cssSelector} entered the data ${data} successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with the CSS selector ${cssSelector} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with the CSS selector ${cssSelector} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not intractable')) {
                console.log(`FAIL: The element with the CSS selector ${cssSelector} is not interactable`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with the CSS selector ${cssSelector} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
    }
    
    
    async enterByXpath(page, xpathValue, data) {
        try {
            await page.fill(`xpath=${xpathValue}`, data);
            console.log(`PASS: The element with the xpath ${xpathValue} entered the data ${data} successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with the xpath ${xpathValue} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with the xpath ${xpathValue} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not intractable')) {
                console.log(`FAIL: The element with the xpath ${xpathValue} is not interactable`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with the xpath ${xpathValue} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
    }
    
    
    
    async clickByXpath(page, xpathVal) {
        try {
            console.log(xpathVal);
            await page.waitForSelector(`xpath=${xpathVal}`);
            await page.click(`xpath=${xpathVal}`);
            console.log(`PASS: The element is clicked by ${xpathVal} successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with ${xpathVal} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with ${xpathVal} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with ${xpathVal} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
    }
    
    async clickByCssSelector(page, cssSelector) {
        try {
            await page.waitForSelector(cssSelector);
            await page.click(cssSelector);
            console.log(`PASS: The element is clicked by ${cssSelector} successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with ${cssSelector} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with ${cssSelector} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with ${cssSelector} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
    }
    
    async getTextByXpath(page, xpathVal) {
        let txtByXpath = null;
        try {
            txtByXpath = await page.$eval(`xpath=${xpathVal}`, element => element.textContent);
            console.log(txtByXpath);
            console.log(`PASS: The element with the ${xpathVal} is taken and printed in console successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with ${xpathVal} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with ${xpathVal} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not interactable')) {
                console.log(`FAIL: The element with ${xpathVal} is not interactable`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with ${xpathVal} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
        return txtByXpath;
    }
    
    async  getTextByCssSelector(page, cssSelector) {
        let txtByCssSelector = null;
        try {
            txtByCssSelector = await page.$eval(cssSelector, element => element.textContent);
            console.log(txtByCssSelector);
            console.log(`PASS: The element with the ${cssSelector} is taken and printed in console successfully`);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`FAIL: The element with ${cssSelector} is not available within the timeout`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not visible')) {
                console.log(`FAIL: The element with ${cssSelector} is not visible`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not interactable')) {
                console.log(`FAIL: The element with ${cssSelector} is not interactable`);
            } else if (error.name === 'ElementHandleError' && error.message.includes('is not stable')) {
                console.log(`FAIL: The element with ${cssSelector} is not stable`);
            } else {
                console.log(`FAIL: An unknown error occurred: ${error.message}`);
            }
        }
        return txtByCssSelector;
    }
    
    
    
}


