# Finance App

A personal finance management web application built with Next.js, Prisma, and PostgreSQL.

## Features

- **User Authentication**: Secure login and registration
- **Expense Tracking**: Add, view, and delete personal expenses
- **Category Management**: Organize expenses by customizable categories
- **Dashboard**: View expense statistics and summaries
- **Time Filters**: Filter expenses by day, week, month, year, or custom date range

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/finance-app.git
cd finance-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:

```
DATABASE_URL="postgresql://username:password@localhost:5432/financedatabase"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

## Deployment

This application can be deployed on platforms like Netlify, Vercel, or Railway.

For Netlify deployment:

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables in the Netlify dashboard
4. Install the Netlify Next.js plugin

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built as a personal project to improve finance management
- Icons provided by React Icons
- UI components styled with Tailwind CSS
