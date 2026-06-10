import { test, expect } from '@playwright/test'

test('FAQ section renders and expands', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('FAQ', { exact: true })).toBeVisible()

  const panels = page.locator('.v-expansion-panel')
  await expect(panels).toHaveCount(7)

  const firstPanel = panels.first()
  await firstPanel.locator('.v-expansion-panel-title').click()
  await expect(firstPanel.locator('.v-expansion-panel-text')).toBeVisible()
})
