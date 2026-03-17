import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Claw-Navi",
  url: "https://www.claw-navi.com/",
  inLanguage: "ja",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.claw-navi.com/docs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Claw-Navi",
  url: "https://www.claw-navi.com/",
  logo: "https://www.claw-navi.com/og-cover.png",
  sameAs: [
    "https://github.com/openclaw/openclaw",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.claw-navi.com"),
  title: "Claw-Navi | OpenClaw日本語攻略ポータル",
  description:
    "OpenClawの導入・運用・スキル活用・クラウド比較を実務視点で解説。日本市場向けの自律型AIエージェント運用メディア。",
  alternates: {
    canonical: "https://www.claw-navi.com/",
  },
  openGraph: {
    title: "Claw-Navi | OpenClaw日本語攻略ポータル",
    description:
      "OpenClawの導入・運用・スキル活用・クラウド比較を実務視点で解説。日本市場向けの自律型AIエージェント運用メディア。",
    type: "website",
    url: "https://www.claw-navi.com/",
    siteName: "Claw-Navi",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Claw-Navi OpenClaw日本語攻略ポータル",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claw-Navi | OpenClaw日本語攻略ポータル",
    description:
      "OpenClawの導入・運用・スキル活用・クラウド比較を実務視点で解説。日本市場向けの自律型AIエージェント運用メディア。",
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta property="og:url" content="https://www.claw-navi.com/" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={notoSansJp.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YMVJG1XNQY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YMVJG1XNQY');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
