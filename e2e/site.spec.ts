import { test, expect } from '@playwright/test'

test('defaults to English, switches to Spanish and remembers the choice', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText("I'm Idelfonso")

  await page.getByRole('button', { name: 'Español' }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('soy Idelfonso')
  await expect(page).toHaveTitle(/Ingeniero de Software/)

  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('soy Idelfonso')
})

test('has one h1, landmarks and every planned section', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('contentinfo')).toBeVisible()

  for (const name of ['Experience', 'Projects', 'Education', 'Certifications', 'Skills', 'FAQ', "Let's talk"]) {
    await expect(page.getByRole('heading', { level: 2, name })).toBeVisible()
  }
})

test('skip link is the first tab stop and targets main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Skip to content' })
  await expect(skip).toBeFocused()
  await expect(skip).toHaveAttribute('href', '#main-content')
})

test('contact links point to the right places', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:idelfonsog2@gmail.com')
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', /linkedin\.com\/in\/idelfonsog/)
})
