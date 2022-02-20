import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
    <nav>
    {/* Link is a reservered keyword.
    Syntax: Link - to: what the URL displays
    Link serves to update the url, the routing process is handeled with routes process.
    NOTE: use the '/' to prevent nesting. */}
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
        </ul>
    </nav>
    )
}