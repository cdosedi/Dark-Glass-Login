# Dark Glass Login Template

A dark, glassmorphism login page template built with HTML5, CSS3, and vanilla JavaScript. Features a frosted-glass card with neon accent colors and backdrop blur. No build step, no frameworks, no dependencies.

## What's Included

```
Dark Glass/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Features

Dark glassmorphism design with backdrop blur, Fully responsive - mobile, tablet, and desktop ready, Inline SVG icons (brand, mail, lock, eye toggle) - no external icon library, Google & GitHub social login buttons (thesvg.org CDN), Real-time form validation with inline error messages, Password show/hide toggle inside the input field, Loading spinner state during form submission, Remember me checkbox and Forgot password link, Create account link for new users, Accessible markup with ARIA labels and semantic HTML, CSS variables for easy customization, Respects prefers-reduced-motion accessibility preference, No build step, no frameworks, no dependencies - works offline

## Quick Start

1. Download the Dark Glass folder.
2. Open index.html in your browser. No server required.
3. Edit css/style.css to match your brand colors using the :root variables.
4. Connect js/main.js to your backend authentication endpoint.

### Change primary color

Open css/style.css and update the variables at the top:

```css
:root {
  --color-primary: #8b5cf6;
  --color-primary-hover: #7c3aed;
}
```

## Customization

| File | Purpose |
|------|---------|
| index.html | Structure, form fields, icons, social buttons, footer links |
| css/style.css | All visual styling via CSS variables |
| js/main.js | Validation, password toggle, loading state, submit handler |

### Add social providers

Copy an existing .social-btn in index.html, update data-provider, and add a click handler in js/main.js.

### Backend integration

Replace the simulated timeout in js/main.js with a real fetch call to your API:

```javascript
const response = await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});
```

## Preview

Open index.html directly in any modern browser to preview the template.

## License

This template is provided as-is for personal and commercial use. You are free to sell, modify, and distribute it as part of your own products or website templates.

## Author

Dark Glass Login Template
