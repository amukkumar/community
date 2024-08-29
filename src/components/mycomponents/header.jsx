import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo/logo.png'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header = () => {
    return (
        <div className="border-b p-3 sticky top-0 bg-white z-10">
            <div className='p-0 max-w-[1100px] mx-auto flex justify-between items-center'>
                <Link href='/'><Image src={logo} className='h-10 w-auto' /></Link>
                <div className='relative hidden md:block md:max-w-[400px] w-full'>
                    <Input
                        className="w-full pl-12 py-4 rounded-full text-lg border-2 focus-visible:ring-none focus-visible:ring-0 "
                        placeholder="Search anything...."
                    />
                    <Search size={22} className='absolute top-[9px] left-4 text-primary' />
                </div>
                <Link href='/profile'>
                    <div className='flex items-center gap-3'>
                        <p>Hi! User</p>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header