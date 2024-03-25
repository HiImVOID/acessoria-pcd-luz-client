'use client'

import { CaretCircleDown, Info } from '@phosphor-icons/react'
import { useState } from 'react'

export default function FAQ() {
	const [index, setIndex] = useState(0)

	const changeIndex = (index: number) => setIndex(index)

	return (
		<div className='flex flex-col gap-5 py-24  w-full   min-h-screen'>
			<div className='flex flex-col ml-0 px-10 gap-y-3'>
				<div className='flex items-center gap-x-2  text-3xl font-semibold '>
					<Info
						size={32}
						className='mt-1'
					/>
					Dúvidas Frequentes
				</div>

				<div className='flex flex-col gap-y-3 w-full '>
					<div className='text-black'>
						<div
							className='w-full py-2 px-3 bg-slate-400 rounded-lg'
							onClick={() => changeIndex(1)}>
							<div className='flex justify-between'>
								<div className='flex text-lg font-semibold'>
									Como posso saber se a EloHype é segura e
									confiavel?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 1 ? (
							<div className='w-full  py-2 px-3 mt-3 bg-slate-400 rounded-lg transition'>
								<p className='flex'>
									Na EloHype, priorizamos a segurança e a
									confiança dos nossos clientes.
								</p>

								<br />
								<p className='flex'>
									Nossa equipe é composta por jogadores
									experientes e profissionais altamente
									qualificados, garantindo que o processo de
									eloboost seja realizado de maneira segura,
									sem comprometer a integridade da sua conta.
								</p>
								<br />
								<p className='flex'>
									Além disso, valorizamos a privacidade dos
									nossos clientes e seguimos rigorosas
									políticas de confidencialidade.
								</p>
								<br />
								<p className='flex'>
									Confira as avaliações positivas de outros
									clientes e sinta-se à vontade para entrar em
									contato com o nosso suporte caso tenha
									dúvidas adicionais. Sua satisfação e
									segurança são as nossas principais
									prioridades.
								</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
					<div>
						<div
							className='w-full py-2 px-3 bg-slate-400/90 rounded-lg'
							onClick={() => changeIndex(2)}>
							<div className='flex justify-between'>
								<div className='flex  text-lg font-semibold'>
									Posso ser banido ao contratar um serviço?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 2 ? (
							<div className=' w-full py-2 px-3 mt-3 bg-slate-400 rounded-lg'>
								<p className='flex'>
									Entendemos a preocupação com a segurança da
									sua conta. Na EloHype, empregamos práticas
									seguras e profissionais para minimizar
									qualquer risco de banimento.
								</p>
								<br />
								<p className='flex'>
									Nossa equipe é composta por jogadores
									experientes que conhecem as nuances do jogo
									e operam de maneira discreta para evitar
									detecções.
								</p>
								<br />
								<p className='flex'>
									No entanto, é importante observar que todos
									os serviços de eloboost têm algum grau de
									risco associado. Recomendamos que você siga
									todas as diretrizes fornecidas pela Riot
									Games e evite compartilhar suas credenciais
									de conta com qualquer pessoa.
								</p>
								<br />
								<p className='flex'>
									Fique à vontade para entrar em contato
									conosco caso tenha preocupações específicas
									sobre segurança. Estamos aqui para garantir
									uma experiência positiva e livre de
									problemas para todos os nossos clientes.
								</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
					<div>
						<div
							className='w-full py-2 px-3 bg-slate-400/90 rounded-lg'
							onClick={() => changeIndex(3)}>
							<div className='flex justify-between'>
								<div className='flex text-lg font-semibold'>
									Como funciona o pagamento?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 3 ? (
							<div className=' w-full py-2 px-3 mt-3 bg-slate-400 rounded-lg'>
								<p className='flex'>
									Facilitamos o processo de pagamento para
									tornar a sua experiência o mais conveniente
									possível. Utilizamos a API de pagamentos
									integrada do Mercado Pago, uma plataforma
									confiável e segura.
								</p>
								<br />
								<p className='flex'>
									Ao selecionar nossos serviços, você será
									direcionado para a página de pagamento, onde
									poderá escolher entre várias opções de
									pagamento oferecidas pelo Mercado Pago,
									incluindo cartões de crédito, boleto
									bancário e outras formas populares.{' '}
								</p>
								<br />
								<p className='flex'>
									Esta integração permite transações rápidas e
									seguras, garantindo a proteção dos seus
									dados financeiros.
								</p>
								<br />
								<p className='flex'>
									Caso tenha alguma dúvida ou encontre
									dificuldades durante o processo de
									pagamento, nossa equipe de suporte estará
									disponível para ajudar a resolver qualquer
									problema.
								</p>
								<p className='flex'>
									Sua segurança e comodidade são nossas
									prioridades.
								</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
					<div>
						<div
							className='w-full py-2 px-3 bg-slate-400/90 rounded-lg'
							onClick={() => changeIndex(4)}>
							<div className='flex justify-between'>
								<div className='flex text-lg font-semibold'>
									O que acontece caso passar do prazo de
									entrega combinado?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 4 ? (
							<div className=' w-full py-2 px-3 mt-3 bg-slate-400 rounded-lg'>
								<p className='flex'>
									Na EloHype, valorizamos a transparência e o
									compromisso com nossos clientes. Entendemos
									a importância do prazo de entrega acordado e
									fazemos o máximo para cumpri-lo.
								</p>
								<br />
								<p className='flex'>
									No entanto, caso ocorra algum imprevisto que
									resulte no não cumprimento do prazo,
									garantimos uma comunicação proativa. Nossa
									equipe entrará em contato para informar
									sobre a situação e fornecer uma estimativa
									atualizada do tempo de conclusão.
								</p>
								<br />
								<p className='flex'>
									Se a demora não for aceitável para você,
									oferecemos opções flexíveis, como reembolso
									parcial ou total, de acordo com as
									circunstâncias.
								</p>
								<br />
								<p className='flex'>
									Estamos comprometidos em manter a
									transparência e resolver qualquer problema
									de maneira justa, garantindo sua satisfação
									como cliente.
								</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
					<div>
						<div
							className='w-full py-2 px-3 bg-slate-400/90 rounded-lg'
							onClick={() => changeIndex(5)}>
							<div className='flex justify-between'>
								<div className='flex text-lg font-semibold'>
									Como sei que minha conta não será roubada?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 5 ? (
							<div className=' w-full py-2 px-3 mt-3 bg-slate-400 rounded-lg'>
								<p className='flex'>
									Entendemos a importância da segurança da sua
									conta e queremos assegurar que você esteja
									tranquilo ao escolher nossos serviços. Na
									EloHype, adotamos medidas rigorosas para
									proteger suas informações.
								</p>
								<br />
								<p className='flex'>
									Garantimos que todas as transações e
									interações com sua conta sejam tratadas com
									a máxima confidencialidade. Nossa equipe é
									composta por profissionais éticos e
									experientes, comprometidos em manter a
									integridade das contas dos nossos clientes.
								</p>
								<br />
								<p className='flex'>
									Além disso, não solicitamos informações
									sensíveis, como senhas de e-mail ou
									credenciais bancárias, que possam
									comprometer sua segurança.
								</p>
								<br />
								<p className='flex'>
									Caso tenha preocupações adicionais,
									recomendamos que altere sua senha após a
									conclusão do serviço, proporcionando uma
									camada extra de segurança.
								</p>
								<br />
								<p className='flex'>
									Estamos à disposição para responder a
									quaisquer dúvidas específicas que você possa
									ter sobre as medidas de segurança que
									implementamos. Sua confiança e tranquilidade
									são prioridades para nós.
								</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
					<div>
						<div
							className='w-full py-2 px-3 bg-slate-400/90 rounded-lg'
							onClick={() => changeIndex(6)}>
							<div className='flex justify-between'>
								<div className='flex text-lg font-semibold'>
									Alguem saberá que eu contratei o serviço?
								</div>
								<CaretCircleDown size={32} />
							</div>
						</div>
						{index === 6 ? (
							<div className=' w-full py-2 px-3 mt-3 bg-slate-400 rounded-lg'>
								<p className='flex'>
									Respeitamos a privacidade dos nossos
									clientes e compreendemos a necessidade de
									confidencialidade ao utilizar nossos
									serviços. Na EloHype, adotamos uma abordagem
									discreta para garantir que a contratação do
									serviço seja mantida em sigilo.
								</p>
								<br />
								<p className='flex'>
									Nossa política é estrita quanto à
									confidencialidade, e nenhum detalhe sobre a
									transação ou o serviço será divulgado a
									terceiros sem a sua autorização expressa. Se
									você tiver preocupações específicas sobre a
									privacidade, entre em contato com nossa
									equipe de suporte para discutir medidas
									adicionais que possam ser tomadas para
									garantir sua total tranquilidade.
								</p>
								<br />
								<p className='flex'>
									Estamos aqui para proporcionar uma
									experiência segura e discreta, garantindo
									que sua decisão de contratar nossos serviços
									seja mantida em sigilo.
								</p>
								<br />
								<p>Sua confiança é fundamental para nós.</p>
							</div>
						) : (
							<div className='hidden'></div>
						)}
					</div>
				</div>

				<div className=' flex flex-col gap-3'>
					<div className='text-2xl font-bold'>Ainda tem dúvidas?</div>
					<div className='font-light'>Entre em contato conosco agora mesmo para exclarecermos tudo!</div>
					<button className='bg-slate-900 text-slate-100 py-2 px-3 border-slate-100 border max-w-max'>
						Contato
					</button>
				</div>
			</div>
		</div>
	)
}
