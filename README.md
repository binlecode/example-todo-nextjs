This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or if use yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## deployment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```sh
docker build -t example-todo-nextjs .
# Run container
docker run -p 3000:3000 example-todo-nextjs
```

Note in Dockerfile the build is expected to have standalone modules, which is
defined in `next.config.js` file.

```js
/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
};
```

## source code formatter

Prettier is used to format the source code:

```sh
npx prettier . --check
npx prettier . --write
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
