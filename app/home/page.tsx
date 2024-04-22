"use client"
import Link from 'next/link'
import React, { Component } from 'react'
import { Popover } from '@headlessui/react'
//import {Bars3Icon} from "@heroicons/react"

export class home extends Component {
  render() {
    return (
      <Popover
      className={'container mx-auto flex items-center gap-1 border-b-2 px-6 py-2 h-24'}>
        <img src="/img/usLogo.jpg" alt="logo" width={50} height={50} />
        <h1 className='font-bold'>US Virtual</h1>
        <div className='grow'>
            <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
                <Link href="#" >Home</Link>
                <Link href="#" >Blog</Link>
                <Link href="#" >Academia</Link>
                <Link href="#" >secretaria</Link>
                <Link href="#" >Sobre</Link>
            </div>
        </div>
        <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
        hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">Solutions</Popover.Button>
        <span className='sr-only'>Õpen menu</span>
       
        </div>
        <div className='hidden'>
            <Link href="#" className='mr-2 font-bold'>Sign up</Link>
            <Link href="#" className='font-bold'>Login</Link>
        </div>

      </Popover>
    )
  }
}

export default home