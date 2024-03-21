import Image from 'next/image'

export default function Benefits() {
	return (
		<div className='flex flex-col md:flex-row gap-4 items-center justify-between p-10 '>
			<div className='flex flex-col gap-4 justify-center p-8  items-center  md:w-1/2  '>
				<div className='text-2xl font-bold text-center'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
					aut facere corrupti officia possimus.
				</div>
				<div className='text-center'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
					aut facere corrupti officia possimus. Repellat quas eum,
					facere, in aperiam dicta iure nesciunt ut voluptate facilis,
					inventore nam est distinctio.
				</div>
				<div className='flex gap-3'>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
			</div>
			<div className='flex md:w-1/2 items-center justify-center'>
				<Image
					className='rounded-md'
					/* layout='responsive' */
					src={'/Assets/táxi-bg.jpeg'}
					width={300}
					height={300}
					alt='Táxi'
				/>
			</div>
		</div>
	)
}
