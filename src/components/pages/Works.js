import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import {motion} from 'framer-motion';
import {animationTwo, transition} from '../../animations';


export default function Works() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
            <Cards />
            <Footer />
        </motion.div>

    )
}
