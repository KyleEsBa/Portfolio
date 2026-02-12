# Kyle Escobedo - Full Stack Developer Portfolio

A modern, responsive, and bilingual portfolio website built with React, Vite, and Tailwind CSS. Features bilingual support (English & Spanish), smooth animations, and a clean, professional design.

## 🚀 Features

- **Bilingual Support**: Switch between English and Spanish with persistent language preference
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Smooth Animations**: Fade-in effects, slide-up animations, and smooth transitions
- **Dark Mode Ready**: Professional color scheme with blue and white accents
- **Component-Based Architecture**: Modular and maintainable component structure
- **SEO Optimized**: Proper meta tags and structured HTML
- **Fast Performance**: Built with Vite for optimal development and production builds
- **Language Context**: Centralized language management using React Context API
- **LocalStorage Persistence**: Language preference persists across sessions

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── LanguageContext.jsx
├── translations/
│   ├── en.js           # English translations
│   └── es.js           # Spanish translations
├── App.jsx
├── index.css
└── main.jsx
```

## 🛠 Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Programming language
- **PostCSS**: CSS transformation
- **Autoprefixer**: Vendor prefix automation

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository** (or download the files)
```bash
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:3000` in your browser.

## 🏗 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 👁 Preview Production Build

```bash
npm run preview
```

## 🌐 Bilingual Support

The portfolio supports both English and Spanish. Users can toggle the language using the language button in the navbar.

### Using Translations

All text content is managed through translation objects in `/src/translations/`:

- `en.js` - English translations
- `es.js` - Spanish translations

To use translations in your components:

```javascript
import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { es } from '../translations/es';

function MyComponent() {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;
  
  return <h1>{t.nav.about}</h1>;
}
```

## 🎨 Customization

### Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: "#0284c7",  // Primary blue
    // ... other shades
  }
}
```

### Fonts

Change font family in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

### Adding New Translations

1. Add new keys to `/src/translations/en.js` and `/src/translations/es.js`
2. Use in components with the language context

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px - 1024px)
- **Desktop**: `lg:` (1024px - 1280px)
- **Large Desktop**: `xl:` (1280px+)

## ✨ Animations

Custom animations are defined in `src/index.css`:

- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation with fade
- `animate-fade-in-down` - Fade in from top
- `animate-scroll-reveal` - Reveal on scroll

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📝 Customizing Content

### Update Personal Information

- **Hero Section**: Modify text and links in `src/components/Hero.jsx`
- **About Section**: Update in `src/components/About.jsx`
- **Experience**: Edit in `src/components/Experience.jsx`
- **Projects**: Modify in `src/components/Projects.jsx`
- **Skills**: Update in `src/components/Skills.jsx`
- **Education**: Edit in `src/components/Education.jsx`
- **Contact**: Update in `src/components/Contact.jsx`

### Update Social Links

Social media links are found in multiple components. Search for:
- LinkedIn URL: `https://www.linkedin.com/in/kyleescobedo`
- GitHub URL: `https://github.com/kyleesba`
- Email: `kyleescobedob@gmail.com`

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo"
```

2. Add deploy scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Connect your repository to Netlify or drag and drop the `dist/` folder

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, Vite will automatically use the next available port.

### Styling Issues
- Clear `node_modules` and reinstall: `npm install`
- Clear browser cache (Ctrl+Shift+R)

### Language Not Persisting
- Check that localStorage is enabled in your browser
- Clear localStorage and refresh: `localStorage.clear()`

## 📄 License

This portfolio is open source and available for personal use.

## 👤 Author

**Kyle Escobedo**
- Email: kyleescobedob@gmail.com
- LinkedIn: [@kyleescobedo](https://www.linkedin.com/in/kyleescobedo)
- GitHub: [@kyleesba](https://github.com/kyleesba)

## 💡 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 🙌 Acknowledgments

Inspired by modern portfolio designs and best practices in web development.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
