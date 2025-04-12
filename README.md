# JunkBoxx

A modern e-commerce platform for tech, gaming, music, and urban culture.

## Project Status

- **Main Branch**: Production-ready
- **Dev Branch**: Active development
- **Latest Update**: Authentication system improvements and bug fixes
- **Next Steps**: Database integration and e-commerce features

## Features

- 🌐 **Internationalization**
  - Support for 12 languages including RTL languages (Arabic, Hebrew, Persian)
  - Automatic language detection based on browser settings
  - Persistent language preferences
  - Country flags for visual language selection

- ♿ **Accessibility**
  - WCAG 2.1 compliant
  - Screen reader support
  - Keyboard navigation
  - Skip to content link
  - Reduced motion support
  - High contrast mode
  - ARIA labels and roles

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Smooth animations
  - Modern component library
  - Tailwind CSS styling

- 🔒 **Authentication**
  - Spotify OAuth integration
  - Secure session management
  - Protected routes
  - User preferences persistence

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Spotify OAuth, Custom Admin Auth
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/DevBoyK/junkboxx.git
   cd junkboxx
   ```

2. Switch to development branch
   ```bash
   git checkout dev
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in required environment variables:
     ```
     # Spotify API
     SPOTIFY_CLIENT_ID=your_client_id
     SPOTIFY_CLIENT_SECRET=your_client_secret
     SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
     NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id
     NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

     # Admin Authentication
     ADMIN_USERNAME=admin
     ADMIN_PASSWORD_HASH=hashed_password

     # Database
     DATABASE_URL=your_database_url
     ```

5. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a feature branch from dev:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

3. Push to your feature branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request to merge into dev branch

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── i18n/                  # Internationalization
│   ├── locales/           # Language translations
│   ├── config.ts          # i18next configuration
│   └── types.ts           # Translation types
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## Internationalization

The application supports multiple languages with RTL support. Language selection is persisted in localStorage and automatically detects the user's preferred language.

### Supported Languages
- English (US/UK)
- Spanish
- French
- German
- Italian
- Japanese
- Korean
- Chinese
- Arabic (RTL)
- Hebrew (RTL)
- Persian (RTL)

### Adding New Translations

1. Create a new translation file in `src/i18n/locales/`
2. Add the language to `languageMetadata` in `src/i18n/config.ts`
3. Import and add the translation to the i18n resources

## Accessibility Features

- Skip to content link for keyboard users
- ARIA labels for interactive elements
- Role attributes for semantic HTML
- Focus management
- Reduced motion support
- Screen reader announcements
- Keyboard navigation support
- High contrast mode

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Spotify for their API
- All contributors and maintainers
