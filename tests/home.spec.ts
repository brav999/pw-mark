import { expect, test } from '@playwright/test'

test('Webapp deve estar online e acessível', async ({ page })=>{
    await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
})