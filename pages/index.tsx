import Head from 'next/head';
import Header from '../components/header/header';
import Title from '../components/title/title';
import Footer from '../components/footer/footer';
import { useState } from 'react';
import Projects from './main/projects';
import About from './main/about';

const topLevelVariants = {
  hidden: { y: -500},
  visible: { y: 0 }
}

const contentVarients = {
  hidden: { 
    opacity: 0,
    scaleY: 0,
    display: 'none',
    transition: {
      type: "spring",
      stiffness: 20,
      bounce: .25,
      restDelta: 2,
      opacity: {
        delay: 0
      },
      scaleY: {
        duration: 0
      }
    }
  },
  visible: { 
    opacity: 1,
    scaleY: 1,
    display: "flex",
    transition: {
      type: "spring",
      stiffness: 20,
      bounce: .25,
      delay: .2,
      duration: 4,
      opacity: {
        delay: 0,
        duration: 1
      },
      scaleY: {
        duration: 0
      }
    }
  },
}

export default function Home() {
  const [selection, setSelection] = useState('about');

  return (
    <div>
      <Head>
        <title>Steve Meyer&apos;s Portfolio</title>
        <meta name="description" content="Various work and information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex flex-col justify-between min-h-screen">

        <main className="h-full">
          <Header setSelection={setSelection} topLevelVariants={topLevelVariants} />
          <Title topLevelVariants={topLevelVariants}></Title>
            <section>
              <About selection={selection} contentVarients={contentVarients} />
              <Projects selection={selection} contentVarients={contentVarients} />
            </section>
        </main>
        
      </div>
      <Footer />
    </div>
  )
}
