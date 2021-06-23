import Head from 'next/head'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { motion } from "framer-motion"

export default function Home() {

  const topLevelVariants = {
    hidden: { y: -500 },
    visible: { y: 0 }
  }

  return (
    <div>
      <Head>
        <title>Steve Meyer&apos;s Portfolio</title>
        <meta name="description" content="Various work and information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex flex-col justify-between min-h-screen">


        <main className="h-full ">
          <motion.div 
            layout
            className="shadow-lg rounded-lg" 
            initial="hidden" 
            animate="visible" 
            variants={topLevelVariants} 
            transition={{ duration: .5, stiffness: 60, type: "spring" }}
          >
            <Header />
            <div className="bg-white w-full h-96 bg-center bg-no-repeat bg-cover rounded-t-none rounded-b-lg">
              <div className="w-full h-full flex justify-center items-center">
                  <div className="mx-4 text-center text-gray-700">
                      <h1 className="font-bold text-6xl mb-4">Hi, I&apos;m Steve!</h1>
                      <h2 className="font-bold text-3xl mb-12">I create software and websites!</h2>
                  </div>
              </div>
            </div>
          </motion.div>
        </main>
        
      </div>
      <Footer />
    </div>
  )
}
