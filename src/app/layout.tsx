import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nbu-business-school.vercel.app'), // Replace with actual domain
  title: {
    default: "NBU Business School | World-Class Professional Diplomas",
    template: "%s | NBU Business School"
  },
  description: "NBU Business School offers Senate-approved professional diploma programs designed to prepare the next generation of business leaders with practical skills and academic rigor.",
  keywords: ["Business School", "Professional Diploma", "Executive Education", "Nigeria Business School", "Finance", "Digital Marketing", "Governance", "Supply Chain", "AI"],
  authors: [{ name: "NBU Business School" }],
  creator: "NBU Business School",
  publisher: "NBU Business School",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nbu-business-school.vercel.app",
    title: "NBU Business School | World-Class Professional Diplomas",
    description: "Empowering leaders with rigorous coursework and practical industry engagement.",
    siteName: "NBU Business School",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "NBU Business School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBU Business School | World-Class Professional Diplomas",
    description: "Empowering leaders with rigorous coursework and practical industry engagement.",
    images: ["/images/og-image.jpg"],
    creator: "@nbubusiness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "NBU Business School",
  "url": "https://nbu-business-school.vercel.app",
  "logo": "https://nbu-business-school.vercel.app/logo.png",
  "sameAs": [
    "https://www.facebook.com/nbubusiness",
    "https://twitter.com/nbubusiness",
    "https://www.linkedin.com/school/nbu-business-school"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kilometre 10 PH/Aba Expressway, Asa",
    "addressLocality": "Asa",
    "addressRegion": "Abia State",
    "postalCode": "450102",
    "addressCountry": "NG"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234 703 256 5918",
    "contactType": "admissions",
    "email": "info@nbu.edu.ng"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
