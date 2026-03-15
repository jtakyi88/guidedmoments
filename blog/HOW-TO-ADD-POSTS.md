# How to Add a New Blog Post — Guided Moments

## Quick Steps (5 Minutes)

### Step 1: Create the Article File
1. Open the `blog/` folder
2. Copy the file `_template.html`
3. Rename the copy to your article's URL-friendly name (e.g., `finding-your-purpose.html`)
   - Use lowercase letters and hyphens instead of spaces

### Step 2: Add Your Featured Image
1. Save your featured image (ideally 1200x800 pixels) to `assets/images/`
2. Name it descriptively (e.g., `blog-finding-purpose.png`)

### Step 3: Edit the Article File
Open your new file and replace the placeholder text:

1. **Title** — Change `YOUR ARTICLE TITLE` in the `<title>` tag and the `<h1>` tag
2. **Description** — Write a 1-2 sentence summary in the `<meta name="description">` tag
3. **Image path** — Update `YOUR-IMAGE.png` to your actual image filename (appears twice)
4. **Category & Date** — Update the `article-meta` span (e.g., "Wellness • April 1, 2026 • 5 min read")
5. **Article content** — Write your article between the `<div class="article-body">` tags using:
   - `<p>text</p>` for paragraphs
   - `<h2>text</h2>` for section headings
   - `<blockquote>"quote"</blockquote>` for featured quotes
   - `<ul><li>item</li></ul>` for bullet lists
   - `<ol><li>item</li></ol>` for numbered lists

### Step 4: Add to Blog Listing Page
1. Open `blog/index.html`
2. Find the comment `<!-- TO ADD NEW BLOG POSTS -->`
3. Copy one of the existing `<a href="..." class="blog-card">` blocks
4. Paste it just above the comment
5. Update the link, image, title, excerpt, and category

### Step 5: Add to Homepage (Optional)
1. Open `index.html`
2. Find the "Insights" section
3. Replace one of the existing insight cards or add a new one

### Step 6: Push to GitHub
Run these commands in your terminal:
```
git add -A
git commit -m "Add new blog post: Your Title Here"
git push origin master
```

## Writing Tips for Maximum Engagement
- **Keep paragraphs short** — 2-4 sentences max
- **Use blockquotes** for your most powerful statements
- **Include a personal story** — readers connect with authenticity
- **End with a call to action** — guide readers toward the free consultation
- **Aim for 800-1200 words** — long enough to provide value, short enough to keep attention
