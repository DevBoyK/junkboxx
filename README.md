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

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Spotify Developer Account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Spotify
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# Admin
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD_HASH=your_bcrypt_hashed_password
JWT_SECRET=your_jwt_secret

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/junkboxx.git
cd junkboxx
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Project Structure

```
src/
├── app/              # Next.js pages and API routes
│   ├── ui/          # Base UI components
│   ├── providers/   # Context providers
│   └── layouts/     # Layout components
├── components/       # Reusable UI components
├── lib/             # Utility functions and services
├── i18n/            # Internationalization
└── tests/           # Test files
```

## Security Best Practices

1. Always use environment variables for sensitive data
2. Keep dependencies updated
3. Use HTTPS in production
4. Implement rate limiting
5. Validate all user input
6. Use secure cookie settings
7. Implement proper error handling

## Accessibility Best Practices

1. Use semantic HTML elements
2. Provide alternative text for images
3. Ensure keyboard navigation
4. Maintain proper color contrast
5. Use ARIA attributes appropriately
6. Test with screen readers
7. Follow WCAG guidelines

## Performance Best Practices

1. Optimize images and assets
2. Implement lazy loading
3. Use proper caching strategies
4. Minimize JavaScript bundle size
5. Optimize CSS delivery
6. Monitor Core Web Vitals
7. Use performance budgets

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
