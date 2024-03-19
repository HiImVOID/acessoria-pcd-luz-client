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

	return (
		<NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
			{children}
		</NavbarContext.Provider>
	)
}