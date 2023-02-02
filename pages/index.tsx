import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Salesy</title>
        <meta name="description" content="add filters for your enterprise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-5xl text-pink-300 font-bold underline">
      Hello world!
    </h1>
      </main>
    </>
  )
}