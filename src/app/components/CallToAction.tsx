import Link from "next/link";

export default function CallToAction() {
	return (
		<>
			<section className='flex flex-col md:flex-row gap-4 h-64 p-10 items-center'>
				<div className='text-lg font-bold flex'>
					Que tal fazer uma isenção fiscal para seu veiculo?
				</div>
				<div className='flex flex-col gap-4'>
					<span className='flex flex-col gap-4'>
						Entre em contato conosco e garanta já seu beneficio.
					</span>
					<div className='flex flex-row gap-4'>
						<Link
							href={'https://wa.me/15511973402508'}
							target='_blank'>
							<button className='  bg-green-500 text-slate-100 py-2 px-3 border-slate-100 border'>
								WhatsApp
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
