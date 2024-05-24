# Apalevich Website monorepo

## Structure
The project is structured into three main parts: the mate landing directory, the general website directory and a common server. Each directory contains its own set of files and subdirectories.

- `/mate` directory:
This directory contains the source code for the MATE landing page. It includes TypeScript files for defining the content and structure of the landing page, and Astro files for the components used in the page

- `/general` directory:
This directory contains the source code for a personal website. It includes Astro files for the layout and components of the website, and a README.md file with instructions for setting up the project.

- `/backend` directory:
This directory contains the server-side code for all projects, including websites and apps. It includes a package.json file for managing dependencies and scripts, and a prompt.js file for handling prompts.

*TLDR: the project combines a landing page for MATE and a personal website, with a backend for handling prompts.*

## To do:
- [ ] Exclude server to a separate repo
- [ ] Implement universal light-dark pallet (https://medium.com/@beratyilmaz3102/setting-up-a-maintainable-color-theme-in-tailwind-css-4c7f0bd70d6c)
- [ ] Exclude texts to a separate files

## To research:
- shared color pallet between projects
