import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookMarked, MessageSquareDiff, Share2 } from 'lucide-react'
import post from '@/assets/testpost.jpeg'
import SeeMoreText from '@/components/ui/seeMoreText'
import Link from 'next/link'

const FeedPost = () => {

    return (
        <div className='border rounded-sm shadow-md p-2 md:max-w-[600px] min-w-[350px] bg-white'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center mb-2'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='text-sm font-semibold'>John Deo</p>
                        <p className='text-xs'>MYP 1</p>
                    </div>
                </div>
                <p className='text-xs text-gray-500'>26 min ago</p>
            </div>
            <div className='mb-2'>
                <SeeMoreText text='Basics of statistics in the Basics of statistics in the simplest language with real-life examples and implications simplest language with real-life examples and implications Basics of statistics in the simplest language with real-life examples and implications' />
            </div>
            <Image src={post} className='md:h-96 w-full h-full aspect-square object-cover' />
            <div className='border'>
                <div className='p-2 flex justify-between items-center'>
                    <Link href='/post/subject/title'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <MessageSquareDiff size={24} absoluteStrokeWidth />
                            <span className='text-sm text-gray-500'>32 comments</span>
                        </div>
                    </Link>
                    <div className='flex gap-5'>
                        <Share2 size={24} absoluteStrokeWidth />
                        <BookMarked size={24} absoluteStrokeWidth />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedPost