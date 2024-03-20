import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarContextProvider from '@/context/NavbarMenu.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Despachante',
	description: 'Isenções para PcD & Táxi',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<NavbarContextProvider>
				<body
					className={
						(inter.className,
						'flex flex-col min-h-screen bg-no-repeat gap-y-3 bg-fixed bg-center ')
					}>
					<div className='container flex flex-col self-center h-full w-full '>
						{children}
					</div>
				</body>
			</NavbarContextProvider>
		</html>
	)
}
