import React from 'react';

import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import Skills from '../Skills';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../../animations';

function Home() {
    return(
        <motion.div
        initial="out" animate="in" exit="out" variants={animationOne} transition={transition}
        >
            <HeroSection />
            <Skills />
            <Footer />
        </motion.div>
    )
}


export default Home;