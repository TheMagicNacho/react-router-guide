# React Router Guide

Partialy Based on O'riely's "Learn React" Chp 11

## Imports
1. react-router
2. react-router-dom
``` npm install react-router react-router-dom```

## Design
- pages.js
    - This is a best practice and not required.
    - Use this file to import all the pages you create.
    - This way, you only need ot import a single file into the App file.

- index.js
    - Wraps the ```<App />``` in Router tags
    - The Objects wrapped within the elements prop, will be rendered to this page.
    - Import all other 'pages' through here
    ```jsx
    ReactDOM.render (
    <React.StrictMode>
        <Router>
        <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
    );
    ```
- App.js
    - Hold all your routes here.
    ```jsx
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        // the * will forward any unknown domains to a specific page
        <Route path="*" element={<Whoops404 />} />

        // Routes with Params
        // Place a colon before the object key
        <Route path='/user' element={<UserLanding />} /> 
        <Route path='/user/:id' element={<UserProfile />} />
    </Routes>
    
    ```


## Keywords
- ```<Router>``` Wraps the app child in the index.js file
- ```<Routes>``` Top level JSX tag used to instanciate route links.
- ```<Route path='' element={} />``` creates the actual route
    - Think of the Route tag as an if/then statement. If the URL matches the defined path, router will render that specific 'page'.
- ```useParams()``` Reads the URL for the patttern of /dir/:id
    - the value after the colon is the key to extract the value.

## Parameters
- Parameters can be thought of a site context. The param is passed through the URL, so long as it matches the same patern.
- EXAMPLE:
    - There is a route with ```path=/users/:id```
    - Then a user types, .../users/123
    - Page with open with that id will be opened.

    - The named funciton "UserProfile" holds the core parts to acomplish param routing.
```jsx
function UserProfile(){
  // useParams will return an object
  const params = useParams();
  // The object stored in params will look like {id: "123"}
  // If we wanted, we could destructure the object now.
  console.log(params) 

  return (
    <h1>
      {/* 
      Destructure the key used in route, to render the value.
      In our example, we named the key 'id' 
      */}
      Hello There, { params.id }
    </h1>
  )
}

function UserLanding(){
  return (
    <>
      <h1>
        I don't know you.
      </h1>
      <p>
          Type your name in the url after user. /user/YourName
      </p>
    </>
  )
}

function App() {
  return (
     <div>
      <Routes>
        // Routes with Params
        // Place a colon before the object key;
        <Route path='/user' element={<UserLanding />} /> 
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </div>
  )
}
```
    