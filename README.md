# X7md Blog

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
./
├── astro.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── public
│   ├── assets
│   │   └── logo.svg
│   ├── CNAME
│   ├── favicon.ico
│   ├── fonts
│   │   ├── ttf
│   │   │   ├── Vazirmatn-RD-Black.ttf
│   │   │   ├── Vazirmatn-RD-Bold.ttf
│   │   │   ├── Vazirmatn-RD-ExtraBold.ttf
│   │   │   ├── Vazirmatn-RD-ExtraLight.ttf
│   │   │   ├── Vazirmatn-RD-Light.ttf
│   │   │   ├── Vazirmatn-RD-Medium.ttf
│   │   │   ├── Vazirmatn-RD-Regular.ttf
│   │   │   ├── Vazirmatn-RD-SemiBold.ttf
│   │   │   └── Vazirmatn-RD-Thin.ttf
│   │   ├── variable
│   │   │   └── Vazirmatn-RD[wght].ttf
│   │   └── webfonts
│   │       ├── Vazirmatn-RD-Black.woff2
│   │       ├── Vazirmatn-RD-Bold.woff2
│   │       ├── Vazirmatn-RD-ExtraBold.woff2
│   │       ├── Vazirmatn-RD-ExtraLight.woff2
│   │       ├── Vazirmatn-RD-Light.woff2
│   │       ├── Vazirmatn-RD-Medium.woff2
│   │       ├── Vazirmatn-RD-Regular.woff2
│   │       ├── Vazirmatn-RD-SemiBold.woff2
│   │       ├── Vazirmatn-RD-Thin.woff2
│   │       └── Vazirmatn-RD[wght].woff2
│   ├── images
│   │   ├── cat.svg
│   │   ├── GitHub-Emblem.png
│   │   ├── satr.svg
│   │   ├── sleepyhead-cat-unsplash.jpg
│   │   ├── termux-thm.jpg
│   │   ├── test2.png
│   │   ├── test.png
│   │   └── what-is-deno.png
│   ├── robots.txt
│   ├── style
│   │   ├── global.css
│   │   └── home.css
│   └── Vazirmatn-RD-font-face.css
├── sandbox.config.json
├── src
│   ├── components
│   │   ├── Banner.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── layouts
│   │   ├── blog.astro
│   │   └── page.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── about-me.astro
│   │   ├── blog
│   │   ├── index.astro
│   │   └── posts
│   │       └── index.astro
│   ├── styles
│   │   └── global.css
│   └── utility
│       └── JSONid.js
├── tsconfig.json
└── windi.config.js
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
