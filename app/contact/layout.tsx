"use client";
import Header from "@/components/header/Index"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <Header/>
    </div>
  )
}