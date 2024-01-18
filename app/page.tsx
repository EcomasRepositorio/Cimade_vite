"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/Index'
import Home from '@/components/home/Index'

export default function Main() {
  return (
    <main >
      <Header/>
      <Home />
        <h1 className='text-3xl font-bold underline'>
          hello world!
        </h1>
    </main>
  )
}