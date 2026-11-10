import { test, expect } from '@playwright/test'

test('quick answers: opens, answers a question, and does not offer it again', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Open quick answers' }).click()

  const dialog = page.getByRole('dialog', { name: 'Quick answers' })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('log')).toContainText("Hi, I'm Idelfonso")

  const question = 'What problem can you solve for us?'
  await dialog.getByRole('button', { name: question }).click()
  await expect(dialog.getByRole('log')).toContainText('mobile, backend and platform work meet')
  await expect(dialog.getByRole('button', { name: question })).toHaveCount(0)
  // the visitor's own question is shown as a message
  await expect(dialog.getByRole('log').getByText(question)).toBeVisible()
})

test('quick answers: contact answer offers email and LinkedIn', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Open quick answers' }).click()
  const dialog = page.getByRole('dialog', { name: 'Quick answers' })
  await dialog.getByRole('button', { name: 'How do I get in touch?' }).click()

  await expect(dialog.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:idelfonsog2@gmail.com')
  await expect(dialog.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', /linkedin\.com\/in\/idelfonsog/)
})

test('quick answers: Escape closes and returns focus to the launcher', async ({ page }) => {
  await page.goto('/')
  const launcher = page.getByRole('button', { name: 'Open quick answers' })
  await launcher.click()
  await expect(page.getByRole('dialog')).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(launcher).toBeFocused()
})

test('quick answers: conversation follows the language toggle', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Open quick answers' }).click()
  await page.getByRole('dialog').getByRole('button', { name: 'What are your rates?' }).click()
  await expect(page.getByRole('log')).toContainText("Let's talk and figure out")

  await page.getByRole('button', { name: 'Cambiar a español' }).click()
  const dialog = page.getByRole('dialog', { name: 'Respuestas rápidas' })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('log')).toContainText('Hablemos y veamos')
  await expect(dialog.getByRole('log').getByText('¿Cuáles son tus tarifas?')).toBeVisible()
})

test('quick answers: asking everything ends with a get-in-touch message; restart resets', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Open quick answers' }).click()
  const dialog = page.getByRole('dialog', { name: 'Quick answers' })

  // keep asking the first suggestion until none are left (10 questions)
  for (let i = 0; i < 10; i++) {
    await dialog.locator('.qa-suggestion').first().click()
    await expect(dialog.locator('.qa-typing')).toHaveCount(0)
  }
  await expect(dialog.getByRole('log')).toContainText("That's everything I have pre-written")
  await expect(dialog.locator('.qa-suggestion')).toHaveCount(0)

  await dialog.getByRole('button', { name: 'Start over' }).click()
  await expect(dialog.locator('.qa-suggestion')).toHaveCount(5)
})
