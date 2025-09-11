# Better Dream Foundation Website Hosting Guide

## 🌐 Domain Registration & Hosting Setup

### Step 1: Register Your .org Domain

**Recommended Registrars for .org domains:**
- **Namecheap** (Recommended) - $10-12/year
- **Google Domains** - $12/year  
- **GoDaddy** - $15-20/year
- **Porkbun** - $8-10/year

**Domain to Register:** `betterdreamfoundation.org`

### Step 2: Choose Hosting Provider

**Recommended Hosting Options:**

#### Option 1: Vercel (Recommended for Next.js)
- **Free Tier:** Perfect for starting
- **Pro Plan:** $20/month (recommended for production)
- **Features:** 
  - Automatic SSL certificates
  - Global CDN
  - Automatic deployments from GitHub
  - 99.99% uptime guarantee

#### Option 2: Netlify
- **Free Tier:** Good for basic sites
- **Pro Plan:** $19/month
- **Features:**
  - Form handling
  - Identity management
  - Split testing

#### Option 3: DigitalOcean App Platform
- **Basic Plan:** $12/month
- **Professional Plan:** $24/month
- **Features:**
  - Managed databases
  - Container support
  - Monitoring included

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Connect GitHub Repository**
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Select your repository

3. **Configure Build Settings**
   \`\`\`bash
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   \`\`\`

4. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `betterdreamfoundation.org`
   - Configure DNS records as instructed

5. **Environment Variables**
   \`\`\`
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://betterdreamfoundation.org
   \`\`\`

### DNS Configuration

**Add these DNS records at your domain registrar:**

\`\`\`
Type    Name    Value                           TTL
A       @       76.76.19.61                     300
CNAME   www     betterdreamfoundation.org       300
\`\`\`

*Note: Replace with actual Vercel IP addresses provided in your dashboard*

## 🔒 Security Setup

### SSL Certificate
- **Automatic:** Vercel provides free SSL certificates
- **Renewal:** Automatic every 90 days
- **Verification:** Check https://betterdreamfoundation.org

### Security Headers
Add to `next.config.js`:
\`\`\`javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
\`\`\`

## 📊 Monitoring & Analytics

### Website Monitoring
- **Uptime Monitoring:** UptimeRobot (free)
- **Performance:** Google PageSpeed Insights
- **Analytics:** Google Analytics 4

### Admin Dashboard Access
- **URL:** `https://betterdreamfoundation.org/admin/login`
- **Username:** `admin`
- **Password:** `betterdream2024` (Change this!)

## 💰 Cost Breakdown

### Annual Costs:
- **Domain Registration:** $10-15/year
- **Hosting (Vercel Pro):** $240/year
- **Monitoring (Optional):** $0-50/year
- **Total:** $250-305/year

### Monthly Costs:
- **Hosting:** $20/month
- **Domain:** $1/month (annual payment)
- **Total:** ~$21/month

## 🔧 Maintenance Schedule

### Daily:
- Monitor uptime alerts
- Check admin dashboard for issues

### Weekly:
- Review website analytics
- Check for broken links
- Update content as needed

### Monthly:
- Review hosting resource usage
- Check SSL certificate status
- Update team profiles and news

### Quarterly:
- Review and update annual reports
- Security audit
- Performance optimization

## 📞 Support Contacts

### Technical Support:
- **Vercel Support:** support@vercel.com
- **Domain Support:** Your registrar's support
- **Emergency Contact:** Your web developer

### Admin Access Recovery:
If you lose admin access:
1. Check browser saved passwords
2. Contact your web developer
3. Reset via hosting provider dashboard

## 🚨 Emergency Procedures

### Website Down:
1. Check Vercel status page
2. Verify DNS settings
3. Check domain expiration
4. Contact hosting support

### Security Breach:
1. Change admin passwords immediately
2. Review recent admin activity
3. Check for unauthorized content changes
4. Contact security expert if needed

### Domain Expiration:
1. Set up auto-renewal immediately
2. Contact registrar for emergency renewal
3. Monitor DNS propagation after renewal

## 📈 Performance Optimization

### Image Optimization:
- Use WebP format when possible
- Compress images before upload
- Use appropriate image sizes

### Content Delivery:
- Leverage Vercel's global CDN
- Enable gzip compression
- Minimize JavaScript bundles

### SEO Optimization:
- Update meta descriptions regularly
- Use proper heading structure
- Submit sitemap to Google Search Console

---

**Need Help?** Contact your web developer or hosting provider support for assistance with any of these steps.
