"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/Index'
import HomeContend from '@/components/HomeContend/Index'
import Home from '@/components/home/Index'



export default function Main() {
  return (
    <div className="min-h-screen flex flex-col">
            
             
            <Home />
            <HomeContend/>
    </div>
  )
}