import {Given, Then} from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'

Given(
    /^I am on the "([^"]*)" page$/,
    async function (pageId: string) {

        await global.myDriver.get(`http://localhost:3000${pageId}`)

    }
)
