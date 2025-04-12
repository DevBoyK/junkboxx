# JunkBoxx

A modern e-commerce platform with integrated music streaming capabilities.

## Features

- Spotify integration for music streaming
- Multi-language support (English, Spanish, French)
- Secure authentication
- Admin dashboard
- Responsive design
- Dark/Light mode
- Accessibility-first approach
- Performance optimized

## Security Features

- JWT-based authentication
- CSRF protection
- Rate limiting
- Secure cookie handling
- Environment variable validation
- Error logging and monitoring

## Accessibility Features

- ARIA labels for all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- Proper heading hierarchy

## Performance Features

- Image optimization with Next.js Image component
- Priority loading for above-the-fold content
- Responsive images with proper sizing
- Efficient state management
- Optimized animations and transitions
- Lazy loading for below-the-fold content

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DevBoyK/junkboxx.git
cd junkboxx
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/callback
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD_HASH=your_bcrypt_hashed_password
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

The project uses Jest and React Testing Library for testing. Run tests with:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage Requirements

- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

## 🛠️ Tech Stack

- **Framework:** Next.js 14.1.0
- **Language:** TypeScript
- **UI Components:** 
  - Radix UI
  - Tailwind CSS
- **State Management:** React Context
- **Authentication:** Custom JWT + Spotify OAuth
- **Internationalization:** i18next
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint
- **Code Formatting:** Prettier

## 📦 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── providers/      # Context providers
│   └── ui/             # UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## 🔐 Authentication

The application uses a hybrid authentication system:
- JWT-based authentication for admin users
- Spotify OAuth for regular users
- Public access to most pages with protected routes for specific features

## 🌐 Internationalization

Supports multiple languages:
- English (en)
- Spanish (es)
- French (fr)

## 🎨 Theming

Supports light and dark modes using `next-themes`.

## 📝 Development Notes

- The project uses the Next.js App Router
- API routes are located in `src/app/api`
- Environment variables must be properly configured for all features to work
- Rate limiting is implemented for API routes
- Mobile-responsive design with a custom navigation menu

## 🔄 Version Control

- Main branch: Production-ready code
- Dev branch: Development and testing

## 📋 Dependencies

Key dependencies and their versions:
- react: ^18.2.0
- react-dom: ^18.2.0
- next: ^14.1.0
- typescript: ^5
- @testing-library/react: ^14.1.2
- @testing-library/jest-dom: ^6.1.5

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
