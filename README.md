# Jacob Telgenhoff - Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and professional experience as a full-stack software developer.

## 🌟 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Animated sections with smooth scrolling navigation
- **Project Showcase**: Detailed project cards with expandable information
- **Technical Skills**: Visual representation of programming languages and technologies
- **Contact Form**: Functional contact form for professional inquiries
- **Performance Optimized**: Fast loading with modern build tools

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### UI Components
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, customizable icons
- **Radix UI** - Unstyled, accessible UI primitives

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript** - Static type checking
- **Path Aliases** - Clean import paths with `@/` prefix

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── navbar.tsx      # Navigation component
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   ├── tech-stack.tsx  # Skills showcase
│   ├── projects.tsx    # Project portfolio
│   ├── contact.tsx     # Contact form
│   └── footer.tsx      # Footer component
├── assets/             # Static assets
├── lib/                # Utility functions
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PersonalPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### AWS Deployment

The project includes an automated deployment script for AWS:

```bash
./deploy.sh
```

This script will:
1. Build the production version
2. Deploy to S3 bucket (`portfolioassetdistributionbucket`)
3. Invalidate CloudFront cache for immediate updates

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**
   - Upload the `dist/` folder contents
   - Configure your domain and SSL

## 🎨 Customization

### Colors and Theming
- Edit `src/index.css` for color scheme changes
- Modify CSS custom properties for theme customization
- Update Tailwind config for additional design tokens

### Content Updates
- **Projects**: Edit `src/components/projects.tsx`
- **Skills**: Modify `src/components/tech-stack.tsx`
- **About**: Update `src/components/about.tsx`
- **Contact**: Edit contact information in `src/components/contact.tsx`

### Styling
- Use Tailwind CSS classes for styling
- Add custom CSS in `src/index.css`
- Modify component-specific styles in individual files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration

### Path Aliases
Configured in `tsconfig.app.json` and `vite.config.ts`:
- `@/` points to `src/`
- `@/components/` for component imports
- `@/lib/` for utility functions

### Environment Variables
Create a `.env` file for any environment-specific configurations.

---

**Built by Jacob Telgenhoff**