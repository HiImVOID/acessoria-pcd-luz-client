export default function CallToAction() {
	return (
		<>
			<section className='flex flex-col md:flex-row gap-4 h-64 p-10'>
				<div className='text-lg font-bold flex'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<div className='flex flex-col gap-4'>
					<span className='flex flex-col gap-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolore, officia soluta voluptate,
					</span>
					<div className="flex flex-row gap-4">
						<button className='  bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
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
