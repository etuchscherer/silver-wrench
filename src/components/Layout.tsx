import Head from "next/head";
import { ReactNode } from "react";
import styles from '../../styles/Home.module.css'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Trivia App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center justify-center h-screen">
          {children}
        </div>
      </main>
    </>
   );
}

export default Layout;