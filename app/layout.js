'use client'
import './globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
