# Moman landing page

Landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It is configured as a static export for Cloudflare Pages: `pnpm build` creates the deployable website in `out/`.

## Edit locally

Install Node.js 22 LTS, then open a terminal in this project folder and run:

```powershell
corepack enable
pnpm install
pnpm dev
```

Open <http://localhost:3000>. Changes are shown as you save files. The main page is assembled in `app/page.tsx`; its sections and navigation are in `components/movant/`; shared styles are in `app/globals.css`; vehicle and content data are in `lib/movant-data.ts`; images and icons are in `public/`.

Stop the local server with Ctrl+C.

## Publish with GitHub and Cloudflare Pages

1. Create an empty GitHub repository. Upload the **contents** of this folder so `package.json`, `app/`, `components/`, and `public/` are at the repository root. Do not upload the ZIP as the only repository file.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select the GitHub repository.
3. Set the production branch to `main`, framework preset to **Next.js (Static HTML Export)**, build command to `pnpm build`, and build output directory to `out`. Keep the project root as `/` if you uploaded the files at the repository root.
4. Save and deploy. Cloudflare will build the site; each later push to `main` will trigger a production deploy, and pull requests can get preview deploys.

You can also preview the production build locally with `pnpm build`; the generated site is in `out/`. Do not upload `out/` as your source repository: commit the project source so Cloudflare can rebuild it after each edit.

## Common edits

- Page sections and their order: `app/page.tsx`
- Text, layout, and section behavior: files in `components/movant/`
- Repeated vehicle or maintenance data: `lib/movant-data.ts`
- Colors, typography, and global styles: `app/globals.css`
- Static assets: `public/` (reference them in the page with paths such as `/vehicles/moto.png`)

This landing page currently uses static content and client-side interactions. If you later add server-rendered pages, API routes, or other server-only features, the static Pages configuration will need to change.
