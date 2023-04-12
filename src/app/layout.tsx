import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'Chat'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-violet-900 text-gray-100">
        <main className="flex flex-col justify-center items-center w-full max-w-5xl mx-auto px-6">
          {children}
        </main>
      </body>
    </html>
  )
}
