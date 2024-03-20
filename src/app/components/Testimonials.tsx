import Image from 'next/image'

export default function Testimonials() {
	return (
		<section className='flex flex-col gap-4 w-full p-4 items-center justify-center'>
			<div>
				<div className='text-xl font-bold'>Clientes Satisfeitos</div>
				<div>Veja o que nossos clientes acham do nosso trabalho</div>
			</div>
			<div className='flex flex-col md:flex-row justify-between gap-4'>
				<div className='flex flex-col gap-4'>
					<div>Stars</div>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</div>
					<div className='flex gap-3'>
						<Image
							src='/Assets/táxi-bg.jpeg'
							layout='cover'
							width={70}
							height={100}
							alt='Táxi'
							className='flex rounded-full'
						/>
						<div className='flex flex-row gap-2 divide-x-2 p-2'>
							<div className='p-2'>Name</div>
							<div className='p-2'>Status</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div>Stars</div>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</div>
					<div className='flex gap-3'>
						<Image
							src='/Assets/táxi-bg.jpeg'
							layout='cover'
							width={70}
							height={100}
							alt='Táxi'
							className='flex rounded-full'
						/>
						<div className='flex flex-row gap-2 divide-x-2 p-2'>
							<div className='p-2'>Name</div>
							<div className='p-2'>Status</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
