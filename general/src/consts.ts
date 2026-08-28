import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Artem Palevich",
  DESCRIPTION: "Personal website, library and blog",
  EMAIL: "hello@apalevich.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_BOOKS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Homepage",
  DESCRIPTION: "Artem Palevich's Personal website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles and notes I wrote",
};

export const LIBRARY: Metadata = {
  TITLE: "Library",
  DESCRIPTION:
    "Book reviews, summaries, and reading notes on books about Business, Technology, and Philosophy.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/apalevich/",
  },
];
