import Image from 'next/image'

export default function HowItWorks() {
	return (
		<div
			className='flex flex-col gap-4 justify-center min-h-max p-10 items-center'
			id='services'>
			<h3 className='text-2xl font-bold'>
				Como funciona o nosso serviço?
			</h3>
			<div className='flex flex-col gap-4 md:flex-row md:gap-8'>
				<div className='flex flex-col gap-4 justify-between items-center p-2 md:w-1/3'>
					<div className='flex h-52 w-52 md:h-72 md:w-72'>
						<Image
							src={'/Assets/2.webp'}
							width={300}
							height={300}
							alt='Táxi'
						/>
					</div>
					<div className='text-xl font-medium text-center'>
						Atualização da carteira CNH para CNH especial.
					</div>
					<div className='text-lg font-light text-center'>
						Realizamos avaliações e laudos médicos para darmos
						início ao processo.
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
				<div className='flex flex-col gap-4 justify-between items-center p-2 md:w-1/3'>
					<div className='flex h-52 w-52 md:h-72 md:w-72'>
						<Image
							src={'/Assets/6.jpg'}
							width={300}
							height={300}
							alt='Táxi'
						/>
					</div>
					<div className='text-xl font-medium text-center'>
						Renovação de CNH especial.
					</div>
					<div className='text-lg font-light text-center'>
						Realizamos o agendamento nas clinicas médicas
						credenciadas pelo detran para obter sua renovação.
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
				<div className='flex flex-col gap-4 justify-between items-center p-2 md:w-1/3'>
					<div className='flex h-52 w-52 md:h-72 md:w-72'>
						<Image
							src={'/Assets/9.avif'}
							width={300}
							height={300}
							alt='Táxi'
						/>
					</div>
					<div className='text-xl font-medium text-center'>
						Isenções para táxi
					</div>
					<div className='text-lg font-light text-center'>
						Realizamos renovação condutaxi, assim como renovação de
						alvara e baixa de segundo condutor coproprietario ou
						preposto.
					</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border'>
						Ver mais
					</button>
				</div>
			</div>
		</div>
	)
}
