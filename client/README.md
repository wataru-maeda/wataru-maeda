# Wataru Maeda - Portfolio

A modern, performant portfolio website showcasing full-stack engineering expertise and projects.

![Portfolio Preview](https://img.shields.io/badge/status-live-success)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

## 🚀 Tech Stack

### Core
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Chakra UI v3** - Component library with dark theme

### Features
- **i18next** - Internationalization (English/Japanese)
- **Wouter** - Lightweight routing
- **React Icons** - Tabler Icons integration
- **Responsive Design** - Mobile-first approach

## ✨ Features

- 🌙 **Dark Theme** - Sleek dark design with blue accent colors
- 🌐 **Bilingual** - Full English and Japanese support
- 🎨 **Modern UI** - Card-based bento grid layout
- ⚡ **Animations** - Smooth hover effects and transitions
- 📱 **Responsive** - Optimized for all screen sizes
- 🎯 **Performance** - Optimized bundle with Vite

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/
│   ├── elements/      # Reusable UI components
│   └── layouts/       # Layout components
├── pages/
│   ├── Home/          # Home page sections
│   │   └── _sections/ # Hero, Stats, Expertise, Philosophy, Footer
│   └── NotFound/      # 404 page
├── i18n/
│   └── locales/       # Translation files (en/ja)
└── theme.ts           # Chakra UI theme configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Background**: Pure black (#000000)
- **Card**: Dark gray (#0a0a0a)
- **Text**: White with muted variants

### Components
- **HoverCard**: Reusable card with gradient hover effects
- **Theme Tokens**: Centralized color and spacing system

## 📝 Content Management

Content is managed through i18n JSON files in `src/i18n/locales/`:
- `en.json` - English translations
- `ja.json` - Japanese translations

## 🚀 Deployment

The site is deployed using GitHub Actions to GitHub Pages.

### Build Command
```bash
npm run build
```

### Output
Static files are generated in the `dist/` directory.

## 📄 License

© 2026 Wataru Maeda. All rights reserved.

## 🔗 Links

- **Website**: [watarumaeda.com](https://watarumaeda.com)
- **GitHub**: [@wataru-maeda](https://github.com/wataru-maeda)
- **LinkedIn**: [wtr0716](https://www.linkedin.com/in/wtr0716/)
- **Email**: w.maeda.ca@gmail.com (EN) / w.maeda.jp@gmail.com (JP)

---

Built with ❤️ by Wataru Maeda
