# CCCC Vision 1,000 — Site

## What this is

The website for Christ-Centered Community Church, Bacolod City.
Five pages, clean URLs, no `.html` needed in the browser.

---

## Pages

| URL | File | What it is |
|---|---|---|
| `/` | `public/index.html` | Vision 1,000 main document |
| `/updates` | `public/updates.html` | Messages, reports, testimonies |
| `/equipping` | `public/equipping.html` | Witnesses course |
| `/resources` | `public/resources.html` | PDFs and links |
| `/support` | `public/support.html` | Contact and PayPal |

---

## Run locally (on your computer)

**First time only:**
```
npm install
```

**Every other time:**
```
npm start
```

Then open your browser to: `http://localhost:3000`

---

## Deploy to GitHub Pages

1. Push the contents of `public/` to your `gh-pages` branch  
   (or configure your repo to serve from the `public/` folder)
2. GitHub Pages serves static files — all pages will work  
3. Note: clean URLs (`/updates` without `.html`) require the server.js  
   for local development. On GitHub Pages, visitors may need to use  
   `/updates.html` unless you add a 404.html redirect trick (ask when ready)

---

## How to update content

### Add a new post to Updates

1. Open `public/updates.html`
2. Find the comment: `POST 2 — REPORT` (or copy any post-card block)
3. Change `data-cat` to one of: `message` `report` `testimony` `update`
4. Replace the title, date, and excerpt text
5. To add a photo: replace the `img-ph` block with:
   ```html
   <img src="/assets/photos/your-photo.jpg" alt="Description" style="width:100%;height:160px;object-fit:cover">
   ```
6. Save the file and push to GitHub

---

### Add a lesson to Equipping (Witnesses)

1. Open `public/equipping.html`
2. Copy the entire `<article class="lesson-full">` block (Lesson 1)
3. Paste it below the existing lesson
4. Update the eyebrow, title, source, and all unit sections
5. Find the lesson-card for that lesson number in the "Upcoming lessons" list
6. Change `is-coming` to `is-available` on the card div
7. Change `badge-coming` to `badge-available` on the span
8. Save and push

---

### Add a PDF to Resources

1. Place your PDF in `public/assets/pdfs/`
2. Open `public/resources.html`
3. Find a `pdf-card placeholder` block
4. Remove the word `placeholder` from the class
5. Set `href="/assets/pdfs/your-file.pdf"`
6. Update the name and description
7. Save and push

---

### Add a link to Resources

1. Open `public/resources.html`
2. Find a `link-card placeholder` block in the Recommended Links section
3. Remove `placeholder` from the class
4. Set the real `href`, name, description, and link-url display text
5. Save and push

---

### Add your PayPal link to Support

1. Open `public/support.html`
2. Find the comment: `PAYPAL LINK — replace # with your actual PayPal.me`
3. Replace `href="#"` with `href="https://paypal.me/yourname"`
   (or your full PayPal button link)
4. Update the footer PayPal link the same way (search for "Give via PayPal")
5. Also update `href="mailto:your@email.com"` with your real email address
6. Save and push

---

## File structure

```
cccc-site/
├── package.json          ← run scripts
├── server.js             ← local dev server (npm start)
├── README.md             ← this file
└── public/
    ├── index.html        ← Vision 1,000 (/)
    ├── updates.html      ← Updates (/updates)
    ├── equipping.html    ← Witnesses Course (/equipping)
    ├── resources.html    ← Resources (/resources)
    ├── support.html      ← Contact & Support (/support)
    └── assets/
        ├── shared.css    ← Design tokens and nav styles (edit once, applies everywhere)
        ├── nav-inject.js ← Nav HTML builder
        ├── nav.js        ← Nav dropdown and scroll behavior
        ├── cccc-logo.png ← CCCC logo (nav + hero watermark)
        └── pdfs/         ← Put downloadable PDFs here
            └── (empty — add PDFs here)
```

---

## To change something that appears on every page

Edit `public/assets/shared.css` — colors, fonts, nav styles, footer styles.
One change here updates all five pages at once.

---

## To upgrade to a visual admin panel later (Option 3)

When you're ready to add Netlify CMS (so you can write posts from a browser
instead of editing HTML), this site is already structured for it.
The content is in predictable HTML blocks that CMS tools can manage.
Just say the word and we build it on top of what's already here.
