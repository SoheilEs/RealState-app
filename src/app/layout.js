import Layout from '@/layout/layout'
import './globals.css'
import localFont from "next/font/local"
import NextAuthProvider from '@/providers/NextAuthProvider'


const yekan = localFont({
  src:[
    {
      path:"../../public/fonts/YekanBakh-Light.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path:"../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal"
    },
    {
      path:"../../public/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path:"../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path:"../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "normal"
    },
  ]
})

export const metadata = {
  title: 'املاک | پروژه سومیت',
  description: 'سامانه خرید و فروش ملک',
}

export default function RootLayout({ children}) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={yekan.className}  >
        <NextAuthProvider>
          <Layout>
            {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
