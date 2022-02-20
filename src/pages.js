import React from "react";

import Nav from './nav';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
        <Nav />
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Nav />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <Nav />
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
      <Nav />
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <Nav />
    </div>
  );
}
/*
 * The React Router passes properties to the components it renders. 
 * For instance, we can obtain the current location via a property. 
 * Let’s use the current location to help us create a 404 Not Found component. 
 * First, we’ll create the component:
 */
export function Whoops404() {
    return (
      <div>
        <h1>Resource not found</h1>
        <Nav />
      </div>
    );
  }