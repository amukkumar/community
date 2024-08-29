import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChartColumnBig, DownloadIcon, HelpCircle, Share2 } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
    return (
        <div className='border w-full rounded-md sticky top-[73px] mt-2 h-max' style={{ minHeight: "calc(100vh - 80px)" }}>
            <div className="flex flex-col items-center py-6">
                <Avatar className='w-16 h-16'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='mt-1 font-semibold'>User Name</p>
                <p className='text-xs'>MYP 1</p>

            </div>
            <Link href='download'>
                <div className='flex items-center gap-5 border-t p-3 px-6'>
                    <DownloadIcon size={20} className='text-gray-600' />
                    <p>Download</p>
                </div>
            </Link>
            <Link href='download'>
                <div className='flex items-center gap-5 border-t p-3 px-6'>
                    <ChartColumnBig size={20} className='text-gray-600' />
                    <p>Leader Board</p>
                </div>
            </Link>
            <Link href='download'>
                <div className='flex items-center gap-5 border-t p-3 px-6'>
                    <Share2 size={20} className='text-gray-600' />
                    <p>Invite and Earn</p>
                </div>
            </Link>
            <Link href='download'>
                <div className='flex items-center gap-5 border-t p-3 px-6'>
                    <HelpCircle size={20} className='text-gray-600' />
                    <p>Help</p>
                </div>
            </Link>
        </div>
    )
}

export default SideBar