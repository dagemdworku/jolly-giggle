# Jolly Giggle

Jolly Giggle is a Daily Dose of Joy website designed using [Next.js 14](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/). It uses Google's Gemini LLM AI to generate jokes, which are presented as stickers drawn on a canvas. Users can download these stickers as PNG files.

Visit the live site here: [https://jolly-giggle.vercel.app](https://jolly-giggle.vercel.app)

## Getting Started

To run the development server:

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

## Environment Variables

This project uses environment variables for configuration. To set these up, follow these steps:

1. Create a new file in the root directory of the project named `.env`.

2. Open the `.env` file in your text editor.

3. Add the following line to the file:

    ```bash
    GENERATIVE_LANGUAGE_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your actual API key.

4. Save and close the file.

Remember not to commit the `.env` file to your version control system. It contains sensitive information and should be kept local. If you're using git, the `.env` file should already be in the `.gitignore` file. If not, add it.

## Contributing

Jolly Giggle is an open-source project, and contributions are welcome! Feel free to open issues or submit pull requests.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.