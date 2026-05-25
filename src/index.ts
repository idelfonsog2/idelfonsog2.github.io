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

</div>

<footer>
  <p>Idelfonso Gutierrez · <a href="mailto:idelfonsog2@gmail.com">idelfonsog2@gmail.com</a></p>
</footer>

</body>
</html>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/" && url.pathname !== "") {
      return env.ASSETS.fetch(request);
    }

    return new Response(HTML, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  },
} satisfies ExportedHandler<Env>;
