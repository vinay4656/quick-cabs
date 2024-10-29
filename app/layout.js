"use client"

import { RideProvider } from '../context/RideContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RideProvider>
          {children}
        </RideProvider>
      </body>
    </html>
  )
} 