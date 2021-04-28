import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Landing from './pages/Landing';
import OSNav from './components/Navbar';
import Login from './pages/Login';
import Footer from "./components/Footer";
import Authing from './components/Auth';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import Post from './pages/Post'

export default function App() {
    return (
        <Router>
            <OSNav />

            <Route
                path='/'
                component={ Landing }
                exact
            />
            <Route
                path='/login'
                component={ Login }
            />
            <Route
                path='/discord/connect'
                component={ Authing }
            />
            <Route
                path='/posts'
                component={ Posts }
            />
            <Route
                path='/post/:id'
                component={ Post }
            />
            <Route
                path='/profile'
                components={ Profile }
            />
            <Route
                path='/component-test'
                component={ Posts }
            />

            <Footer />
        </Router>
    );
}