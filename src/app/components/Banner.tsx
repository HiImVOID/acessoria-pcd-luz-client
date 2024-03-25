export default function Banner() {
	return (
		<>
			<section className='bg-táxi bg-cover bg-center max-h-screen  flex flex-col md:flex-row'>
				<div className='flex flex-col gap-4 md:w-2/5 justify-center p-8 bg-white/60 md:max-h-max  backdrop-blur-sm '>
					<h1 className='flex text-2xl font-bold text-black'>
						Despachante especializado em isençoes fiscais para táxi
						& PcD
					</h1>
					<h2 className=' flex text-xl font-medium text-black'>
						Com mais de X anos de experiencia, facilitamos todos a burocracia dos
						processos de documentaçãos fiscais e isenções, cartões de estacionamento e rodizio.
					</h2>
					<div className='flex gap-3'>
						<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
							Ver mais
						</button>
						<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
							Ver mais
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
