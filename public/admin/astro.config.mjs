// astro.config.mjs

import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Content collections
          {
            label: "Layout",
            name: "layout",
            widget: "hidden",
            default: "../../layouts/BlogPost.astro",
          },
          { label: "Title", name: "title", widget: "string" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Publish Date", name: "publishDate", widget: "datetime" },
          { label: "Hero Image", name: "heroImage", widget: "image" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    }),
  ],
});
