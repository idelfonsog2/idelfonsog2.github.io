import { test, expect, type Page } from '@playwright/test'

const sections = [
  { title: 'Worked @', id: 'worked-at', probe: '.logo-grid' },
  { title: 'Experience', id: 'experience', probe: 'article.role' },
  { title: 'Projects', id: 'projects', probe: 'h3' },
  { title: 'Education', id: 'education', probe: 'li' },
  { title: 'Certifications', id: 'certifications', probe: 'li' },
  { title: 'Skills', id: 'skills', probe: 'h3' },
  { title: 'FAQ', id: 'faq', probe: '.v-expansion-panel' },
  { title: "Let's talk", id: 'contact', probe: 'a' },
]

const trigger = (page: Page, title: string) =>
  page.getByRole('heading', { level: 2, name: title }).getByRole('button')
const probeOf = (page: Page, s: (typeof sections)[number]) => page.locator(`#${s.id}-panel ${s.probe}`).first()

test('every major section starts collapsed', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h2 button[aria-expanded]')).toHaveCount(sections.length)
  for (const s of sections) {
    await expect(trigger(page, s.title)).toHaveAttribute('aria-expanded', 'false')
    await expect(probeOf(page, s)).toBeHidden()
  }
  // the whole page is just the hero plus eight header rows
  await expect(page.locator('article.role').first()).toBeHidden()
})

for (const s of sections) {
  test(`"${s.title}" expands and collapses with its arrow`, async ({ page }) => {
    await page.goto('/')
    const button = trigger(page, s.title)

    await button.click()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await expect(probeOf(page, s)).toBeVisible()

    await button.click()
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await expect(probeOf(page, s)).toBeHidden()
  })
}

test('works from the keyboard (Enter and Space)', async ({ page }) => {
  await page.goto('/')
  const button = trigger(page, 'Skills')
  await button.focus()
  await page.keyboard.press('Enter')
  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Space')
  await expect(button).toHaveAttribute('aria-expanded', 'false')
})

test('collapsed content is out of the tab order; expanded content is reachable', async ({ page }) => {
  await page.goto('/')
  const button = trigger(page, "Let's talk")

  // collapsed (the default): Tab skips the links inside
  await button.focus()
  await page.keyboard.press('Tab')
  expect(await page.evaluate(() => !!document.activeElement?.closest('#contact-panel'))).toBe(false)

  // expanded: Tab now lands on the first link inside
  await button.click()
  await expect(page.locator('#contact-panel a').first()).toBeVisible()
  await button.focus()
  await page.keyboard.press('Tab')
  expect(await page.evaluate(() => !!document.activeElement?.closest('#contact-panel'))).toBe(true)
})

test('a nav link opens its collapsed section', async ({ page }) => {
  await page.goto('/')
  const button = trigger(page, 'Experience')
  await expect(button).toHaveAttribute('aria-expanded', 'false')

  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Experience' }).click()
  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#experience article.role').first()).toBeVisible()
  // the other sections stay collapsed
  await expect(trigger(page, 'Projects')).toHaveAttribute('aria-expanded', 'false')
})

test('a #hash in the address opens only that section', async ({ page }) => {
  await page.goto('/#skills')
  await expect(trigger(page, 'Skills')).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#skills-panel h3').first()).toBeVisible()
  await expect(trigger(page, 'Experience')).toHaveAttribute('aria-expanded', 'false')
})

test('headers are translated and still expand in Spanish', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Cambiar a español' }).click()
  const button = trigger(page, 'Experiencia')
  await expect(button).toHaveAttribute('aria-expanded', 'false')
  await button.click()
  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#experience article.role').first()).toBeVisible()
})

test('reduced motion: expands and collapses without animation', async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await ctx.newPage()
  await page.goto('/')
  const button = trigger(page, 'Projects')
  await button.click()
  await expect(page.locator('#projects-panel h3').first()).toBeVisible({ timeout: 500 })
  await button.click()
  await expect(page.locator('#projects-panel h3').first()).toBeHidden({ timeout: 500 })
  await ctx.close()
})

test('printing shows every section even though they start collapsed', async ({ page }) => {
  await page.goto('/')
  await page.emulateMedia({ media: 'print' })
  await expect(page.locator('article.role').first()).toBeVisible()
  await expect(page.locator('#projects-panel h3').first()).toBeVisible()
})
