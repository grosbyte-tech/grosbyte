import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});
const title = "Grosbyte Technologies | Software, Web, Mobile & Digital Growth";
const description =
  "Grosbyte Technologies builds custom software, web applications, mobile apps, modern websites, AI-integrated solutions, digital marketing strategies, and digital brands for growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://grosbyte.com"),
  title,
  description,
  keywords: [
    "custom software Nepal",
    "web application development",
    "mobile app development",
    "digital marketing Kathmandu",
    "digital branding",
    "AI integration",
  ],
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Grosbyte Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1408,
        height: 768,
        alt: "Grosbyte Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grosbyte Technologies",
  url: "https://grosbyte.com",
  logo: "https://grosbyte.com/logo.png",
  email: "contact@grosbyte.com",
  telephone: "+9779869793130",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: [
    "https://www.instagram.com/grosbyte.tech/",
    "https://www.facebook.com/profile.php?id=61591801983966",
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
