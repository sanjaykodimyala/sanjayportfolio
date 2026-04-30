# Portfolio Step-by-Step Guide

This document explains where the portfolio files are stored, how to edit them, how to run the website locally, and how to push updates live.

## 1. Project Location

The portfolio project is stored here:

```text
C:\Users\kodim\sanjayportfolio
```

Open this folder in VS Code when you want to edit the portfolio.

## 2. Important Files

Main website component:

```text
src\App.jsx
```

Main portfolio styling:

```text
src\App.css
```

Global page styling and background theme:

```text
src\index.css
```

Images:

```text
src\assets
```

Resume PDFs:

```text
public
```

GitHub Pages deployment workflow:

```text
.github\workflows\deploy.yml
```

## 3. Run the Website Locally

Open a terminal inside:

```text
C:\Users\kodim\sanjayportfolio
```

Then run:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## 4. Edit Website Content

Most text, sections, projects, skills, and contact links are in:

```text
src\App.jsx
```

Common things to edit:

- Name and hero text
- About section
- Experience section
- Projects
- Skills
- Contact links
- Resume link

## 5. Edit Website Design

Most layout and section styling is in:

```text
src\App.css
```

Global colors, typography, and page background are in:

```text
src\index.css
```

## 6. Add or Replace Images

Place new images inside:

```text
src\assets
```

Then import the image in `src\App.jsx`, like:

```jsx
import imageName from './assets/image-file-name.jpg'
```

Use it in JSX like:

```jsx
<img src={imageName} alt="Description" />
```

## 7. Test Before Publishing

Run this command before pushing changes:

```bash
npm run build
```

If the build succeeds, the website is ready to publish.

## 8. Save Changes with Git

Check changed files:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Describe your update"
```

Push to GitHub:

```bash
git push
```

## 9. Live Deployment

The site is deployed with GitHub Pages using GitHub Actions.

Repository:

```text
https://github.com/sanjaykodimyala/sanjayportfolio
```

Live website:

```text
https://sanjaykodimyala.github.io/sanjayportfolio/
```

After pushing changes to the `main` branch, GitHub Actions automatically builds and deploys the latest version.

## 10. If the Live Site Does Not Update

Check the Actions tab in GitHub:

```text
https://github.com/sanjaykodimyala/sanjayportfolio/actions
```

If the latest workflow is still running, wait for it to finish.

If it failed, open the failed run and check the error message.

## 11. Mobile Layout Notes

Mobile-specific styles are in `src\App.css` under:

```css
@media (max-width: 640px)
```

Very small phone styles are under:

```css
@media (max-width: 420px)
```

The large hero visual is hidden on mobile to keep the phone view neat and clean.
