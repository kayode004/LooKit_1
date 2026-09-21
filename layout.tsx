import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LooKit - Nigerian Fashion Rental Marketplace',
  description: 'Rent and sell fashion items in Nigeria. Discover fashion, rent styles, earn money.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LooKit',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LooKit" />
      </head>
      <body>{children}</body>
    </html>
  )
}
