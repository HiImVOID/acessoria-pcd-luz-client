import Image from 'next/image'

export default function OurServices() {
	return (
		<section className='flex flex-col items-center justify-between md:flex-row h-screen p-10'>
			<div className='flex w-3/5'>
				<Image
					src='/Assets/táxi-bg.jpeg'
					width={800}
					height={800}
					alt='Táxi'
				/>
			</div>
			<div className='flex flex-col gap-4 justify-center items-center p- w-1/3'>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</h5>
					<p className='text-sm font-light'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sit, a! Nostrum aliquam doloribus, at sint
						voluptatum quibusdam deleniti consequatur totam facere,
						atque ea ad.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</h5>
					<p className='text-sm font-light'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sit, a! Nostrum aliquam doloribus, at sint
						voluptatum quibusdam deleniti consequatur totam facere,
						atque ea ad.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</h5>
					<p className='text-sm font-light'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sit, a! Nostrum aliquam doloribus, at sint
						voluptatum quibusdam deleniti consequatur totam facere,
						atque ea ad.
					</p>
				</div>
			</div>
		</section>
	)
}
