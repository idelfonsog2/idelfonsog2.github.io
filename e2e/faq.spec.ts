import { test, expect } from '@playwright/test'

test('FAQ section renders and expands', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('FAQ', { exact: true })).toBeVisible()
  // sections start collapsed
  await page.getByRole('heading', { level: 2, name: 'FAQ' }).getByRole('button').click()

  const panels = page.locator('.v-expansion-panel')
  await expect(panels).toHaveCount(7)

  const firstPanel = panels.first()
  await firstPanel.locator('.v-expansion-panel-title').click()
  await expect(firstPanel.locator('.v-expansion-panel-text')).toBeVisible()
})
