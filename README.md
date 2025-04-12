# JunkBoxx

A modern e-commerce platform for tech, gaming, music, and urban culture enthusiasts.

## Live Site

The application is currently live at: [https://junkboxx.vercel.app/](https://junkboxx.vercel.app/)

## Features

- 🎵 Music streaming integration with Spotify
- 🛍️ E-commerce functionality
- 🎮 Gaming and tech product showcase
- 👕 Fashion and lifestyle content
- 🔐 Secure authentication
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- PostgreSQL database
- Spotify Developer Account

### Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/junkboxx.git
   cd junkboxx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with your credentials:
   - Get Spotify API credentials from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Set up your PostgreSQL database
   - Generate a secure NEXTAUTH_SECRET

5. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Required environment variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/junkboxx?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"

# Spotify API credentials
SPOTIFY_CLIENT_ID="your_spotify_client_id"
SPOTIFY_CLIENT_SECRET="your_spotify_client_secret"
SPOTIFY_REDIRECT_URI="http://localhost:3000/api/auth/callback/spotify"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Project Structure

```
junkboxx/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
├── prisma/             # Database schema
└── scripts/            # Utility scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@junkboxx.com or join our Discord community.
