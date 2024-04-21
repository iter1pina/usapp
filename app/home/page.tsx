"use client"
import Link from 'next/link'
import React, { Component } from 'react'

export class home extends Component {
  render() {
    return (
      <div
      className={'container mx-auto flex items-center gap-1 border-b-2 px-6 py-2 h-24'}>
        <img src="/img/usLogo.jpg" alt="logo" width={50} height={50} />
        <h1 className='font-bold'>US Virtual</h1>
        <div className='grow'>
            <div className='flex items-center justify-center gap-2 md:gap-8'>
                <Link href="#" >Home</Link>
                <Link href="#" >Blog</Link>
                <Link href="#" >Academia</Link>
                <Link href="#" >secretaria</Link>
                <Link href="#" >Sobre</Link>
            </div>
        </div>

        <div>
            <Link href="#" className='mr-2 font-bold'>Sign up</Link>
            <Link href="#" className='font-bold'>Login</Link>
        </div>

      </div>
    )
  }
}

export default home