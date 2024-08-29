"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookMarked, ImageIcon, MessageSquareDiff, SendHorizonalIcon, Share2 } from 'lucide-react';
import post from '@/assets/testpost.jpeg';
import SeeMoreText from '@/components/ui/seeMoreText';
import ReplyInput from '@/components/ui/replyInput';

const PostDetails = ({ params }) => {
    return (
        <div className='flex-1 flex flex-col items-center gap-2 justify-center mt-2'>
            <div className='border rounded-md shadow-md p-2 max-w-[600px] min-w-[350px] bg-white'>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center mb-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-sm font-semibold'>{params.slug}</p>
                            <p className='text-xs'>MYP 1</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500'>26 min ago</p>
                </div>
                <div className='mb-2'>
                    <SeeMoreText text='Basics of statistics in the Basics of statistics in the simplest language with real-life examples and implications simplest language with real-life examples and implications Basics of statistics in the simplest language with real-life examples and implications' />
                </div>
                <Image src={post} className='h-96 aspect-square object-cover' />
                <div className='border'>
                    <div className='p-2 flex justify-between items-center'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <MessageSquareDiff size={24} absoluteStrokeWidth />
                            <span className='text-sm text-gray-500'>32 comments</span>
                        </div>
                        <div className='flex gap-5'>
                            <Share2 size={24} absoluteStrokeWidth />
                            <BookMarked size={24} absoluteStrokeWidth />
                        </div>
                    </div>
                    <>
                        <hr></hr>
                        <div className='p-2 flex items-center gap-2'>
                            <Avatar className='h-8 w-8'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='relative w-full'>
                                <Input
                                    className="w-full pr-14 py-2 h-9 rounded-full text-sm border-2 focus-visible:ring-none focus-visible:ring-0"
                                    placeholder="Add a comment..."
                                />
                                <ImageIcon size={20} className='absolute top-2 right-3 text-primary cursor-pointer' />

                            </div>
                            <SendHorizonalIcon size={30} className='cursor-pointer' />
                        </div>
                        <hr className='mb-2'></hr>
                        <div className='flex flex-col gap-2 mb-3'>
                            <div className='px-2 flex gap-2'>
                                <Avatar className='h-8 w-8 mt-1'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className='flex-1'>
                                    <div className='flex justify-between gap-2'>
                                        <div>
                                            <p className='text-sm font-semibold left-3'>User Name</p>
                                            <p className='text-xs text-gray-500'>MYP 1</p>
                                        </div>
                                        <p className='text-xs text-gray-500'>1 w ago</p>
                                    </div>
                                    <div>
                                        <p className='text-sm p-1'>This is my comment</p>
                                        <ReplyInput />
                                    </div>
                                </div>
                            </div>

                            <div className='px-2 flex gap-2'>
                                <Avatar className='h-8 w-8 mt-1'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className='flex-1'>
                                    <div className='flex justify-between gap-2'>
                                        <div>
                                            <p className='text-sm font-semibold left-3'>User Name</p>
                                            <p className='text-xs text-gray-500'>MYP 1</p>
                                        </div>
                                        <p className='text-xs text-gray-500'>1 w ago</p>
                                    </div>
                                    <div>
                                        <p className='text-sm p-1'>This is my comment</p>
                                        <ReplyInput />
                                    </div>
                                    <div className='px-2 flex gap-2 mt-2'>
                                        <Avatar className='h-8 w-8 mt-1'>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex-1'>
                                            <div className='flex justify-between gap-2'>
                                                <div>
                                                    <p className='text-sm font-semibold left-3'>User Name</p>
                                                    <p className='text-xs text-gray-500'>MYP 1</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>1 w ago</p>
                                            </div>
                                            <div>
                                                <p className='text-sm p-1'>This is my comment</p>
                                                <ReplyInput />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default PostDetails