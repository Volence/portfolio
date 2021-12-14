import Image from 'next/image';
import { motion, Variants } from "framer-motion";

export default function Projects({selection, contentVarients}: ({selection: string, contentVarients: Variants | undefined})) {
	return (
			<motion.div 
                id="projects"
                layout
                className="justify-around gap-3 py-5shadow-lg rounded-lg bg-white w-full bg-center bg-no-repeat bg-cover rounded-t-lg rounded-b-lg lg:px-16 px-6 flex flex-wrap items-center lg:py-12 py-4 my-16" 
                initial='hidden'
                animate={selection === 'projects' ? "visible" : "hidden"}
                variants={contentVarients} 
              >
                <h2 className="text-3xl text-center mb-4 w-full">WIP</h2>
                {/* <h2 className="text-3xl text-center mb-4 w-full">Projects</h2>
                <div className="backdrop w-10/12 md:w-3/4 bg-white bg-opacity-10 rounded p-3 border border-indigo-400 shadow-lg">
                  <div className="w-full mb-3 pb-3 border-b border-1 border-indigo-400">
                    <h3 className="text-xl font-semibold text-shadow">Lighthouse App</h3>
                  </div>
                  <div>
                    <Image width="900" height="500" src="/lighthouse_app.png" alt="image1" className="w-full h-48 object-cover mb-2" />
                    <p className="mb-3 tracking-wide text-base text-shadow">
                      An application that takes three pages from a site (manually entered), then periodically runs Google's Lighthouse tool to get various metrics of the pages and save them in a MongoDB database, then displays this using charts on the frontend. Uses React, Victory, Material-UI, and Apollo on the frontend, and Express, Typescript, Graphql, Puppeteer, Lighthouse, and Passport on the backend.
                    </p>
                    <a href="https://github.com/Volence/lighthouse__app" target="_blank" className="backdrop bg-indigo-300 bg-opacity-0 border border-indigo-400 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-40 hover:bg-opacity-10 text-lg" rel="noreferrer">
                      Github Page
                    </a>
                  </div>
                </div>
                <div className="backdrop w-10/12 md:w-3/4 bg-white bg-opacity-10 rounded p-3 border border-indigo-400 shadow-lg">
                  <div className="w-full mb-3 pb-3 border-b border-1 border-indigo-400">
                    <h3 className="text-xl font-semibold text-shadow">Sonic Object Maker</h3>
                  </div>
                  <div>
                    <Image width="700" height="500" src="/sonic_maker.png" alt="image2" className="w-full h-48 object-cover mb-2" />
                    <p className="mb-3 tracking-wide text-base text-shadow">
                      Start of a project to take a basic gui that gives instructions and convert it to Motorola 68000 to work in various older sonic games. Made with Electron and React.
                    </p>
                    <a href="https://github.com/Volence/sonicobjectmaker" target="_blank" className="backdrop bg-indigo-300 bg-opacity-0 border border-indigo-400 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-40 hover:bg-opacity-10 text-lg" rel="noreferrer">
                      Github Page
                    </a>
                  </div>
                </div> */}
              </motion.div>
)}
