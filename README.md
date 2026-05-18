# Netflix-GPT
   - create-react-app
   - configure tailwind
   - configure github
   - header
   - routing
   - login form
   - sinup form (using useState)
   - Form validation
   - useRef Hook
   - Firebase setup
   - Deploying our app to production
   - Creating a Sign up user account
   - implement sign in 
   - created a Redux store with useSlice
   - implemented sign out
   - bug fix : if the user is not login (redirect to login page (vice-verse))
   - unsubscribed to be onauthStateChange callback.
   - add hardcoded values inside constant files.
   - 

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
  
# for firebase 

- for authentication : 
1. go to the firebase.
2. get started 
3. create web app
4. install firebase
5. save configuration file
6. go to the authentication
7. add provider(email/password, google etc.)
8. check the users
   
-For Hosting app using firebase
1.  run command :  npm install -g firebase-tools
2.  run command :  firebase login .  to check whether account is login or not.
3.  run command :  firebase init
4.  npm run build
5.  firebase deploy
6.  https://netflixgpt-85b56.web.app project link
7.  

# For firebase docs  :
go to the authentication -> web -> password authentication

# NOTE :
1. null consider as false in js.
   so if  if(message) is  a string it acts as a true condition.
# Firebase authentication. 
2. the auth will use everywhere so intialize it on center location.
3. // used to access authentication service from firebase. it is returning a  authentication instance.
const auth = getAuth()
4. createUserWithEmailAndPassword : is used to create new user account with email, password
createUserWithEmailAndPassword() internally Firebase server ko request bhejta hai.
or
Ye ek asynchronous Firebase function hai jo backend/API call karta hai user account create karne ke liye.


# Redux configuration :

Component
   ↓
dispatch(action)
   ↓
Reducer
   ↓
Store update
   ↓
UI update

# link and navigate (difference)
  Link	                  navigate
Component hai	            Function hai
User click karta hai	    Code automatically call karta hai
UI navigation ke liye	    Programmatic redirect ke liye

- link and anchor 
  link (only component sway)
  anchor ( page reload)

#  onAuthStateChanged inside use Effect ( )
useEffect(() => {
   onAuthStateChanged(...)
}, [])


useEffect

= security guard ko duty pe bithana

onAuthStateChanged

= guard ka continuously dekhte rehna

# useSelector क्या करता है?

यह:

Redux store की state access करता है
Selector function चलाता है
Selected value return करता है
अगर वह value change हो जाए तो component re-render करता है



# the bug appear  :
non authenticate user can access browse page.

so what we have to do 
1. if the user is logged in -> redirect to browse page
2. else => redirect to login page

# naviagate hook

we can use it inside only childerns component because to 
useNavigate() sirf un components me work karega jo RouterProvider ke child ho.


navigate can only used inside the childern of body = > header, browse, login
because header is always available in page we can use navigate inside the header

# always have constants files 
store all the hardcoded values(links, images, logo) inside it.

# browse page
tmdb - > login -> documentation - > movie list ->
now playing 

# why my apis calling two times ?
becaues of strict mode (revise it properly). it only helps in local (47:3) time in nexflix building core.

