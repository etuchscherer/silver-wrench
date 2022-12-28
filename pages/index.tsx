import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className=''>
      <Image src='/falcon.png' width={968} height={968} alt="falcon" />
      <Link className='text-3xl text-green-500 font-bold' href="/trivia">Play Trivia</Link>
    </div>
  )
}
