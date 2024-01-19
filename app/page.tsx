"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/Index'
import Home from '@/components/home/Index'
import HomeContend from '@/components/HomeContend/Index'

export default function Main() {
  return (
    <main >
      <Home />
      <HomeContend />
    </main>
  )
}