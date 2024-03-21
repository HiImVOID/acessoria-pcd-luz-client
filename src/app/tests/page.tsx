import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";

export default function Tests() {
    return (
		<div>
			<Navbar />
			<Banner />
			<Benefits />
			<HowItWorks />
			<OurServices />
			<CallToAction />
			<Testimonials />
			<FAQ />
			<Contact />
		</div>
	)
}