import { Dispatch, SetStateAction } from 'react';
import { motion, Variants } from "framer-motion";
import SvgComponent from './svgLogo';

const Header = ({ setSelection, topLevelVariants }: 
    { 
        setSelection: Dispatch<SetStateAction<string>>,
        topLevelVariants: Variants
    }) => (
    <motion.header 
        className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 sticky top-0 z-50"
        initial="hidden" 
        animate="visible" 
        variants={topLevelVariants} 
        transition={{ duration: .5, stiffness: 30, type: "spring", bounce: .2 }}
    >
        <div className="flex-1 flex justify-between items-center">
            <a href="#">
                <SvgComponent />
            </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="##" onClick={() => setSelection('about')}>About</a></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="##" onClick={() => setSelection('projects')}>Projects</a></li>
            </ul>
            </nav>
        </div>
    </motion.header>
);

export default Header;
