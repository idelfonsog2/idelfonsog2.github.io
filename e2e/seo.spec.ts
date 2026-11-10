import { test, expect } from '@playwright/test'

test('llms.txt is served as plain text with the key facts', async ({ request }) => {
  const res = await request.get('/llms.txt')
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('text/plain')

  const body = await res.text()
  expect(body.startsWith('# Idelfonso Gutierrez')).toBe(true)
  expect(body).toContain('mailto:idelfonsog2@gmail.com')
  expect(body).toContain('https://www.linkedin.com/in/idelfonsog/')
  expect(body).toContain('## Experience')
})

test('llms.txt never exposes a phone number', async ({ request }) => {
  const body = await (await request.get('/llms.txt')).text()
  expect(body).not.toMatch(/\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/)
})

test('llms.txt covers every role shown on the page (regenerate with `npm run llms` if this fails)', async ({
  page,
  request,
}) => {
  const body = await (await request.get('/llms.txt')).text()
  await page.goto('/')

  // textContent, not innerText: sections start collapsed, so their text is not "visible"
  const companies = (await page.locator('article.role h3').allTextContents()).map((t) => t.trim())
  expect(companies.length).toBeGreaterThanOrEqual(3)
  for (const company of companies) {
    expect(body, `llms.txt is missing "${company}"`).toContain(company)
  }

  const projects = (await page.locator('#projects h3').allTextContents()).map((t) => t.trim())
  for (const name of projects.filter((t) => t !== 'How I work')) {
    expect(body, `llms.txt is missing project "${name}"`).toContain(name)
  }
})
