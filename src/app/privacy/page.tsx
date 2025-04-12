import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - JunkBoxx',
  description: 'Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            JunkBoxx ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">2.1 Spotify Data</h3>
            <p>
              When you connect your Spotify account, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your Spotify profile information (name, email, profile picture)</li>
              <li>Your playlists and music preferences</li>
              <li>Your top tracks and artists</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about our services</li>
            <li>Ensure the security of our platform</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Secure token storage using HTTP-only cookies</li>
            <li>Encrypted data transmission</li>
            <li>Regular security audits</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Disconnect your Spotify account</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-medium">support@junkboxx.com</p>
        </section>
      </div>
    </div>
  );
} 