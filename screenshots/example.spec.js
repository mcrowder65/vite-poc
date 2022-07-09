const { test, expect } = require("@playwright/test")

test("example test", async ({ page }) => {
  await page.goto("localhost:3000")
  await expect(page).toHaveScreenshot()
})

test("numbers", async ({ page }) => {
  await page.goto("localhost:3000")
  await page.locator("data-testid=my-button").click()
  await expect(page).toHaveScreenshot()
})
