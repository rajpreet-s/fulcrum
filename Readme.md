# Fulcrum - Influencer Deal Management Platform

Fulcrum is a professional platform designed specifically for micro-influencers to efficiently manage their brand deals and generate comprehensive engagement reports. Built with modern web technologies, it provides a seamless experience for tracking, analyzing, and presenting influencer performance metrics.

## Features

- **Deal Management**: Track and organize all your brand collaborations in one place
- **Report Generation**: Create professional, data-driven reports showcasing your engagement metrics
- **Interactive Dashboard**: Monitor your performance metrics and deal status in real-time
- **Responsive Design**: Access your data seamlessly across all devices
- **Secure Authentication**: Protected access to your sensitive deal information

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Built-in secure authentication system
- **State Management**: React Query for efficient data handling

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/rajpreet-s/fulcrum.git
cd fulcrum/app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up your environment variables by creating a `.env` file in the app directory:
```env
DATABASE_URL="your_postgresql_database_url"
NEXTAUTH_SECRET="your_auth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
app/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── app/         # Application-specific components
│   │   ├── marketing/   # Landing page components
│   │   ├── shared/      # Shared components
│   │   └── ui/          # UI component library
│   ├── lib/             # Utility functions and API helpers
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema and migrations
└── public/             # Static assets
```

## Key Features

### For Micro-Influencers
- **Deal Tracking**: Organize and monitor all your brand collaborations
- **Report Generation**: Create professional reports with engagement metrics
- **Performance Analytics**: Track your growth and engagement over time
- **Professional Dashboard**: Manage your influencer business efficiently

### For Brands
- **Engagement Metrics**: View detailed performance reports
- **Professional Presentation**: Access well-organized deal information
- **Communication History**: Track all interactions in one place

## Contributing

We welcome contributions to Fulcrum! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for the influencer community
