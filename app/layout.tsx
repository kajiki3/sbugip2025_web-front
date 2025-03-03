import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "TherapisToy",
  description: "TherapisToy is a mental health app for children.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
