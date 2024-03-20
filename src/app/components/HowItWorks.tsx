import Image from 'next/image'

export default function HowItWorks() {
	return (
		<div className='flex flex-col  gap-4 justify-center p-10 items-center'>
			<div className='text-2xl font-bold '>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</div>
			<div className='flex flex-col md:flex-row gap-4'>
				<div className='flex flex-col gap-4 justify-center items-center p-2 w-1/3'>
					<Image
						className='rounded-md'
						src={'/Assets/táxi-bg.jpeg'}
						width={300}
						height={300}
						alt='Táxi'
					/>
					<div className='text-xl font-medium text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<div className='text-lg font-light text-center '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
				<div className='flex flex-col gap-4 justify-center items-center p-2 w-1/3'>
					<Image
						className='rounded-md'
						src={'/Assets/táxi-bg.jpeg'}
						width={300}
						height={300}
						alt='Táxi'
					/>
					<div className='text-xl font-medium text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<div className='text-lg font-light text-center '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
				<div className='flex flex-col gap-4 justify-center items-center p-2 w-1/3'>
					<Image
						className='rounded-md'
						src={'/Assets/táxi-bg.jpeg'}
						width={300}
						height={300}
						alt='Táxi'
					/>
					<div className='text-xl font-medium text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<div className='text-lg font-light text-center '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex hic nulla accusantium cumque,
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
			</div>
		</div>
	)
}
