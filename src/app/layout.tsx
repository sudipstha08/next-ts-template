import {ReactNode} from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Next template',
  description: 'Template',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
