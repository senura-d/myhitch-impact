import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata = {
  title: "MYHitch Impact - Empowering Communities Through Technology",
  description: "Help nonprofits, charities, schools, and community organizations raise funds, manage volunteers, track projects, measure impact, and automate operations with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScroll />
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
