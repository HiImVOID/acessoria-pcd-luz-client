export default function Banner() {
	return (
		<>
			<div className='bg-táxi max-h-screen  flex flex-col md:flex-row'>
				<div className='flex flex-col gap-4 w-2/5 justify-center p-8 bg-white/60 max-h-max  backdrop-blur-sm '>
					<div className='flex text-2xl font-bold text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem necessitatibus quia eius harum sequi
						molestiae quisquam reiciendis
					</div>
					<div className=' flex text-xl font-medium text-black'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Praesentium dolores alias blanditiis animi maxime.
						Repellat adipisci illo dolor atque voluptate
						perspiciatis illum reiciendis, aperiam odio tempore
						sequi dolorum culpa corporis.
					</div>
					<div className="flex gap-3">
						<button className="bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border">Ver mais</button>
						<button className="bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border">Ver mais</button>
						
					</div>
				</div>
			</div>
		</>
	)
}
