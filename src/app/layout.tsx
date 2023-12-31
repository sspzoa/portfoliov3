import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Seungpyo's Portfolio",
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/src/app/favicon.ico'/>
            <meta name="theme-color" content="#556677"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#556677"/>
        </head>
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
