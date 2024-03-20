import Image from 'next/image'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import OurServices from './components/OurServices'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center justify-center'>
			<Navbar />
      <Banner />
      <Benefits />
      <HowItWorks />
      <OurServices />
      <CallToAction />
      <Testimonials />
      <FAQ />
		</main>
	)
}
