'use client'
import './globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wraper from '@/Wraper/Wraper.js'

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wraper>{children}</Wraper>
      </body>
    </html>
  )
}
