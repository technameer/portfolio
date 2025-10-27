import { defineConfig } from "vite";
import { resolve } from "path";
import contacts from "./data/contacts.json";
import nav from "./data/nav.json";
import blogs from "./data/blogs.json";
import sections from "./data/sections.json";
import skills from "./data/skills.json";
import socials from "./data/socials.json";
import website from "./data/website.json";

import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,

      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          website,
          nav,
          skills,
          blogs,
          contacts,
          sections,
          socials,
        },
      },
    }),
  ]
});
