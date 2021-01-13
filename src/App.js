import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import {AnimatePresence} from 'framer-motion';

function App() {
  let location = useLocation();
  return (
    <>
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Switch location = {location} key={location.pathname}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/works' component={Works} />
      </Switch>
      </AnimatePresence>
    </>


    </>
  );
}

export default App;
