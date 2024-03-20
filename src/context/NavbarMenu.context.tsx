'use client'

import { createContext, useContext, useState } from "react";

interface ReactNode {
    children: React.ReactNode
}

const NavbarContext = createContext<any>(null);

export  function useNavbarContext() {
    return useContext(NavbarContext);
}

export default function NavbarContextProvider({ children }: ReactNode) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)
	const toggleNavbar = () => {
		return isNavbarOpen == true
			? setIsNavbarOpen(false)
			: setIsNavbarOpen(true)
	}

	return (
		<NavbarContext.Provider
			value={{ isNavbarOpen, setIsNavbarOpen, toggleNavbar }}>
			{children}
		</NavbarContext.Provider>
	)
}