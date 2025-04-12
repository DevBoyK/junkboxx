import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { RootProviders } from "@/components/providers/root-providers";
import { metadata } from './metadata';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth-context';
import { ThemeProvider } from '@/contexts/theme-context';

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
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
