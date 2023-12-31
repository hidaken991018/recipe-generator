import { CommonHeader } from '@/components/header/CommonHeader/CommonHeader'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-lightBeige flex flex-col items-center ">
        <CommonHeader />
        <main className='max-w-[1024px] '>
          {children}
        </main>
      </body>
    </html>
  )
}
