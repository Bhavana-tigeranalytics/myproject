const { test, expect } = require('@playwright/test');
exports.UnstrusturedChatPage=
class UnstrusturedChatPage{
    constructor(page)

{
    this.page = page;
    this.page=page.locator("'https://onedata.tigeranalyticstest.in/reports'")
    this.document.locator("'https://onedata.tigeranalyticstest.in/reports'")
    this.chatbox=page.locator("//div[@class='angular-editor-textarea']");
    this.searchdoc=page.locator('.p-button.p-button-outlined.searchBtn');
    this.search=page.locator("//input[@placeholder='Search Document']");
    this.checkbox=page.locator("//div[@class='p-checkbox-box p-component']");
    this.newchat=page.locator("//button[normalize-space()='New Chat']");
    this.softwaretestdoc=page.locator("//td[contains(text(), 'software testing.pdf')]/preceding-sibling::td//div[@role='checkbox']");
    this.doc=page.locator("(//div[@role='checkbox'])");
    this.submit=page.locator("button[class='btn-sm processBtn mr-2 mt-2']");
    this.Regeneratebtn=page.locator("//button[normalize-space()='Regenerate']");
    this.deletedoc=page.locator("//i[@class='bi bi-x cursor pr-2 ng-star-inserted']");
    //button[@class='p-element p-button p-button-danger p-component ng-star-inserted']
    
}


async fileSelection(filename){

    await this.newchat.click();
    await this.searchdoc.click();
    await this.search.fill(filename);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(3000);
    await this.checkbox.click();
    await this.submit.click();
    await this.page.waitForTimeout(3000);
}

async unstrusturedChat(prompt, response){
    
    
    await this.chatbox.click();
    console.log(prompt);
    await this.chatbox.fill(prompt);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(6000);
    const Responsetxt = await this.page.locator(response).textContent();
    console.log(Responsetxt);
    
}

async regenerate(response){

    await this.Regeneratebtn.click();
    const Responsetxt = await this.page.locator(response).textContent();
    console.log(Responsetxt);

}

async filealreadyexist(){
    await this.deletedoc.click();

}

}