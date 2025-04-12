import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - JunkBoxx',
  description: 'Read our terms and conditions for using JunkBoxx.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using JunkBoxx ("the Service"), you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p>
            JunkBoxx is a platform that allows users to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Connect their Spotify account</li>
            <li>View and manage their playlists</li>
            <li>Discover new music and products</li>
            <li>Access personalized recommendations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p>
            As a user of the Service, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect the intellectual property rights of others</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content on the Service, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Text, graphics, logos, and images</li>
            <li>Software and code</li>
            <li>Design and layout</li>
          </ul>
          <p className="mt-2">
            is the property of JunkBoxx or its content suppliers and is protected by intellectual property laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Spotify Integration</h2>
          <p>
            By connecting your Spotify account, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comply with Spotify's Terms of Service</li>
            <li>Authorize JunkBoxx to access your Spotify data</li>
            <li>Understand that we do not store your Spotify credentials</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            JunkBoxx shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes
            through the Service or via email.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at:
          </p>
          <p className="font-medium">support@junkboxx.com</p>
        </section>
      </div>
    </div>
  );
} 