'use client'
import './globals.css'
import UserContext from '@/Components/UserContext.js';
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <UserContext>{children}</UserContext>
      </body>
    </html>
  )
}
