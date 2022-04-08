import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({
		config: { applyBaseStyles: true },
	  })],
	site: 'https://git.x7md.net/',
	markdown: {
		// Example: Include all drafts in your final build
		drafts: false,
		rehypePlugins: [
			['rehype-slug'],
			['rehype-autolink-headings', {behavior: "wrap"}],
			['rehype-figure-for-img'],
			/*['rehype-code-ltr'] don't need anymore. ,*/
		]
	  }
});
