# Better Dream Foundation Ghana

A modern, responsive website for the Better Dream Foundation Ghana, built with Next.js and designed for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Automatic theme switching
- **Modern UI**: Built with Tailwind CSS and shadcn/ui
- **Fast Performance**: Optimized for speed and SEO
- **GitHub Pages Ready**: Configured for static deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/better-dream-foundation.git
   cd better-dream-foundation
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
better-dream-foundation/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── donate/            # Donation page
│   ├── get-involved/      # Get involved page
│   ├── news/              # News & events page
│   ├── projects/          # Projects page
│   ├── reports/           # Reports page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Site header
│   └── theme-provider.tsx # Theme provider
├── public/               # Static assets
│   ├── images/          # Image files
│   └── manifest.json    # PWA manifest
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
└── tailwind.config.ts   # Tailwind configuration
\`\`\`

## 🎨 Customization

### Colors and Branding

Edit `tailwind.config.ts` to customize colors:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
\`\`\`

### Content Updates

- **Homepage**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Team Members**: Update team data in `app/team/page.tsx`
- **Projects**: Modify project information in `app/projects/page.tsx`
- **News**: Update news articles in `app/news/page.tsx`

### Images

Place all images in the `public/images/` directory and reference them as:
\`\`\`typescript
<Image src="/images/your-image.jpg" alt="Description" />
\`\`\`

## 🚀 Deployment

### GitHub Pages

1. Follow the detailed guide in `GITHUB_PAGES_DEPLOYMENT.md`
2. Your site will be available at: `https://YOUR_USERNAME.github.io/better-dream-foundation`

### Custom Domain

To use your own domain:
1. Add a `CNAME` file to the `public` folder
2. Configure DNS settings
3. Enable custom domain in GitHub Pages settings

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

### Adding New Pages

1. Create a new folder in the `app` directory
2. Add a `page.tsx` file
3. Update navigation in `components/header.tsx`

### Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built components
- **Lucide React** for icons

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for all screen sizes
- Fast loading on mobile networks

## 🔧 Configuration

### Environment Variables

For local development, create a `.env.local` file:
\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### SEO Configuration

Update metadata in `app/layout.tsx`:
\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Organization Name",
  description: "Your description",
  // ... other SEO settings
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help:
1. Check the `GITHUB_PAGES_DEPLOYMENT.md` guide
2. Review the troubleshooting section
3. Open an issue on GitHub

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Better Dream Foundation Ghana** - Empowering Communities for a Better Tomorrow
