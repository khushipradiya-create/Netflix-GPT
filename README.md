# Netflix-GPT
   - create-react-app
   - configure tailwind
   - configure github
   - header
   - login form
   - sinup form (using useState)

# Features 
- login/logout
  - sign-up and sign-in form
  - redirect to browse page
  
- browse-page(after authentication)
  - header
  - movie page
    - movie trailer
    - movie title and discription
    - movie list* n 
  
- netflix-gpt page
  -  search bar 
  -  movie suggestion


















# We use Create React App mainly to quickly set up a React project without manual configuration.

In short:

# it will you the project structure already

It automatically sets up tools like Webpack, Babel, and ESLint
Gives a ready-to-use project structure
Lets you focus on writing code instead of setup
Provides useful scripts for development, testing, and building

- Note :  npx command temprarily install and run create-react-app 

# lets set up tailwind : 

go to the tailwind site -> click "Get started " select framework they give all instructions.

when i was installing the tailwind it install two versions of tailwind that's why the npx command is not working . so i check using npm list tailwindcss

 content: ["./src/**/*.{js,jsx,ts,tsx}"] : In files ko scan karo aur jo CSS classes milen, sirf unka hi CSS generate karo

- utils : contains constants , urls other files and shared thinks 
- rafce(react arrow function component export) : shortcut for creating componants


# tailwind part 

- z-10 controls which element appears on top when elements overlap.
👉 Higher z value = more on top
👉 Works only with positioned elements (relative, absolute, etc.)

- h-screen : 
  sets the element height to 100% of the viewport (full screen height)
- Relative parent ke according absolute ko move kro.

# login form 
 - true && <input /> true && something → will return element. 