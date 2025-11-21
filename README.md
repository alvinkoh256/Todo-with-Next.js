Created this app to learn:
- React
- Typescript
- Next.js framework
- Prisma ORM

What I've learnt:
- React
    - Creating reusable components (e.g. Navbar) across different pages, makes it easier to maintain components that are used everywhere.

- Typescript
-   Defining data types expected so errors are highlighted and identified when coding, as opposed to during runtime errors like in JS

- Next.js Framework
-   Server components render data (triggered by page load) by fetching from DB (GET only) without separate API calls, improving performance. However, it cannot have interactivity.
-   Client components can accept inputs and events from users, and can call server actions to CRUD the DB. However, it should not fetch data directly from DB.
-   Server actions include functions that are used by client components to CRUD the DB

- Prisma ORM
-   Type-safe database queries
-   Protect against SQL injection
-   Define schema with code

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
