"use client"
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
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
        hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className='sr-only'>Open Menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden="true"/>
        </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
        <Transition
        as={Fragment}
        enter='duration=200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duaration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
        >

        

        <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-1 mt-1'>
                <img src="/img/usLogo.jpg" alt="logo" width={50} height={50} />

                <h1 className='font-bold'>US Virtual</h1>
                </div>
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className='sr-only'>Close Menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden="true" />

                </Popover.Button>
              </div>

            </div>
            <div className='mt-6'>
              <nav className='grid gap-y-8'>
              
                <Link href="#" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 border-1 py-4'>Home</Link>
                <Link href="#" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 border-1 py-4'>Blog</Link>
                <Link href="#"  className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 border-1 py-4'>Academia</Link>
                <Link href="#"  className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 border-1 py-4'>secretaria</Link>
                <Link href="#"  className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 border-1 py-4'>Sobre</Link>
           

              </nav>

              <div className='mt-6 flex flex-col items-center gap-2'>
                <Link href="#"
                className='rounded-md bg-white px-4 py-2 text-sm font-mediun text-black md:text-xl w-full border-2
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
                >
                  Sign Up
                </Link>

              </div>

            </div>
          </div>
        </Popover.Panel>  

        </Transition>

        <div className='hidden sm:block'>
            <Link href="#" className='mr-2 font-bold'>Sign up</Link>
            <Link href="#" className='font-bold'>Login</Link>
        </div>
        
      </Popover>
    )
  }
}

export default home