# Farcaster Base Mini App - Waitlist Demo

A production-ready Farcaster mini app built for Base, featuring a waitlist signup form.

## 🚀 Quick Start

### 1. **Clone & Install**
```bash
git clone https://github.com/wowitsok/farcaster-base-miniapp.git
cd farcaster-base-miniapp
npm install
```

### 2. **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```
This will:
- Deploy your app to Vercel
- Give you a production URL (save this!)
- Auto-link to your GitHub repo

### 3. **Update Manifest**
After deployment, edit `public/.well-known/farcaster.json`:
- Replace `https://vercel-deployment-url.vercel.app` with your actual Vercel URL

Example:
```json
{
  "accountAssociation": {
    "header": "",
    "payload": "",
    "signature": ""
  },
  "miniapp": {
    "version": "1",
    "name": "Farcaster Waitlist",
    "homeUrl": "https://your-project.vercel.app",
    "iconUrl": "https://your-project.vercel.app/icon.svg",
    ...
  }
}
```

### 4. **Create Account Association**
1. Go to https://www.base.dev/preview
2. Paste your Vercel URL in "Account association" tab
3. Click "Verify"
4. Sign with your mobile phone
5. Copy the credentials and paste into `farcaster.json`

### 5. **Push & Redeploy**
```bash
git add .
git commit -m "Update manifest with account association"
git push
# Vercel auto-deploys on push
```

### 6. **Test on Base**
1. Go to https://www.base.dev/preview
2. Click "Launch" button
3. Your mini app should load!

### 7. **Publish**
Post the link in the Base app:
```
https://your-project.vercel.app
```

## 📁 File Structure
```
.
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── components/
│       └── WaitlistForm.tsx  # Main form component
├── public/
│   ├── .well-known/
│   │   └── farcaster.json   # Mini app manifest
│   └── icon.svg             # App icon
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🔧 Customization

### Change App Name & Description
Edit `app/layout.tsx` and `public/.well-known/farcaster.json`

### Add Images
Replace placeholder URLs with your own:
- `iconUrl` - App icon (512x512)
- `splashImageUrl` - Splash screen (1080x1920)
- `heroImageUrl` - Hero image
- `screenshotUrls` - App screenshots

### Update Functionality
Edit `app/components/WaitlistForm.tsx` to:
- Add API endpoint for submissions
- Change validation rules
- Customize success/error messages

## 🛠️ Development

```bash
# Run local dev server
npm run dev

# Visit http://localhost:3000
```

## 📦 Built With
- **Next.js 14** - React framework
- **Farcaster SDK** - Mini app integration
- **Tailwind CSS** - Styling
- **Vercel** - Hosting

## ✅ Checklist Before Deploying

- [ ] Manifest URLs updated to Vercel URL
- [ ] Account association credentials added
- [ ] App icons/images added (512x512, 1080x1920)
- [ ] App name and description customized
- [ ] Tested on https://www.base.dev/preview
- [ ] Published on Base app

## 🆘 Troubleshooting

**"Manifest not found"**
- Vercel URL in `farcaster.json` is wrong
- Try: `https://your-project.vercel.app/.well-known/farcaster.json`

**"Invalid account association"**
- Signature expired - re-sign on base.dev
- Domain doesn't match Vercel URL

**"App won't load"**
- Check browser console for SDK errors
- Verify `sdk.actions.ready()` is called in WaitlistForm

## 📝 License
MIT
