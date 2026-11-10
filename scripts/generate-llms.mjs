// Builds public/llms.txt from the site's own English copy (src/content.ts), so AI agents that
// cannot run JavaScript still get the page's content as plain text.
// Run after changing copy: npm run llms   (e2e/seo.spec.ts fails if a role is missing from the file)
// Requires Node 22+ (it imports the .ts file directly; the module-type warning is harmless).
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
const { en, links } = await import(new URL('../src/content.ts', import.meta.url).href)
const SITE = 'https://idelfonso.com'
const L = []
const add = (...x) => L.push(...x)

add('# Idelfonso Gutierrez', '')
add(`> ${en.meta.description} Open to contract, contract-to-hire or full-time work, fully remote on US Central Time.`, '')
add(`Personal site: ${SITE}/ (a single page, in English and Spanish; add ?lang=es for Spanish). This file is a plain-text summary of that page, because the page itself is rendered with JavaScript.`, '')

add('## Contact', '')
add(`- [Email](mailto:${links.email}): best way to reach me`)
add(`- [LinkedIn](${links.linkedin})`)
add(`- [GitHub](${links.github})`, '')

add('## About', '')
add(en.hero.superpower, '', en.hero.story, '', `${en.hero.counter.value} ${en.hero.counter.label}.`, '')

add(`## ${en.experience.heading}`, '', en.experience.intro, '')
for (const r of en.experience.roles) {
  add(`### ${r.company} — ${r.title} (${r.dates}, ${r.location})`, '', r.summary, '')
  for (const h of r.highlights) add(`- ${h}`)
  add('')
  for (const f of r.features ?? []) {
    add(`${f.title}: ${f.description}`)
    for (const b of f.bullets) add(`- ${b}`)
    add('')
  }
  if (r.result) add(`${r.result.headline}: ${r.result.line}`, '')
}
add(`### Also worked with`, '')
for (const c of en.experience.clients) add(`- ${c.name} — ${c.title}`)
add('')

add(`## ${en.projects.heading}`, '')
for (const p of en.projects.items) {
  add(`- **${p.name}** (${p.status}): ${p.description} Tech: ${p.tags.join(', ')}.${p.link ? ` [${p.link.label}](${p.link.href})` : ''}`)
}
add('')

add(`## ${en.skills.heading}`, '')
add(`Languages: ${en.skills.languages.map((l) => `${l.name} (${l.level})`).join(', ')}.`, '')
add(`${en.skills.softHeading}: ${en.skills.soft.map((s) => `${s.name} (${s.line})`).join('; ')}.`, '')
for (const g of en.skills.stack) add(`- ${g.group}: ${g.items.join(', ')}`)
add('')

add(`## ${en.education.heading} and ${en.education.certHeading}`, '')
for (const e of en.education.items) add(`- ${e.program}, ${e.school}${e.period ? ` (${e.period})` : ''}`)
for (const c of en.education.certs) add(`- ${c.name} (${c.issuer})`)
add('')

add('## FAQ', '')
for (const f of en.faq.items) {
  const answer = f.answer.replace(/<a href="mailto:([^"]+)">[^<]+<\/a>/g, '$1')
  add(`**${f.question}** ${answer}`, '')
}

const text = L.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n'
writeFileSync(fileURLToPath(new URL('../public/llms.txt', import.meta.url)), text)
console.log('written', text.length, 'bytes,', text.split('\n').length, 'lines')
