/*
 * This is an example pages.js
 * Here, we import the page element and combine for export.
 * This allows us to import only one file in to Apps.js
 */
import React from "react";
import Nav from './nav';

// IMPORT PAGES
import AboutPage from "./About";
import EventsPage from './Events';
import ProductsPage from './Products';
import HomePage from './Home';
import ContactPage from './Contact';

// MANAGE PAGES
export function Home() {
  return <HomePage />
}

export function About() {
  return <AboutPage />
}

export function Events() {
  return <EventsPage />
}

export function Products() {
  return <ProductsPage />
}

export function Contact() {
  return <ContactPage />
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