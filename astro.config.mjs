import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links'; // 1. Añade este import arriba

// https://astro.build
export default defineConfig({
  site: 'https://misterdatos-official-website.github.io/',
  integrations: [],
  markdown: {                                            // 2. Añade toda esta sección de markdown
    rehypePlugins: [
      [
        rehypeExternalLinks, 
        { 
          target: '_blank', 
          rel: ['noopener', 'noreferrer'] 
        }
      ]
    ],
  },
});
