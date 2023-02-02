import AppBar from "@/components/AppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Anchor from "@/components/Anchor";

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
    href: "Jobs",
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
  return (
    <div className="flex">
      <Head>
        <title>Salesy</title>
        <meta name="description" content="salesy enterprise dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cropped-Logo-original-blue-32x32.png" />
      </Head>
      <header>
        <AppBar trialPeriod>
          <ul className="flex flex-col">
            {links.map(({ href, label, iconSrc }, index) => {
              return (
                <Anchor
                  href={href}
                  iconSrc={iconSrc}
                  key={`navBarItem_${index}`}
                  className="text-gray-500 transition-transform hover:scale-105"
                >
                  {label}
                </Anchor>
              );
            })}{" "}
          </ul>
        </AppBar>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
