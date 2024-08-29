import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookMarked, MessageSquareDiff, Share2 } from 'lucide-react'
import post from '@/assets/testpost.jpeg'
import SeeMoreText from '@/components/ui/seeMoreText'
import Link from 'next/link'
import dayjs from 'dayjs'

const FeedPost = ({ data }) => {

    return (
        <div className='border rounded-sm shadow-md p-2 md:max-w-[600px] min-w-[350px] bg-white'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center mb-2'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='text-sm font-semibold'>{data?.name}</p>
                        <p className='text-xs'>{data?.curricuram}</p>
                    </div>
                </div>
                <p className='text-xs text-gray-500'>
                    {dayjs().diff(data?.createdAt, 'minutes') < 60
                        ? dayjs().diff(data?.createdAt, 'minutes') + " minutes ago"
                        : dayjs().diff(data?.createdAt, 'hour') < 24
                            ? dayjs().diff(data?.createdAt, 'hour') + " hours ago"
                            : dayjs().diff(data?.createdAt, 'day') < 6
                                ? dayjs().diff(data?.createdAt, 'day') + " days ago"
                                : dayjs(data?.createdAt).format('DD-MMM-YYYY')}
                </p>
            </div>
            <div className='mb-2'>
                <SeeMoreText text={data?.description} />
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