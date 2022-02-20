import React from 'react';
import './App.css';
import { Routes, Route, useParams } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from "./pages";


function UserProfile(){
  // useParams will return an object
  const params = useParams();
  console.log(params) // Notice that params is an object
  return (
    <h1>
      {/* 
      Destructure the key used in route, to render the value.
      In our example, we named the key 'id' 
      */}
      Hello There, {params.id}
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
    <>
     <div>
      
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
    

    </div>
    </>
   
  )
}

export default App;
