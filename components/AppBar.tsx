import { motion } from "framer-motion";
import Image from "next/image";

export default function AppBar(props: {menuOpen: boolean, setMenuOpen: (value: boolean) => void}) {
    return <nav className="bg-gradient-to-r from-violet to-oceanblue p-2">
        <button title="open sidebar menu" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <motion.div animate={{rotate: props.menuOpen ? 90 : 0}}>
                <Image src="/images/menu-hamburger-svgrepo-com.svg" alt="Menu" width={30} height={30} />
            </motion.div>
        </button>
    </nav>
}