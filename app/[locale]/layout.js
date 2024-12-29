import "@/styles/globals.css"
import localFont from "next/font/local"
import { Providers } from "@/providers/Providers"
import { BACKGROUND_IMAGES } from "@/lib/constants"
import ImagePreloader from "@/components/ImagePreloader/ImagePreloader"
import Header from "@/components/Header/Header"
import FireFlies from "@/components/FireFlies/FireFlies"
import TopButton from "@/components/TopButton/TopButton"
import ToastContainer from "@/components/Toast/ToastContainer"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})
const exo2 = localFont({
  src: "../fonts/Exo2-VariableFont_wght.ttf",
  variable: "--font-exo2",
  weight: "100 900",
})

export default async function RootLayout({ params, children }) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} relative min-h-screen font-exo2 antialiased`}
      >
        <Providers locale={locale}>
          <ImagePreloader imageSources={BACKGROUND_IMAGES} />
          <FireFlies />
          <Header />
          <main className="flex-grow">{children}</main>
          <TopButton />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
