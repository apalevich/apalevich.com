import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Artem Palevich",
  DESCRIPTION: "Personal website and blog",
  EMAIL: "hello@apalevich.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_BOOKS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const LIBRARY: Metadata = {
  TITLE: "Library",
  DESCRIPTION:
    "Book reviews, summaries, and reading notes on non-fiction books about productivity, business, psychology, and technology.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (ex-Twitter)",
    HREF: "https://twitter.com/apalevich",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/apalevich",
  },
  {
    NAME: "Website",
    HREF: "https://apalevich.com",
  },
];
