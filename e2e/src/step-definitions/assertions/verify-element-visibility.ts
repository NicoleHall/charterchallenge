import { Then } from '@cucumber/cucumber'
import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'

Then(
    /^I should see a contacts list$/,
    async function (){

    const element = await global.myDriver.findElement(By.css("[data-id='contacts']"));

    const elementText = await element.getAttribute("innerText")

    expect(elementText).to.contain("Contacts")
    }
)
Then (
    /^the "([^"]*)" should contain the text "([^"]*)"$/,
    async function (elementKey: string, expectedElementText: string) {

        const element = await global.myDriver.findElement(By.css("[data-id='top-playground-button']"))

        const elementText = await element.getAttribute("innerText")

        expect(elementText).to.contain(expectedElementText)
    }
)

When (/^the contacts search is populated with the text "([^"]*)"$/, async function (author: string) {

    const element = await global.myDriver.findElement(By.css("[data-id='search']")).sendKeys(author);

    const elementWithAuthorName = await global.myDriver.findElement(By.css("[data-id='name']"))

    const elementText = await elementWithAuthorName.getAttribute("innerText")

    expect(elementText).to.contain(author)

})

Then (
    /^the contact card for "([^"]*)" should be displayed$/,
    async function (author: string) {

        const element = await global.myDriver.findElement(By.css("[data-id='search']")).sendKeys(author);

        const amItext = await global.myDriver.findElement(By.className("ContactListItems"))//.getAttribute("innerText") <__does not fail returns no text

        expect(amItext).to.exist;

    }
)

