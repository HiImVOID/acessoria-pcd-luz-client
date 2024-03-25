import Image from 'next/image'
import Link from 'next/link'
import WhatsApp from '@/../public/Assets/Whatsapp.png'

export default function Whatsapp() {
	return (
		<div className=' fixed bottom-5 right-5 p-4'>
			<Link href={'https://wa.me/15511973402508'} target='_blank'>
				<Image
					src={WhatsApp}
					width={75}
					height={75}
					alt='Contato pelo Whatsapp '
				/>
			</Link>
		</div>
	)
}
