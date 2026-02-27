# Ai Shang Research Training Platform

AI Driven Scientific Research Full Chain Training Camp. Easy Scientific Research for researchers, graduate students, PhD students, and university professors.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (Strict Mode)
- Tailwind CSS
- Framer Motion

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Generate or ensure video assets are in place:
> [!IMPORTANT]
> The video files `global-water-cycle.mp4` and `agricultural-ecology.mp4` must be placed in the `public/videos` directory before deployment.

3. Run the development server:
```bash
npm run dev
```
Navigate to `http://localhost:3000`.

## Deployment to Vercel

1. Commit your changes:
```bash
git add .
git commit -m "Initialize Ai Shang Research platform"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy:
- Connect your GitHub repository to Vercel.
- The build command `npm run build` and output directory `.next` will be automatically detected.
- **No environment variables are required for this project.**
- Click Deploy.
