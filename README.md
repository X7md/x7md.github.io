# X7md Blog

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
.
├── astro.config.mjs
├── jsconfig.json
├── LICENSE.md
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── public
│   ├── assets
│   │   ├── logo.svg
│   │   └── mushkhbat.svg
│   ├── CNAME
│   ├── favicon.svg
│   ├── fonts
│   │   ├── ttf
│   │   │   └── [all Vazirmatn as ttf]
│   │   ├── variable
│   │   │   └── Vazirmatn-RD[wght].ttf
│   │   └── webfonts
│   │       └──[all Vazirmatn as woff2]
│   ├── images
│   │   ├── 1x1
│   │   │   └── [all 1x1 images]
│   │   └── [all images]
│   ├── robots.txt
│   ├── style
│   │   ├── global.css
│   │   └── home.css
│   └── Vazirmatn-RD-font-face.css
├── README.md
├── sandbox.config.json
├── src
│   ├── components
│   │   ├── Banner.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── Person.astro
│   │   ├── Tag.astro
│   │   └── Topic.astro
│   ├── layouts
│   │   ├── blog.astro
│   │   └── page.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── about-me.astro
│   │   ├── blog
│   │   │   └── [all blogs...]
│   │   ├── index.astro
│   │   ├── portfolio
│   │   │   └── index.astro
│   │   ├── posts
│   │   │   └── index.astro
│   │   ├── rss.xml.js
│   │   └── topics
│   │       ├── index.astro
│   │       └── [topic].astro
│   ├── styles
│   │   └── global.css
│   └── utility
│       └── [all utility script...]
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
