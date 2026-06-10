const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Idelfonso Gutierrez — Software Engineer" />
  <meta property="og:description" content="Software Engineer. iOS, Server-Side, Data Pipelines." />
  <meta property="og:image" content="/img/circular-shot.png" />
  <title>Idelfonso Gutierrez — Software Engineer</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    :root {
      --bg: #ffffff;
      --surface: #f6f8fa;
      --border: #d0d7de;
      --text: #1f2328;
      --muted: #656d76;
      --accent: #0969da;
      --max-w: 1100px;
      font-size: 16px;
    }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container {
      max-width: var(--max-w);
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    /* Header */
    .site-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 2rem;
    }
    .badge-binary {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.35rem 0.9rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text);
    }
    .badge-binary::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #3fb950;
      border-radius: 50%;
    }

    /* Main two-column layout */
    .main-grid {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 3rem;
      align-items: start;
    }

    /* Left column */
    .intro h1 {
      font-size: 2.2rem;
      font-weight: 700;
      margin: 0 0 0.25rem;
      line-height: 1.2;
    }
    .intro .role {
      font-size: 1.05rem;
      color: var(--muted);
      margin: 0 0 1.25rem;
    }
    .intro .role a {
      color: var(--muted);
      text-decoration: underline;
    }
    .intro p {
      margin: 0 0 1rem;
      color: var(--text);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* Pill buttons */
    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin: 1.25rem 0;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.45rem 1rem;
      font-size: 0.9rem;
      color: var(--text);
      cursor: pointer;
      transition: background 0.15s;
    }
    .pill:hover {
      background: var(--surface);
      text-decoration: none;
    }

    /* Right column — Recent Posts */
    .sidebar {
      position: sticky;
      top: 2rem;
    }
    .sidebar h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 1rem;
    }
    .sidebar .tagline {
      font-size: 0.9rem;
      color: var(--muted);
      font-style: italic;
      margin: 0 0 1.5rem;
      line-height: 1.5;
    }
    .post-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .post-item {
      border-bottom: 1px solid var(--border);
      padding: 0.9rem 0;
    }
    .post-item:last-child {
      border-bottom: none;
    }
    .post-item a {
      color: var(--text);
      font-size: 0.9rem;
      font-weight: 500;
    }
    .post-item a:hover {
      color: var(--accent);
    }
    .post-meta {
      font-size: 0.8rem;
      color: var(--muted);
      margin-top: 0.2rem;
    }
    .rss-icon {
      display: inline-block;
      margin-top: 0.75rem;
      font-size: 1.1rem;
    }

    /* Worked @ section */
    .worked-section {
      margin-top: 3rem;
      text-align: center;
    }
    .worked-section h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem;
    }
    .worked-section .categories {
      font-size: 0.8rem;
      color: var(--muted);
      margin-bottom: 1rem;
    }
    .logo-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .logo-row img {
      height: 28px;
      opacity: 0.7;
      filter: grayscale(100%);
      transition: opacity 0.2s, filter 0.2s;
    }
    .logo-row img:hover {
      opacity: 1;
      filter: grayscale(0%);
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem 1rem;
      color: var(--muted);
      font-size: 0.8rem;
      margin-top: 2rem;
    }

    /* FAQ section */
    .faq-section {
      margin-top: 3rem;
    }
    .faq-section h2 {
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0 1.25rem;
    }
    .faq-item {
      border-bottom: 1px solid var(--border);
      padding: 1rem 0;
    }
    .faq-item:last-child {
      border-bottom: none;
    }
    .faq-item h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.4rem;
    }
    .faq-item p {
      margin: 0;
      color: var(--text);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    @media (max-width: 800px) {
      .main-grid {
        grid-template-columns: 1fr;
      }
      .sidebar {
        position: static;
      }
      .intro h1 {
        font-size: 1.7rem;
      }
    }
  </style>
</head>
<body>

<div class="container">

  <div class="site-header">
    <span class="badge-binary">Binary Apps</span>
  </div>

  <div class="main-grid">
    <!-- Left Column -->
    <div class="intro">
      <h1>Hola 🙋🏻‍♂️</h1>
      <h1>I'm Idelfonso</h1>
      <p class="role">Software Engineer (Remote 🌐)</p>

      <p>As a dedicated software developer, I specialize in crafting ☁️ cloud-based applications and orchestrating ⚙️ deployment automation. My expertise extends to defining 📝 feature requirements and creating sleek 📱 mobile apps, especially for the Apple ecosystem. My aim? Streamlined, intuitive software that delights its users.</p>

      <p>When designed thoughtfully, I believe technology can be powerful and wonderfully simple.</p>

      <p>I'm here to elevate your project by exploring a new concept, adding features, or optimizing operations.</p>

      <div class="pills">
        <a class="pill" href="#code">💻 Code</a>
        <a class="pill" href="#clients">🤝 Clients</a>
        <a class="pill" href="#dance">💃 Let's Dance ☕️</a>
        <a class="pill" href="#services">⚡ Services</a>
      </div>
    </div>

    <!-- Right Column -->
    <div class="sidebar">
      <p class="tagline">Curiosity and continuous learning are invaluable skills.</p>
      <h2>Recent Posts</h2>
      <ul class="post-list">
        <li class="post-item">
          <a href="#">Mastering iOS Provisioning: A Developer's Guide to Certificates & Profiles - Part 1</a>
          <div class="post-meta">4 min read</div>
        </li>
        <li class="post-item">
          <a href="#">PR Merged - Swift AWS Lambda Events</a>
          <div class="post-meta">1 min read</div>
        </li>
        <li class="post-item">
          <a href="#">NSManagedObjectContext().refreshAllObjects {}</a>
          <div class="post-meta">1 min read</div>
        </li>
      </ul>
      <a class="rss-icon" href="#" title="RSS Feed">📶</a>
    </div>
  </div>

  <!-- Worked @ -->
  <div class="worked-section">
    <h3>Worked @</h3>
    <p class="categories">Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce</p>
    <div class="logo-row">
      <img src="/img/nm-logo.png" alt="Northwestern Medicine" />
      <img src="/img/ultabeauty.png" alt="Ulta Beauty" />
      <img src="/img/gamejame.png" alt="GrowIt" />
      <img src="/img/kinkarta.png" alt="KIN+KARTA" />
      <img src="/img/yellowpepper.png" alt="YellowPepper" />
      <img src="/img/ally_logo.png" alt="Ally's Flower" />
    </div>
  </div>

  <!-- FAQ -->
  <div class="faq-section">
    <h2>FAQ</h2>

    <div class="faq-item">
      <h3>Are you open to new opportunities?</h3>
      <p>Yes — I'm open to a conversation and exploring what you're working on. No pressure either way; if it's a good fit for both of us, great, and if not, no worries.</p>
    </div>

    <div class="faq-item">
      <h3>What kind of work arrangements do you consider?</h3>
      <p>Contract, contract-to-hire, or full-time. I'm flexible on structure as long as the work and team are a good fit.</p>
    </div>

    <div class="faq-item">
      <h3>Do you work remotely? What timezone are you in?</h3>
      <p>I'm fully remote, based in US Central Time (CST/CDT). I have a strong overlap with US timezones and am comfortable working with distributed teams across other regions.</p>
    </div>

    <div class="faq-item">
      <h3>What are your rates?</h3>
      <p>It depends on the scope, duration, and type of engagement — let's talk and figure out what makes sense for both sides.</p>
    </div>

    <div class="faq-item">
      <h3>What does your tech stack look like?</h3>
      <p>iOS/Swift for mobile, cloud platforms like AWS and Cloudflare for infrastructure and deployment automation, and Vue/TypeScript for web. I'm comfortable picking up new tools when the project calls for it.</p>
    </div>

    <div class="faq-item">
      <h3>What kind of projects or roles are you a good fit for?</h3>
      <p>Mobile (iOS) development, cloud infrastructure and deployment automation, feature development, and general full-stack work — from new concepts to optimizing existing systems.</p>
    </div>

    <div class="faq-item">
      <h3>How do I get in touch?</h3>
      <p>Email me at <a href="mailto:idelfonsog2@gmail.com">idelfonsog2@gmail.com</a> — happy to set up a call to discuss further.</p>
    </div>
  </div>

</div>

<footer>
  <p>Idelfonso Gutierrez · <a href="mailto:idelfonsog2@gmail.com">idelfonsog2@gmail.com</a></p>
</footer>

</body>
</html>`;

const AGENT_UA_PATTERNS = [
  /GPTBot/i,
  /ChatGPT-User/i,
  /OAI-SearchBot/i,
  /ClaudeBot/i,
  /Claude-Web/i,
  /Claude-User/i,
  /anthropic-ai/i,
  /PerplexityBot/i,
  /Perplexity-User/i,
  /Google-Extended/i,
  /CCBot/i,
  /cohere-ai/i,
  /Bytespider/i,
  /Amazonbot/i,
  /Applebot-Extended/i,
];

const MARKDOWN = `# Idelfonso Gutierrez — Software Engineer

Remote software engineer specializing in cloud-based applications, deployment automation, and mobile apps for the Apple ecosystem.

## About

As a dedicated software developer, I specialize in crafting cloud-based applications and orchestrating deployment automation. My expertise extends to defining feature requirements and creating sleek mobile apps, especially for the Apple ecosystem. My aim is streamlined, intuitive software that delights its users.

When designed thoughtfully, technology can be powerful and wonderfully simple.

I'm here to elevate your project by exploring a new concept, adding features, or optimizing operations.

## Experience

Worked across Enterprise, Healthcare, Retail, Agriculture, Financing, Outsourcing, Startup, and Ecommerce sectors, including:

- Northwestern Medicine
- Ulta Beauty
- GrowIt
- KIN+KARTA
- YellowPepper
- Ally's Flower

## Recent Posts

- Mastering iOS Provisioning: A Developer's Guide to Certificates & Profiles - Part 1 (4 min read)
- PR Merged - Swift AWS Lambda Events (1 min read)
- NSManagedObjectContext().refreshAllObjects {} (1 min read)

## FAQ

**Are you open to new opportunities?**
Yes — open to a conversation and exploring what you're working on. No pressure either way; if it's a good fit for both sides, great, and if not, no worries.

**What kind of work arrangements do you consider?**
Contract, contract-to-hire, or full-time. Flexible on structure as long as the work and team are a good fit.

**Do you work remotely? What timezone are you in?**
Fully remote, based in US Central Time (CST/CDT). Strong overlap with US timezones and comfortable working with distributed teams across other regions.

**What are your rates?**
Depends on the scope, duration, and type of engagement — happy to discuss and figure out what makes sense for both sides.

**What does your tech stack look like?**
iOS/Swift for mobile, cloud platforms like AWS and Cloudflare for infrastructure and deployment automation, and Vue/TypeScript for web. Comfortable picking up new tools as needed.

**What kind of projects or roles are you a good fit for?**
Mobile (iOS) development, cloud infrastructure and deployment automation, feature development, and general full-stack work — from new concepts to optimizing existing systems.

**How do I get in touch?**
Email idelfonsog2@gmail.com — happy to set up a call.

## Contact

Email: idelfonsog2@gmail.com
`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/" && url.pathname !== "") {
      return env.ASSETS.fetch(request);
    }

    const userAgent = request.headers.get("User-Agent") ?? "";
    const isAgent = AGENT_UA_PATTERNS.some((pattern) => pattern.test(userAgent));

    if (isAgent) {
      return new Response(MARKDOWN, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    return new Response(HTML, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  },
} satisfies ExportedHandler<Env>;
