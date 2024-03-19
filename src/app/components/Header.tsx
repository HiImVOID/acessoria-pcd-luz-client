import { useNavbarContext } from "@/context/NavbarMenu.context";


export default function Header() {
    const { isNavbarOpen, setIsNavbarOpen } = useNavbarContext();

    return (
        <header className="flex justify-between">
            <h1>Logo</h1>
        </header>
    )
}