import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Farcaster Waitlist',
  description: 'Join our exclusive waitlist on Farcaster',
  other: {
    'base:app_id': '69e1c8e2dce51e89419727e7',
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: 'https://vercel-deployment-url.vercel.app/og-image.png',
      button: {
        title: 'Launch Waitlist',
        action: {
          type: 'launch_miniapp',
          name: 'Farcaster Waitlist',
          url: 'https://vercel-deployment-url.vercel.app',
          splashImageUrl: 'https://vercel-deployment-url.vercel.app/splash.png',
          splashBackgroundColor: '#000000',
        },
      },
    }),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
