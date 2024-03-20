'use client'

import { useNavbarContext } from '@/context/NavbarMenu.context'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/../public/Assets/táxi-bg.jpeg'
import { List, X } from '@phosphor-icons/react'

export default function Navbar() {
	const { isNavbarOpen, setIsNavbarOpen, toggleNavbar } = useNavbarContext()

	return (
		<>
			{isNavbarOpen === true ? (
				<div className='sticky top-0 z-50'>
					<div
						className='fixed h-full inset-0 bg-slate-600/50 backdrop-blur-sm flex w-screen '
						onClick={toggleNavbar}>
						<div className='w-full' />
						<div className=' px-1 relative  h-full w-full bg-indigo-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
							<ul className='flex flex-col sticky  whitespace-nowrap p-2 '>
								<li>
									<button
										className='items-end  justify-end flex w-full'
										onClick={() => toggleNavbar()}>
										<X
											size={36}
											color='#fff'
										/>
									</button>
								</li>
								<li className='py-5 pl-3 hover:bg-zinc-900 rounded-md '>
									<Link href='/'>Inicio</Link>
								</li>
								<li className='py-5 pl-3 hover:bg-zinc-900 rounded-md '>
									<Link href='/servicos'>Serviços</Link>
								</li>
								<li className='py-5 pl-3 hover:bg-zinc-900 rounded-md '>
									<Link href='/contato'>Contato</Link>
								</li>
								<li className='py-5 pl-3 hover:bg-zinc-900 rounded-md '>
									<Link href='/sobre'>Sobre</Link>
								</li>

								<hr className='my-3' />
							</ul>
						</div>
					</div>
				</div>
			) : (
				<div className='hidden overflow-hidden' />
			)}
			{isNavbarOpen === true ? (
				<div className='hidden overflow-hidden' />
			) : (
				<header className=' sticky top-0 z-50 w-full py-1 px-3 bg-slate-600/50 backdrop-blur-sm  '>
					<div className='max-w-screen-xl mx-auto flex justify-between items-center'>
						<Image
							src={Logo}
							alt='Logo'
							width={50}
							height={50}
						/>
						<nav className='hidden md:flex  md:justify-center md:items-center'>
							<ul className='flex gap-x-4 text-xl font-medium py-1'>
								<Link href={'/'}>
									<li className=' px-3 py-2 rounded-xl'>
										Inicio
									</li>
								</Link>
								<Link href={'/servicos'}>
									<li className=' px-3 py-2 rounded-xl'>
										Serviços
									</li>
								</Link>
								<Link href={'/contato'}>
									<li className=' px-3 py-2 rounded-xl'>
										Contato
									</li>
								</Link>
								<Link href={'/sobre'}>
									<li className=' px-3 py-2 rounded-xl'>
										Sobre
									</li>
								</Link>
							</ul>
						</nav>

						<button
							className='flex md:hidden'
							onClick={() => toggleNavbar()}>
							<List
								size={36}
								color='#fff'
							/>
						</button>
					</div>
				</header>
			)}
		</>
	)
}
