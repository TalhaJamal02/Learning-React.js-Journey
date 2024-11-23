# React JS File Installation :
# All Commands:
1- npm create vite@latest
2- cd Your_project_name
3- npm i(install)
4- npm run dev
5- cd .. => to exit current file 

# For Tailwind CSS Installation:
1- npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

# Changes In taliwind.config File:
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

# Add This In Your index.css:
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
