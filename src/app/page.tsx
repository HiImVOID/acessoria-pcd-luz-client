import Image from 'next/image'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import OurServices from './components/OurServices'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

/* Random Comento to make a New Commit/Deploy */

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center justify-center bg-slate-100 text-black'>
			<Navbar />
      <Banner />
      <Benefits />
      <HowItWorks />
      <OurServices />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <Contact />
		</main>
	)
}
