# Against Disclosure - Website

A multi-page Astro.js website presenting the book "Against Disclosure: A Manifesto for Creative Autonomy in the Age of AI."

## Overview

This website provides a digital companion to the book, featuring:
- Interactive homepage with chapter navigation
- Individual chapter pages with full content
- Historical timeline visualization
- About page with book structure
- Responsive design with burgundy/beige color scheme
- Expressionist art style inspired by urban sketches

## 🎨 Adding Images

Place your AI-generated images in the `public/assets/` folder with the following names:

- `homepage-hero.png` - Workshop of Ideas (homepage hero)
- `introduction.png` - The Printing Press Revolution
- `chapter-1.png` - The Hidden Process (mirrors and reflections)
- `chapter-2.png` - Dürer's Monogram (Renaissance workshop)
- `chapter-3.png` - The Scribe's Collaboration
- `chapter-4.png` - The Bureaucratic Machine
- `chapter-5.png` - The Scopes Trial Parallel
- `conclusion.png` - The Creative Sanctuary
- `timeline.png` - The Continuum of Creativity

All images should follow the art style described in the prompts provided.

## 🚀 Project Structure

```text
/
├── public/
│   └── assets/          # Place your images here
├── src/
│   ├── components/
│   │   ├── Navigation.astro      # Main navigation
│   │   └── ChapterNav.astro      # Chapter pagination
│   ├── layouts/
│   │   └── BaseLayout.astro      # Base HTML layout
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── introduction.astro    # Introduction chapter
│       ├── chapter-1.astro       # Chapter 1
│       ├── chapter-2.astro       # Chapter 2
│       ├── chapter-3.astro       # Chapter 3
│       ├── chapter-4.astro       # Chapter 4
│       ├── chapter-5.astro       # Chapter 5
│       ├── conclusion.astro      # Conclusion
│       ├── timeline.astro        # Historical timeline
│       └── about.astro           # About the book
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🎨 Design System

### Colors
- **Burgundy**: `#4a1f1f` - Primary accent
- **Dark Burgundy**: `#2d1212` - Text and dark backgrounds
- **Black**: `#0a0a0a` - Deep shadows
- **Warm Beige**: `#e8dcc8` - Light backgrounds
- **Light Beige**: `#f5f1e8` - Page backgrounds
- **Accent Gold**: `#d4a574` - Highlights and CTAs

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: Crimson Text (serif)

## 📝 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   - Generate images using the provided prompts
   - Save them in `public/assets/` with the correct filenames
   - Images should be PNG format, ideally 1920x1080 or similar high resolution

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:4321`
   - Explore the site and all chapter pages

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📦 Deployment

The built site will be in the `./dist/` folder. You can deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🎯 Features

- **Responsive Design**: Mobile-friendly navigation and layouts
- **Chapter Navigation**: Previous/Next navigation between chapters
- **Image-Rich**: Hero images on every page
- **Smooth Transitions**: Hover effects and animations
- **Accessibility**: Semantic HTML and proper heading structure
- **Fast Performance**: Astro's static site generation

## 📖 Content

The website includes summaries and key concepts from:
- Introduction: Beyond Transparency
- Chapter 1: The Illusion of Transparency
- Chapter 2: Ownership of the Creative Process
- Chapter 3: Authorship Redefined
- Chapter 4: Ethical and Practical Failures of Disclosure
- Chapter 5: Creative Autonomy and Institutional Overreach
- Conclusion: Embracing the Opaque
- Historical Timeline: From Gutenberg to AI

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
