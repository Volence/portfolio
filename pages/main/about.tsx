import { motion, Variants } from "framer-motion";

export default function About({selection, contentVarients}: ({selection: string, contentVarients: Variants | undefined})) {

  return (
	<motion.div 
		id="about"
		layout
		className="shadow-lg rounded-lg bg-white w-full bg-center bg-no-repeat bg-cover rounded-t-lg rounded-b-lg lg:px-16 px-6 flex flex-wrap items-center lg:py-12 py-4 my-16" 
		initial='hidden'
		animate={selection === 'about' ? "visible" : "hidden"}
		variants={contentVarients} 
	>
		<h2 className="text-3xl text-center mb-4 w-full">About Me</h2>
		<h3 className="text-xl mb-4">The Beginning of my Programming Adventure</h3>
		<p className="text-base">
			It all started many years ago when I was around the age of 14. At the time I was a big fan of Sonic the Hedgehog and was
			first starting to explore the internet. I wound up stumbling on a community
			that was focussed on studying the games and finding hidden levels. Eventually
			the community even took some of the first few Sonic games and broke them
			down to a basic assembly language (Motorola 68000). I joined the community
			and my quest at the time to create new bosses for the sonic games lead me
			to learning the language and all about programming at a lower level. I&apos;ve
			even worked with a friend on a custom game engine that was able to run on
			the Sega Genesis hardware!
		</p>
		<h3 className="text-xl mb-4 mt-6">Right before the big break</h3>
		<p className="paragraph">
			After learning quite a bit on my own, I wanted to continue to learn programming and possibly expand to a language that wasn&apos;t
			last used professionally over ten years ago, so my senior year of high school
			I signed up for Computer Programming 1. Throughout the year we studied Visual
			Basics and I was able to play with a much higher level language than I was
			used to. For my final project I made a 2D sidescroller game which had impressed
			my teacher so much I won an award for outstanding achievement in computer
			science! Once high school was over I wound up going to community college
			for a year for comuputer science but alas, I found a passion grow in a different
			direction and switched to a trade school for music production.
		</p>
		<h3 className="text-xl mb-4 mt-6">The Big Move</h3>
		<p className="paragraph">
			After a few years of not finding the right path for myself, I moved from northern New Jersey to Philadelphia and started
			a new life here. I&apos;ve been working in the restaurant industry as well for
			several years and have decided that the long hours, inconsistant pay, and
			various other things wouldn&apos;t be truly sufficient in the long run. Trying
			to figure out what else I could do I decided to take a look again towards
			my old passion of programming. Doing so I found several resources to help
			teach myself quite a bit of knowledge in web development and once again found
			my passion reignite. Every day for the past 8 months I&apos;ve generally spent
			at least 3 to 8 hours learning more concepts and bettering my skills. After
			a few months I created my first website for a friend, which was extremely
			rewarding to me.
		</p>
		<h3 className="text-xl mb-4 mt-6">First Breakthrough</h3>
		<p className="paragraph">
			In July 2018 I interviewed/took a test for a front end developer position at <a href="https://www.intuitsolutions.net/">IntuitSolutions</a>. 
			After waiting for a bit I was eventually recieved a job offer and started in September 2018. It was a great experience and I&apos;ve learned a 
			tremendous amount since joining. In June 2019 I was promoted to team lead of the development department where I was able to train and lead
			the team with our continued growth, as well as doing full stack work.
		</p>
		<h3 className="text-xl mb-4 mt-6">Making the move to the software department</h3>
		<p className="paragraph">
			After working for the frontend team for about a year and a half, in April of 2020 I was offered a promotion to move to the software department to write full stack
			apps and do some devops work. Besides helping write a few apps, I&apos;ve also re-written the deployment system and server stack for our apps
			and future apps. This has included containerization with docker and the ci/cd process in gitlab. Not only have I learned a lot about creating
			applications in general, but I&apos;ve learned a great deal of linux and devops processes and practices as well.

		</p>
		<h3 className="text-xl mb-4 mt-6">What I currently do</h3>
		<p className="paragraph">
			Right now besides work most of the time when I&apos;m home I&apos;m studying something new, whether it&apos;s learning algorithms and data structures,
			or trying to figure out Haskell. I&apos;m also very into classical music, I played piano when I was younger and recently started tracking
			lessons again, so that&apos;s been a lot of fun. Most recently I&apos;ve been learning rust and have started work on a new project in it.
		</p>
	</motion.div>
  )}
