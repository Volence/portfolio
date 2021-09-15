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
                <h2 className="text-3xl text-center mb-4 w-full">Projects</h2>
                <div className="backdrop w-10/12 md:w-3/4 bg-white bg-opacity-10 rounded p-3 border border-indigo-400 shadow-lg">
                  <div className="w-full mb-3 pb-3 border-b border-1 border-indigo-400">
                    <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                  </div>
                  <div>
                    <Image width="300" height="200" src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" className="w-full h-48 object-cover mb-2" />
                    <p className="mb-3 tracking-wide text-base text-shadow">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button className="backdrop bg-indigo-300 bg-opacity-0 border border-indigo-400 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                      Detail
                    </button>
                  </div>
                </div>
                <div className="backdrop w-10/12 md:w-3/4 bg-white bg-opacity-10 rounded p-3 border border-indigo-400 shadow-lg">
                  <div className="w-full mb-3 pb-3 border-b border-1 border-indigo-400">
                    <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                  </div>
                  <div>
                    <Image width="300" height="200" src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" className="w-full h-48 object-cover mb-2" />
                    <p className="mb-3 tracking-wide text-base text-shadow">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button className="backdrop bg-indigo-300 bg-opacity-0 border border-indigo-400 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                      Detail
                    </button>
                  </div>
                </div>
                <div className="backdrop w-10/12 md:w-3/4 bg-white bg-opacity-10 rounded p-3 border border-indigo-400 shadow-lg">
                  <div className="w-full mb-3 pb-3 border-b border-1 border-indigo-400">
                    <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                  </div>
                  <div>
                    <Image width="300" height="200" src="https://i.postimg.cc/VNYLzb8w/bg03.jpg" alt="image3" className="w-full h-48 object-cover mb-2" />
                    <p className="mb-3 tracking-wide text-base text-shadow">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button className="backdrop bg-indigo-300 bg-opacity-0 border border-indigo-400 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                      Detail
                    </button>
                  </div>
                </div>
              </motion.div>
)}
