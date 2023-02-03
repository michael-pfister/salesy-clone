import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProfileButton(props: { name: string; imageSrc: string }) {
  return (
    <button
      className="text-white flex items-center gap-2"
      aria-label="open profile information"
    >
      <Image
        className="aspect-square rounded-full object-cover"
        src={props.imageSrc}
        alt="Profile"
        width={50}
        height={50}
      />
      {props.name}
      <Image
        src="/images/down-arrow-backup-2-svgrepo-com.svg"
        alt=""
        aria-hidden
        width={15}
        height={15}
      />
    </button>
  );
}

export default function AppBar(props: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <nav className="bg-gradient-to-r from-violet to-oceanblue p-4 flex justify-between">
      <button
        title="open sidebar menu"
        onClick={() => props.setMenuOpen(!props.menuOpen)}
      >
        <motion.div animate={{ rotate: props.menuOpen ? 90 : 0 }}>
          <Image
            src="/images/menu-hamburger-svgrepo-com.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </motion.div>
      </button>
      <div className="flex gap-4 items-center">
        <Link href="/help">
          <Image
            src="/images/help-svgrepo-com.svg"
            alt="Help"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/settings">
          <Image
            src="/images/settings-ui-svgrepo-com.svg"
            alt="Help"
            width={30}
            height={30}
          />
        </Link>
        <ProfileButton
          name="David John"
          imageSrc="/images/pexels-chloe-1043471.jpg"
        />
      </div>
    </nav>
  );
}
