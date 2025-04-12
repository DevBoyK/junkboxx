# Junkboxx

A modern e-commerce platform built with Next.js 14, featuring a unique blend of music, tech, fashion, and lifestyle products.

## Features

- **Modern UI/UX**: Built with Next.js 14, Tailwind CSS, and Radix UI
- **Authentication**: Secure login with Spotify and admin authentication
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Category Pages**: Dedicated pages for Music, Tech, Fashion, and Lifestyle
- **Admin Dashboard**: Secure admin interface for content management
- **API Integration**: Spotify API integration for music features
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Optimized for Vercel deployment

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
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in required environment variables
4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Required environment variables are listed in `.env.example`. Make sure to set up:
- Spotify API credentials
- Admin credentials
- Database URL
- JWT secret
- Vercel deployment settings

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/           # Authentication routes
│   ├── admin/            # Admin dashboard
│   └── [category]/       # Category pages
├── components/            # React components
│   ├── ui/               # UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
└── styles/              # Global styles
```

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
