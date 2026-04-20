# Launch Page

A minimalist "Coming Soon" landing page built with React, TypeScript, and Tailwind CSS. This static site features a dark-themed design with centered typography and an email capture form that logs submissions to the console.

## Features

- ✅ **Dark Mode Design**: Sleek dark background (`#0F172A`) with white text for high contrast and readability.
- ✅ **Responsive Layout**: Fully responsive from mobile (320px) to desktop.
- ✅ **Email Capture**: Input field with HTML5 validation; logs email to console on submit.
- ✅ **Typography Focus**: Uses *Space Grotesk* for headings and *Inter* for body text via Google Fonts.
- ✅ **No Dependencies**: Zero backend, database, or authentication required — purely static.

## Tech Stack

- **Frontend Framework**: [Vite + React + TypeScript](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom color variables
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body)
- **Hosting Ready**: Deployable on Vercel, Netlify, GitHub Pages, or any static host

## Setup & Development

```bash
# Clone the project
git clone https://github.com/your-username/app_bd03.git
cd app_bd03

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Usage

1. Enter a valid email address in the input field.
2. Click **Notify Me**.
3. The email will be logged to the browser's console:
   ```
   Email submitted: user@example.com
   ```
4. Form resets after submission.

> 🔒 **Note**: No actual data is sent or stored. This is a client-side-only simulation.

## Folder Structure

```
app_bd03/
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Root component
│   ├── components/
│   │   └── EmailCapture.tsx  # Form and messaging
│   └── index.css             # Tailwind imports + custom variables
├── public/
├── index.html                # HTML template with fonts
├── tailwind.config.js        # Tailwind setup with custom colors/fonts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript settings
└── package.json
```

## Styling System

Custom CSS variables defined in `src/index.css` and mapped in `tailwind.config.js`:

| Purpose         | Variable Name     | Value       |
|----------------|-------------------|-------------|
| Background     | `--color-bg`      | `#0F172A`   |
| Surface        | `--color-surface` | `#1E293B`   |
| Text           | `--color-text`    | `#F8FAFC`   |
| Accent         | `--color-accent`  | `#6366F1`   |
| Success        | `--color-success` | `#10B981`   |

Fonts are loaded via Google Fonts in `<head>` of `index.html`.

## Accessibility

- ✅ Semantic HTML structure
- ✅ Sufficient color contrast (AA+ compliant)
- ✅ Keyboard navigable form
- ✅ Focus indicators on interactive elements
- ✅ ARIA-ready (no dynamic content announcements yet)

## Performance

- ⚡️ Lightweight: No JS bundles beyond React + Vite
- 🖼️ Font loading optimized with `preconnect`
- 🧹 No unused CSS (Tailwind tree-shaken in production)

## Deployment

Deploy to **Vercel** with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/your-username/app_bd03)

Or use any static hosting provider:

```bash
# Build static files
npm run build

# Output: ./dist/
```

## License

MIT