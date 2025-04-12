import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { RootProviders } from "@/components/providers/root-providers";
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth-context';
import { ThemeProvider } from '@/contexts/theme-context';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JunkBoxx",
  description: "Your one-stop shop for music, tech, fashion, and more",
  icons: {
    icon: [
      { url: "/logos/junkboxx_logo_favicon_16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/junkboxx_logo_favicon_32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/junkboxx_logo_favicon_64.png", sizes: "64x64", type: "image/png" },
      { url: "/logos/junkboxx_logo_favicon_128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/logos/junkboxx_logo_favicon_128.png", sizes: "128x128", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <RootProviders>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main id="main-content" className="flex-grow pt-16">{children}</main>
                <Footer />
                <CookieConsent />
              </div>
            </RootProviders>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
