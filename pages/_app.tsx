import SideMenu from "@/components/SideMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Anchor from "@/components/Anchor";
import AppBar from "@/components/AppBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const links = [
  {
    href: "/",
    label: "Dashboard",
    iconSrc: "/images/dashboard-svgrepo-com.svg",
  },
  {
    href: "/customers",
    label: "Kunden",
    iconSrc: "/images/customer-report-line-svgrepo-com.svg",
  },
  {
    href: "/filter",
    label: "Filter",
    iconSrc: "/images/filter-svgrepo-com.svg",
  },
  {
    href: "/companies",
    label: "Companies",
    iconSrc: "/images/company-svgrepo-com.svg",
  },
  {
    href: "/leadsapproval",
    label: "Leads Approval",
    iconSrc: "/images/invoice-approval-line-svgrepo-com.svg",
  },
  {
    href: "/leads",
    label: "Leads",
    iconSrc: "/images/list-bullet-svgrepo-com.svg",
  },
  {
    href: "/articals",
    label: "Articals",
    iconSrc: "/images/article-svgrepo-com.svg",
  },
  {
    href: "/jobs",
    label: "Jobs",
    iconSrc: "/images/suitcase-svgrepo-com.svg",
  },
  {
    href: "/logout",
    label: "Logout",
    iconSrc: "/images/power-svgrepo-com.svg",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(true);
  const router = useRouter();
  return (
    <div className="flex">
      <Head>
        <title>Salesy</title>
        <meta name="description" content="salesy enterprise dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cropped-Logo-original-blue-32x32.png" />
      </Head>
      <header>
        <motion.div animate={{ width: menuOpen ? "100%" : "0px" }}>
          <SideMenu trialPeriod menuOpen={menuOpen}>
            <ul className="flex flex-col">
              {links.map(({ href, label, iconSrc }, index) => {
                return (
                  <li key={`navBarItem_${index}`}>
                    <Anchor
                      href={href}
                      iconSrc={iconSrc}
                      className={`text-gray-500 transition-transform hover:scale-105 active:scale-100 ${
                        router.pathname === href && "bg-violet text-white"
                      }`}
                    >
                      {label}
                    </Anchor>
                  </li>
                );
              })}
            </ul>
          </SideMenu>
        </motion.div>
      </header>
      <main className="w-full">
        <header>
          <AppBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
