import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SubjectGroup = () => {
    return (
        <div className='border w-full rounded-md sticky top-[73px] mt-2 h-max' style={{ minHeight: "calc(100vh - 75px)" }}>
            <div className='h-24 bg-primary rounded-tr-md rounded-tl-md flex items-center justify-center'>
                <h3 className='font-bold text-white'>Top Subject Groups</h3>
            </div>
            <div className=''>
                <Link href='/post/physics'>
                    <div className='flex items-center gap-3 border-t p-2'>
                        <p className='font-semibold text-sm'>1.</p>
                        <Avatar className='h-9 w-auto'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='font-medium text-sm'>Physics</p>
                    </div>
                </Link>
                <Link href='/post/chemistry'>
                    <div className='flex items-center gap-3 border-t p-2'>
                        <p className='font-semibold text-sm'>2.</p>
                        <Avatar className='h-9 w-auto'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='font-medium text-sm'>Chemistry</p>
                    </div>
                </Link>
                <Link href='/post/mathematics'>
                    <div className='flex items-center gap-3 border-t p-2'>
                        <p className='font-semibold text-sm'>3.</p>
                        <Avatar className='h-9 w-auto'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='font-medium text-sm'>Mathematics</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SubjectGroup