import localFont from "next/font/local";
import "./globals.css";
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
