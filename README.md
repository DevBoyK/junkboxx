# JunkBoxx

A modern e-commerce platform that combines fashion curation with music discovery, featuring an OLED-optimized design and Spotify integration.

## Features

- 🎵 Spotify Playlist Integration
- 👕 Fashion & Product Curation
- 🖥️ Tech Showcase
- 🌙 OLED-Optimized Design
- 🎶 Background Music
- 🖼️ High-Resolution Imagery
- 👨‍💼 User-Friendly Admin Panel

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- NextAuth.js
- Spotify Web API
- Framer Motion

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/junkboxx.git
   cd junkboxx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   SPOTIFY_CLIENT_ID=""
   SPOTIFY_CLIENT_SECRET=""
   SPOTIFY_REFRESH_TOKEN=""
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel

Access the admin panel at `/admin` to manage:
- Products
- Playlists
- Site Settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@junkboxx.com or open an issue in the GitHub repository.
