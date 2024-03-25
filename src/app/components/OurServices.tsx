import Image from 'next/image'

export default function OurServices() {
	return (
		<section className='flex flex-col-reverse items-center justify-between md:flex-row h-screen p-10 gap-4'>
			<div className='flex md:w-3/5'>
				<Image
					src='/Assets/5.webp'
					width={800}
					height={800}
					alt='Táxi'
				/>
			</div>
			<div className='flex flex-col gap-4 justify-center items-center p- md:w-1/3'>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Transferencia de alvara e estacionamento de taxi
					</h5>
					<p className='text-sm font-light'>
						Descomplicando a Transferência de Alvará de
						Estacionamento de Táxi. Entenda o processo e os
						requisitos necessários para realizar essa transição de
						forma ágil e eficiente, garantindo a continuidade de seu
						negócio com tranquilidade.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Cadastramento de alvara comum.
					</h5>
					<p className='text-sm font-light'>
						Facilitando o Cadastro de Alvará Comum. Conheça os
						passos necessários e os documentos exigidos para
						garantir o registro do seu alvará com agilidade e
						conformidade. Simplifique o processo e comece a operar
						sem complicações.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h5 className='text-xl font-bold'>
						Certidão de IPI & ICMS
					</h5>
					<p className='text-sm font-light'>
						Obtenha sua Certidão de IPI & ICMS de forma rápida e
						descomplicada. Descubra os requisitos e procedimentos
						necessários para garantir esse documento essencial para
						seu táxi. Esteja em conformidade com as obrigações
						fiscais e impulsione seu crescimento financeiro.
					</p>
				</div>
			</div>
		</section>
	)
}
