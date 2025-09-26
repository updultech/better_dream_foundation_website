# GitHub Pages Deployment Instructions

## IMPORTANT: Follow these exact steps to ensure your website shows up correctly on GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it exactly: `better-dream-foundation`
3. Make it **PUBLIC** (GitHub Pages requires public repos for free accounts)
4. **DO NOT** initialize with README, .gitignore, or license

### Step 2: Prepare Your Local Files
1. Download all the project files to your computer
2. Open terminal/command prompt in the project folder
3. Run: `npm install`
4. Test locally: `npm run dev` (should work at http://localhost:3000)

### Step 3: Initialize Git and Push to GitHub
\`\`\`bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Better Dream Foundation website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/better-dream-foundation.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. The GitHub Actions workflow will automatically run

### Step 5: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark)
4. Your website will be live at: `https://YOUR_USERNAME.github.io/better-dream-foundation`

### Step 6: Verify Your Website
- Click the GitHub Pages URL
- You should see the Better Dream Foundation website (NOT a README file)
- The website should be fully functional with navigation, images, and styling

## Troubleshooting

### If you see a README instead of the website:
1. Make sure you selected **GitHub Actions** as the source (not "Deploy from a branch")
2. Check that the workflow completed successfully in the Actions tab
3. Wait a few minutes for DNS propagation

### If the workflow fails:
1. Check the Actions tab for error messages
2. Make sure all files are committed and pushed
3. Verify that `next.config.js` has `output: 'export'`

### If images don't load:
1. Make sure all images are in the `public/images/` folder
2. Check that image paths start with `/images/`
3. Verify images are committed to the repository

## Custom Domain (Optional)
To use your own domain like `betterdreamfoundation.org`:

1. Add a file named `CNAME` to the `public` folder
2. Put your domain name in the file: `betterdreamfoundation.org`
3. Configure your domain's DNS to point to GitHub Pages
4. Enable custom domain in repository settings

## Success Checklist
- ✅ Repository is public
- ✅ GitHub Actions is selected as source
- ✅ Workflow completed successfully
- ✅ Website loads at the GitHub Pages URL
- ✅ All pages and navigation work
- ✅ Images display correctly
- ✅ Styling looks correct

Your Better Dream Foundation website should now be live and accessible to the world! 🎉
