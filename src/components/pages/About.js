import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import AboutHero from '../AboutHero';
import {motion} from 'framer-motion';
import {animationThree, transition} from '../../animations';


export default function Works() {
    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transition}>
            <AboutHero />
            <Footer />
        </motion.div>

    )
}
