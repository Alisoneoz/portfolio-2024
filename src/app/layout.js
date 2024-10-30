import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Alison Estephany | Web Developer & Dietitian",
  description: "Portfolio of Alison Estephany, a Fullstack Developer and Dietitian specializing in MERN stack, ReactJS, and modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
