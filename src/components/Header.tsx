import React from 'react'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import { navBarList } from '@/constants'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'

const Header = () => {
  return (
    <header className='w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText/50'>
      <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
        <Logo></Logo>
        <SearchInput></SearchInput>
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList?.map((item)=>(
          <Link key={item?.title} href={item?.link}
          className='text-base font-semibold hover:text-darkOrange duration-300'>
            {item?.title}
          </Link>
        ))}
        <Link
              href={"/dashboard"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Dashboard
            </Link>
            <Link
              href={"/signin"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Sign in
            </Link>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />

      </Container>
    </header>
  )
}
 
export default Header