import { test, expect } from '@playwright/test'

test('hero shows the five-stage questions in order', async ({ page }) => {
  await page.goto('/')
  const flow = page.getByRole('list', { name: 'Before I write any code, I ask:' })
  await expect(flow).toBeVisible()

  const items = flow.getByRole('listitem')
  await expect(items).toHaveCount(5)
  const titles = await flow.locator('.hero-step-title').allInnerTexts()
  expect(titles).toEqual(['Desired state', 'People', 'Context', 'Scope', 'Purpose'])

  await expect(items.nth(1)).toContainText('who has the right to say yes or no')
  await expect(items.nth(3)).toContainText('nice-to-have')
  await expect(items.nth(4)).toContainText('a phone call')
  await expect(page.getByText('Then I build the full stack to prove the answer')).toBeVisible()
})

test('hero stages follow the language toggle', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Cambiar a español' }).click()

  const flow = page.getByRole('list', { name: 'Antes de escribir código, pregunto:' })
  await expect(flow.getByRole('listitem')).toHaveCount(5)
  const titles = await flow.locator('.hero-step-title').allInnerTexts()
  expect(titles).toEqual(['Estado deseado', 'Personas', 'Contexto', 'Alcance', 'Propósito'])
  await expect(page.getByText('Luego construyo el stack completo')).toBeVisible()
})

test('hero flow does not overflow on a phone', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 } })
  const page = await ctx.newPage()
  await page.goto('/')
  await expect(page.locator('.hero-step')).toHaveCount(5)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflow).toBe(false)
  await ctx.close()
})
