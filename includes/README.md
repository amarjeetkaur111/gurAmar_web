# Reusable Header & Footer Components

This directory contains reusable HTML header and footer components for the GurAmar website.

## Components

### 1. header.html
**Location:** `includes/header.html`

Contains the navigation bar (navbar) used across all pages.

**Features:**
- Responsive Bootstrap navbar with dark background
- GurAmar branding and logo
- Navigation links: Home, About, Projects, Services, Blog, Contact
- Services dropdown with links to all 7 service pages
- Mobile-friendly hamburger menu
- Gold accent styling for active/hover states

**Used in:** All HTML pages (index.html, about.html, blog.html, contact.html, project.html, services.html, blog-single.html, and all service-*.html pages)

### 2. footer.html
**Location:** `includes/footer.html`

Contains the footer section used across all pages.

**Features:**
- Company branding and description
- Quick Links section
- Our Services section (links to all services)
- Get In Touch section (address, phone, email)
- Copyright notice with dynamic year
- Consistent styling across all pages

**Used in:** All HTML pages

## How to Update

### Updating the Header
If you need to make changes to the navigation:
1. Edit `includes/header.html`
2. Update the navbar code as needed
3. Replace the `<nav>` section in ALL HTML pages with the updated code

### Updating the Footer
If you need to make changes to the footer:
1. Edit `includes/footer.html`
2. Update the footer code as needed
3. Replace the `<footer>` section in ALL HTML pages with the updated code

## Dynamic Loading (Optional)

A JavaScript helper is available for dynamic component loading:

**File:** `js/components-loader.js`

**Usage:**
```html
<!-- Add placeholders in your HTML -->
<div id="navbar-placeholder"></div>
<div id="footer-placeholder"></div>

<!-- Include the loader script -->
<script src="js/components-loader.js"></script>
```

This allows you to load header and footer dynamically without modifying every page. However, the current implementation embeds the components directly in each page for better SEO and offline support.

## CSS Styling

Both components use styling from:
- `css/style.css` - Bootstrap and base styles
- `css/guramar-modern.css` - Custom GurAmar modern design

Key colors used:
- **Primary Dark:** #0E0E0E (navbar background)
- **Gold Accent:** #C9A84C (for highlights, hover states)
- **Text Color:** #FFFFFF and variations with transparency

## Navigation Structure

**Main Navigation:**
- Home → index.html
- About → about.html
- Projects → project.html
- Services (Dropdown):
  - Interior Design → service-interior-design.html
  - Kitchen Fit-Out → service-kitchen.html
  - Bathroom Renovation → service-bathroom.html
  - Civil Works → service-civil-works.html
  - MEP Services → service-mep.html
  - Custom Furniture → service-furniture.html
  - Exterior Works → service-exterior.html
- Blog → blog.html
- Contact → contact.html

## Pages Using These Components

1. `index.html` - Homepage
2. `about.html` - About page
3. `blog.html` - Blog listing
4. `blog-single.html` - Individual blog post
5. `contact.html` - Contact form
6. `project.html` - Projects gallery
7. `services.html` - Services overview
8. `service-interior-design.html` - Interior Design service
9. `service-kitchen.html` - Kitchen service
10. `service-bathroom.html` - Bathroom service
11. `service-civil-works.html` - Civil Works service
12. `service-mep.html` - MEP service
13. `service-furniture.html` - Furniture service
14. `service-exterior.html` - Exterior service

## Future Updates

When adding new pages:
1. Copy the header from `includes/header.html`
2. Copy the footer from `includes/footer.html`
3. Ensure the active nav item matches the current page
4. Include all required CSS files (style.css, guramar-modern.css)
5. Update navigation dropdowns if adding new services

## Contact Information

**Phone:** +971 58 501 6101  
**Email:** info@guramardecor.com  
**Location:** Offices in Dubai & Abu Dhabi, UAE
