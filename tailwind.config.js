/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl':{'max':'1290px'},
      'lg':{'max':'991px'},
      'md':{'max':'767px'},
      'sm':{'max':'550px'},
      'xms':{'max':'375px'},
    }
  },
  plugins: [],
}