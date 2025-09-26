# GitHub Pages Deployment Guide

This guide will help you deploy the Better Dream Foundation website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `better-dream-foundation` (or your preferred name)
3. Make it public
4. Don't initialize with README (we'll push existing code)

## Step 2: Prepare Your Local Project

1. Download/clone this project to your computer
2. Open terminal in the project directory
3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Step 3: Configure for GitHub Pages

The project is already configured for GitHub Pages with:
- `next.config.js` set for static export
- `package.json` with export script
- Proper asset handling

## Step 4: Build and Test Locally

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Test locally:
   \`\`\`bash
   npm run dev
   \`\`\`

## Step 5: Deploy to GitHub

1. Initialize git repository:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   \`\`\`

2. Add your GitHub repository as remote:
   \`\`\`bash
   git remote add origin https://github.com/YOUR_USERNAME/better-dream-foundation.git
   \`\`\`

3. Push to GitHub:
   \`\`\`bash
   git branch -M main
   git push -u origin main
   \`\`\`

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

## Step 7: Set up GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
\`\`\`

## Step 8: Access Your Website

Your website will be available at:
`https://YOUR_USERNAME.github.io/better-dream-foundation`

## Custom Domain (Optional)

To use your own domain (e.g., betterdreamfoundation.org):

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## Updating Your Website

To update your website:

1. Make changes to your code
2. Commit and push:
   \`\`\`bash
   git add .
   git commit -m "Update website"
   git push
   \`\`\`

GitHub Actions will automatically rebuild and deploy your site.

## Troubleshooting

### Images not loading
- Ensure all images are in the `public/images` folder
- Check that image paths start with `/images/`

### 404 errors
- Make sure `trailingSlash: true` is set in `next.config.js`
- Verify all internal links use proper paths

### Build failures
- Check the Actions tab in your GitHub repository
- Review error logs and fix any issues
- Ensure all dependencies are properly installed

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your `next.config.js` configuration
3. Ensure all file paths are correct
4. Test the build locally first

Your Better Dream Foundation website should now be live on GitHub Pages!
