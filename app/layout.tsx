import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amaze Game – Free Online Browser Game",
    template: "%s | Amaze Game",
  },
  description:
    "Play Amaze Game online free — Play Amaze Game free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Amaze Game",
    "Amaze Game online",
    "Amaze Game free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Amaze Game Team" }],
  creator: "Amaze Game",
  publisher: "Amaze Game",
  metadataBase: new URL("https://amaze-game.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Amaze Game",
    title: "Amaze Game – Free Online Browser Game",
    description:
      "Play Amaze Game free in your browser — Play Amaze Game free online — no download, no account needed.",
    url: "https://amaze-game.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Game – Free Online Browser Game",
    description:
      "Play Amaze Game free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amaze Game",
              url: "https://amaze-game.com",
              description:
                "Play Amaze Game free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://amaze-game.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amaze Game",
              url: "https://amaze-game.com",
              logo: {
                "@type": "ImageObject",
                url: "https://amaze-game.com/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://amaze-game.com/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
