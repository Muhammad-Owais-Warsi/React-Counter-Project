# Counter Project

This is my first ever React Project. It is a very basic project that has two buttons to increment and decrement the value. I also used a little bit of Tailwind CSS for styling.

## Getting Started

### Prerequisites

- Node.js 

### Installation

Provide step-by-step instructions on how to install and set up your project on the user's local machine. For example:

1. Clone the repository:

   ```sh
   https://github.com/Muhammad-Owais-Warsi/React-Counter-Project.git
   
2. Change the repository
   ```sh
   cd React-Counter-Project
3. Install all dependencies
    ```sh
    npm install
    
### As this project also uses Tailwind CSS. Below are the instructtion to download the same.

1. Installing Tailwind
   ```sh
   npm install -D tailwindcss postcss autoprefixer

2. Create a configuration file for Tailwind CSS
   ```sh
   npx tailwindcss init -p

3. In tailwind.config.js file do the following changes
   
 ```
   /** @type {import('tailwindcss').Config} */
export default {<br>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Finally in index.css file import Tailwind
   
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;```

### Finally to run this project on your local computer write the following command
```sh
npm run dev


