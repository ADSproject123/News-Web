# Daily Byte News - Setup Guide

A simple, clean news website optimized for Google AdSense approval.

## 🚀 Quick Start

### Local Development

You can run this site locally using any simple HTTP server:

**Option 1: Python**
```bash
python3 -m http.server 8000
```

**Option 2: Node.js (npx)**
```bash
npx serve
```

**Option 3: PHP**
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
newWeb/
├── index.html              # Homepage
├── post.html              # Single post page
├── categories.html        # Category filtering & search
├── about.html             # About page
├── contact.html           # Contact form
├── privacy.html           # Privacy policy (required for AdSense)
├── terms.html             # Terms of service (required for AdSense)
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine instructions
├── ads.txt                # AdSense verification (update with your info)
└── assets/
    ├── css/
    │   └── style.css      # Responsive styles
    ├── js/
    │   ├── posts.js       # Sample posts data
    │   ├── main.js        # Homepage script
    │   ├── post.js        # Single post script
    │   └── categories.js  # Category/search script
    └── img/
        └── favicon.svg    # Site icon
```

## 🎨 Features

✅ **AdSense-Ready:**
- Privacy policy & terms of service pages
- Clean, ad-friendly layout with placeholder ad slots
- ads.txt file (update with your publisher ID)
- Responsive ad units

✅ **SEO-Optimized:**
- Semantic HTML5
- Meta tags & Open Graph
- sitemap.xml & robots.txt
- Fast loading times

✅ **Modern Design:**
- Dark theme with gradient accents
- Responsive for mobile, tablet, desktop
- Smooth animations & transitions
- Accessibility features (ARIA labels, focus states)

✅ **Content System:**
- Sample news posts in 4 categories (Tech, Business, World, Lifestyle)
- Category filtering & search
- Clean post display

## 🔧 Customization

### 1. Add Your AdSense Code

Replace placeholder IDs in these files:
- `index.html`
- `post.html`
- `categories.html`

Look for:
```html
data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
data-ad-slot="0000000000"
```

Replace with your actual AdSense publisher ID and ad slot IDs.

### 2. Update ads.txt

Edit `ads.txt` and add your publisher ID:
```
google.com, pub-YOUR_PUBLISHER_ID, DIRECT, f08c47fec0942fa0
```

### 3. Add Your Content

Edit `assets/js/posts.js` to add your own articles. Follow this format:

```javascript
{
	id: 'unique-slug',
	title: 'Article Title',
	category: 'Technology',
	date: '2025-10-21',
	author: 'Your Name',
	image: 'https://images.unsplash.com/...',
	excerpt: 'Short preview text...',
	content: 'Full article content...'
}
```

### 4. Update Contact Form

The contact form uses Formspree. To use your own:
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the `action` in `contact.html`

### 5. Customize Branding

- **Colors:** Edit CSS variables in `assets/css/style.css`
- **Logo:** Change "DailyByteNews" text in all HTML files
- **Favicon:** Replace `assets/img/favicon.svg`

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Deploy to GitHub Pages

1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch and root folder
4. Save

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## 📋 Google AdSense Checklist

Before applying:

- [ ] Site has been live for at least 2 weeks
- [ ] Add 15-20 original, high-quality articles
- [ ] Privacy policy page is complete
- [ ] Terms of service page is complete
- [ ] Contact page is working
- [ ] About page explains your site
- [ ] Site is mobile-responsive
- [ ] Navigation is clear and functional
- [ ] No broken links
- [ ] Content complies with AdSense policies

## 🎯 Content Guidelines

To get approved:

1. **Original Content:** Write your own articles, don't copy
2. **Quality:** 500+ words per article, well-formatted
3. **Value:** Provide useful information to readers
4. **Regular Updates:** Post consistently
5. **Professional Design:** Keep it clean and organized
6. **No Prohibited Content:** Avoid adult, violent, or illegal content

## 🔍 SEO Tips

1. Update `sitemap.xml` with all your post URLs
2. Use descriptive titles and meta descriptions
3. Add alt text to all images
4. Create internal links between articles
5. Submit sitemap to Google Search Console

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🆘 Troubleshooting

**Posts not showing?**
- Check browser console for JavaScript errors
- Ensure `posts.js` is loaded correctly

**Styling issues?**
- Clear browser cache
- Check that `style.css` path is correct

**AdSense not working?**
- Ads may not show in local development
- Test on live site after deployment

## 📄 License

This template is free to use for your news website project.

## 🤝 Support

For questions or issues, refer to:
- [Google AdSense Help](https://support.google.com/adsense)
- [Web.dev](https://web.dev) for performance tips

---

**Good luck with your AdSense application! 🎉**

