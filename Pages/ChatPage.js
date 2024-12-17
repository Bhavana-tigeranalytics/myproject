const { test, expect } = require('@playwright/test');
const {GenericWarpper} = require('../Resources/GenericWarpper');
const testData = require('../tests/TestData');

exports.ChatPage=
class ChatPage{ 

    constructor(page)
{
    this.page = page;
    this.chat = page.locator('a[href="/chat"]');
    this.chatbox=page.locator("//div[@class='angular-editor-textarea']");
    this.response=page.locator('//div[@id="responseText" and contains(@class, "typewriter-text")]');
    this.feedback=page.locator("//i[@class='pi pi-thumbs-up feedbackIcons']");
    this.feedbacktext=page.locator("//textarea[@placeholder='What do you like about the response?']");
    this.submit=page.locator("//button[normalize-space()='Submit Feedback']");
    this.copy=page.locator("//i[@class='bi bi-clipboard copyIcon ng-star-inserted']");
    this.ageResponse=page.locator("(//p[contains(text(),'66 years old')])");
    this.newchat=page.locator("//button[normalize-space()='New Chat']");
    this.regenerate=page.locator("//button[normalize-space()='Regenerate']");
    this.popularResponse=page.locator("(//p[contains(text(),'Co-founder of Microsoft: Gates co-founded Microsoft')])");
    this.formattingbar=page.locator('//i[@class="bi bi-pencil-square editToolbarIcon"]');
    this.bold=page.locator('//button[@id="bold-"]');
    this.bullet=page.locator('//button[@id="insertUnorderedList-"]');
    this.send=page.locator('//i[contains(@class, "pi-send") and contains(@class, "straight-icon")]');

}

async basicvanillachat(){
    await this.newchat.click();
    await this.chatfn(testData.prompt1);
    const Responsetxt = await this.response.textContent();
    console.log(Responsetxt);
    await this.chatFeedback();
    this.chatfn(testData.prompt2);
    const ageResponse = await this.ageResponse.textContent();
    console.log(ageResponse);
    this.chatfn(testData.prompt3);
    const popular = await this.popularResponse.textContent();
    console.log(popular);
    await this.regenerate.click();
    const popular2 = await this.popularResponse.textContent();
    console.log(popular2);



}

async vanillachat(prompt){
    //const genericwarpper = new GenericWarpper();
    await this.newchat.click();
    await this.chatfn(prompt);
    await this.response.isVisible();
    await this.page.waitForTimeout(8000);
    const Responsetxt = await this.response.textContent();
    console.log(Responsetxt);
   // genericwarpper.Excelwriter(Responsetxt);



}

async chatfn (prompt){
    await this.chatbox.click();
    await this.chatbox.fill(prompt);
    await this.send.click();
    await this.page.waitForTimeout(2000);
}

async getResponse(responseloc){
    const Response = await page.locator(locators.responseloc).textContent();
    console.log(Response);

}

async chatFeedback (){
    await this.copy.click();
    await this.feedback.click();
    await this.feedbacktext.fill("thanks for your response");
    await this.submit.click();
        
}

async formatting(){
    await this.formattingbar.click();
    await this.bold.click();
    await this.bullet.click();
}

}