import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle =
  "Grosbyte Technologies | Software & Website Development Nepal";
const description =
  "Practical software, websites, web and mobile applications, automation, and digital marketing for your business. Discuss your project with Grosbyte Technologies in Nepal.";

export const metadata: Metadata = {
  metadataBase: new URL("https://grosbyte.com"),
  title: {
    default: defaultTitle,
    template: "%s | Grosbyte Technologies",
  },
  description,
  applicationName: "Grosbyte Technologies",
  keywords: [
    "custom software Nepal",
    "web platforms and ecommerce",
    "mobile app development",
    "digital growth strategy",
    "product design and brand growth",
    "AI integration",
  ],
  icons: {
    icon: "/icons/logo-removebg.png",
    shortcut: "/icons/logo-removebg.png",
    apple: "/icons/logo-removebg.png",
  },
  openGraph: {
    url: "https://grosbyte.com",
    title: defaultTitle,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Grosbyte Technologies",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Grosbyte Technologies - Software & Website Development Nepal",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/images/og-default.png"],
  },
};

const jsonLd = [getOrganizationSchema(), getWebSiteSchema()];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} light`}
      suppressHydrationWarning
    >
      {/* Extensions may inject body attributes such as cz-shortcut-listen before hydration. */}
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
        <JsonLd data={jsonLd} />
      </body>
    </html>
  );
}
