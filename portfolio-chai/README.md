# 🚀 Chaitanya Ambekar - Modern Portfolio

A stunning, animated developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, interactive elements, and a modern design that showcases professional skills and projects.

## ✨ Features

### 🎨 Design & Animations
- **Fullscreen Hero Section** with animated gradient backgrounds and floating particles
- **Smooth Scroll Animations** with Framer Motion for fade-ins, slide-ins, and parallax effects
- **Interactive Hover Effects** on cards, buttons, and social icons
- **Custom Cursor** with trailing effects and hover states
- **Dark/Light Mode Toggle** with smooth transitions
- **Responsive Design** optimized for all devices

### 🛠️ Technical Features
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **SEO Optimized** with comprehensive metadata
- **Performance Optimized** with lazy loading and smooth scrolling

### 📱 Sections
- **Hero**: Animated typing effect, gradient backgrounds, interactive buttons
- **About**: Profile photo with hover effects, animated text blocks
- **Skills**: Categorized skill cards with tooltips and hover animations
- **Projects**: Filterable project grid with detailed cards and links
- **Contact**: Animated form with focus states and social media links
- **Navigation**: Sticky navbar with active section highlighting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chaitanya-ambekar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository for automatic deployments

### Other Platforms

- **GitHub Pages**: Use `next export` and deploy the `out` folder
- **AWS S3**: Upload the `out` folder to an S3 bucket
- **Firebase Hosting**: Use `firebase deploy` after building

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#00D9FF",    // Cyan
  secondary: "#FF006E",   // Pink
  accent: "#8338EC",      // Purple
  "dark-bg": "#0A0E27",  // Dark blue
  "dark-darker": "#050814" // Darker blue
}
```

### Content
- **Skills**: Edit `data/skills.ts`
- **Projects**: Edit `data/projects.ts`
- **Personal Info**: Update components with your information
- **Social Links**: Update contact section with your links

### Animations
- Modify animation timings in Framer Motion components
- Add new animations in `globals.css`
- Customize hover effects and transitions

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── About.tsx            # About section
│   ├── AnimatedBackground.tsx # Background animations
│   ├── Contact.tsx          # Contact form and social links
│   ├── CustomCursor.tsx     # Custom cursor effects
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Navbar.tsx           # Navigation bar
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   └── ThemeToggle.tsx      # Dark/light mode toggle
├── data/
│   ├── projects.ts          # Project data
│   └── skills.ts            # Skills data
├── public/
│   └── favicon.ico          # Site favicon
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO**: Comprehensive meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for utility-first styling
- **Next.js** for the React framework
- **React Icons** for beautiful icons
- **Vercel** for seamless deployment

## 📞 Contact

**Chaitanya Ambekar**
- Email: chaitnaya.a@gmail.com
- LinkedIn: [chaitanya-ambekar](https://www.linkedin.com/in/chaitanya-ambekar)
- GitHub: [chaitanyaambekar](https://github.com/chaitanyaambekar)
- Portfolio: [chaitanya-ambekar.dev](https://chaitanya-ambekar.dev)

---

⭐ **Star this repository if you found it helpful!**