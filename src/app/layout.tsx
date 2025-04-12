import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthProvider } from '@/components/providers/auth-provider';
import { ErrorBoundary } from '@/components/providers/error-boundary';
import { CookieConsent } from "@/components/ui/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JunkBoxx - Tech, Gaming, Music & Urban Culture",
  description: "Your gateway to tech, gaming, music, and urban culture. Discover the latest trends, products, and content.",
  keywords: "tech, gaming, music, fashion, urban culture, lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AuthProvider>
          <ErrorBoundary>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-16">{children}</main>
              <Footer />
              <CookieConsent />
            </div>
          </ErrorBoundary>
        </AuthProvider>
      </body>
    </html>
  );
}
