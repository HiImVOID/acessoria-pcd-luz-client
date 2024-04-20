import Image from 'next/image'

export default function Benefits() {
	return (
		<div className='flex flex-col md:flex-row gap-4 items-center justify-between p-10' id='inicio'>
			<div className='flex flex-col gap-4 justify-center p-8  items-center  md:w-1/2  '>
				<h3 className='text-2xl font-bold text-center'>
					Descubra as vantagens de obter isençoes fiscais para o seu veiculo
				</h3>
				<div className='text-center'>
					Descubra os critérios essenciais e os benefícios de garantir
					isenções fiscais em IPI, IPVA, ICMS, Rodízio e Cartão de
					Estacionamento. Saiba como aproveitar essas vantagens e
					otimizar suas finanças de forma inteligente
				</div>
			</div>
			<div className='flex md:w-1/2 items-center justify-center'>
				<Image
					className='rounded-md flex'
					src={'/Assets/4.jpg'}
					width={300}
					height={300}
					alt='Táxi'
				/>
			</div>
		</div>
	)
}
