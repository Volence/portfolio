import { motion, Variants } from "framer-motion";

const Title = ({ topLevelVariants }: { topLevelVariants: Variants }) => (
    <motion.div 
        layout
        className="shadow-lg rounded-lg" 
        initial="hidden" 
        animate="visible" 
        variants={topLevelVariants} 
        transition={{ duration: .5, stiffness: 30, type: "spring", bounce: .25 }}
    >
        <div className="bg-white w-full h-96 bg-center bg-no-repeat bg-cover rounded-t-none rounded-b-lg">
            <div className="w-full h-full flex justify-center items-center">
                <div className="mx-4 text-center text-gray-700">
                    <h1 className="font-bold text-6xl mb-4">Hi, I&apos;m Steve!</h1>
                    <h2 className="font-bold text-3xl mb-12">I create software and websites!</h2>
                </div>
            </div>
        </div>
    </motion.div>
);

export default Title;
