export const metadata = {
  title: "Frederic-K's Portfolio",
  description:
    "Welcome to the second edition of my interactive portfolio, designed to reflect the evolution of my skills and professional journey.",
  openGraph: {
    title: "Frederic-K's Portfolio",
    description:
      "Welcome to the second edition of my interactive portfolio, designed to reflect the evolution of my skills and professional journey.",
    images: [
      {
        url: "/images/project/Portfolio3DNext/Portfolio3DNextPix.webp",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://frederic-k-portfolio.netlify.app/",
    type: "website",
  },
  icons: {
    icon: "/LogoFK-waterpx-black-100px.png",
  },
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  //   // Also supported by less commonly used
  //   // interactiveWidget: 'resizes-visual',
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
}
