import Image from 'next/image'

export default function OurServices() {
	return (
		<section className='flex flex-col items-center justify-center md:flex-row h-screen'>
			<div className='flex w-1/2'>
				<Image
					src='/Assets/táxi-bg.jpeg'
					width={600}
					height={600}
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
