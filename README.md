# Pritam Chavan Portfolio

Modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and React Icons.

## Folder Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public
│   ├── favicon.svg
│   └── Pritam_Chavan_Resume.txt
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── data
    │   └── portfolio.js
    └── components
        ├── About.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        ├── Experience.jsx
        ├── Footer.jsx
        ├── Hero.jsx
        ├── Navbar.jsx
        ├── ProjectCard.jsx
        ├── Projects.jsx
        ├── SectionHeading.jsx
        ├── SkillBadge.jsx
        └── Skills.jsx
```

## Installation Commands

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Customize Links

Edit `src/data/portfolio.js` to replace placeholder GitHub, LinkedIn, LeetCode, CodeChef, live demo, and email links.

Replace `public/Pritam_Chavan_Resume.txt` with your actual resume PDF. If you rename it, update `resumePath` in `src/data/portfolio.js`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel and select **New Project**.
3. Import the GitHub repository.
4. Keep these settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. After deployment, update `og:url` in `index.html` with your live Vercel URL.
