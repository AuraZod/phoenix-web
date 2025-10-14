# Phoenix Reaper Esports Website Changes

**Date:** October 13, 2025  
**Made by:** AuraZod  
**All rights reserved by:** Phoenix Reaper Esports

---

## Summary of Changes

This document outlines all the changes made to the Phoenix Reaper Esports website as part of the branding refresh and feature enhancement update.

---

## 1. Social Media Embed/Sharing Meta Tags ✅

Added Open Graph and Twitter Card meta tags to all HTML pages (`index.html`, `privacy.html`, `terms.html`) to display the custom social banner when sharing links on social media platforms.

**New Meta Tags:**
- `og:type`, `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Image used: `./assets/images/socialbanner.jpg`

---

## 2. Logo Updates ✅

Replaced all logo references across the website with the new Phoenix logo.

**Changes:**
- Header logo: `./assets/images/phoenix-logo.png`
- Footer logo: `./assets/images/phoenix-logo.png`
- Updated in: `index.html`, `privacy.html`, `terms.html`
- Improved alt text: "Phoenix Reaper Esports"

---

## 3. Social Media Icons Update ✅

Updated social media icons in the footer of all pages.

**Changes:**
- **Facebook → X (Twitter):**
  - URL: `https://x.com/Phoenix_esp1`
  - Icon: Changed from `logo-facebook` to `logo-twitter`
- **Discord:** Kept existing icon (ionicons doesn't have a newer version)
- **Instagram:** Unchanged
- **YouTube:** Unchanged

---

## 4. Orange Blur Header on Scroll ✅

Added a stylish orange blur effect to the header when scrolling down the page.

**CSS Changes (`style.css`):**
```css
.header.active.scrolled {
  background: rgba(255, 69, 0, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
```

**JavaScript Changes (`script.js`):**
- Modified `activeEl` function to add/remove `scrolled` class
- Effect triggers when `window.scrollY > 100`

---

## 5. Tournament Card Hover Effects ✅

Added hover effects to tournament/news cards for better user engagement.

**CSS Changes (`style.css`):**
```css
.news-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.news-card:hover {
  transform: scale(1.03) translateY(-4px);
  box-shadow: 0 0 15px rgba(255, 69, 0, 0.45);
}
```

---

## 6. Tournament Banner Resize ✅

Adjusted the main tournament banner for better responsive display.

**Changes in `index.html`:**
- Updated figure dimensions: `--width: 500; --height: 333`
- Added `max-width: 100%` for responsive sizing
- Added `height: auto` to maintain aspect ratio
- Banner now displays properly on all screen sizes

---

## 7. Footer "Contact Us" Link Update ✅

Changed the "Contact Us" link in the Useful Links section to redirect to Discord.

**Updated in all HTML files:**
- Old: `href="#contact"`
- New: `href="https://discord.gg/phoenix-reaper-esports-1274787524895572111"` (with `target="_blank"`)

---

## 8. Centralized Configuration File ✅

Created a new `config.js` file in the root directory to centralize all links and configuration.

**File:** `config.js`

**Contains:**
- Social media links (Discord, X, Instagram, YouTube)
- Tournament Discord channel links
- Contact email
- Meta information for SEO/social sharing
- Dynamic link application function

**Integration:**
- Added `<script src="./config.js"></script>` before other scripts in all HTML files
- Links are now managed from a single source

---

## 9. Branding & Attribution Updates ✅

Updated all branding and attribution throughout the website.

**Changes:**
- CSS file header: Changed from "copyright 2022 codewithsadee" to "Made by AuraZod"
- Footer copyright in all HTML files: Added "— Made by AuraZod"
- All rights reserved by: Phoenix Reaper Esports

---

## Files Modified

### Created:
1. `config.js` - Centralized configuration file
2. `CHANGES.md` - This documentation file

### Modified:
1. `index.html` - All changes applied
2. `privacy.html` - All changes applied
3. `terms.html` - All changes applied
4. `assets/css/style.css` - Branding, header blur, hover effects
5. `assets/js/script.js` - Scroll detection for header blur

---

## Testing Recommendations

### Visual Testing:
- ✅ Test header blur effect on scroll (all pages)
- ✅ Test tournament card hover effects
- ✅ Verify logo displays correctly in header and footer
- ✅ Check tournament banner responsiveness (320px - 1920px)

### Functionality Testing:
- ✅ Test all social media links (X, Discord, Instagram, YouTube)
- ✅ Test "Contact Us" footer link redirects to Discord
- ✅ Verify config.js loads properly

### Social Media Testing:
- Test link sharing on:
  - Facebook (Open Graph)
  - Twitter/X (Twitter Cards)
  - LinkedIn (Open Graph)
  - Discord (Open Graph)
- Verify `socialbanner.jpg` displays correctly

### Browser Compatibility:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance:
- Run Lighthouse audit
- Check page load times
- Verify no console errors

---

## Next Steps

1. ✅ All code changes completed
2. 🔄 Test on local development server
3. 🔄 Validate social media sharing
4. 🔄 Perform cross-browser testing
5. 🔄 Mobile responsiveness check
6. 🔄 Deploy to production
7. 🔄 Clear CDN/browser cache

---

## Contact

For any questions or issues regarding these changes, please contact:
- **Developer:** AuraZod
- **Organization:** Phoenix Reaper Esports
- **Email:** aura@phoenixreaperesports.com
- **Discord:** [Phoenix Reaper Esports Server](https://discord.gg/phoenix-reaper-esports-1274787524895572111)

---

**#IgniteTheFlames** 🔥
