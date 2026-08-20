import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
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
    "web platforms and ecommerce",
    "mobile app development",
    "digital growth strategy",
    "product design and brand growth",
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
        url: "/icons/logo-removebg.png",
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
    images: ["/icons/logo-removebg.png"],
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
    <html lang="en" className={urbanist.variable}>
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
