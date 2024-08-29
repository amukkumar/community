"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, SendHorizonalIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
const ReplyInput = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button variant="ghost" className='px-1 h-4 text-primary' onClick={() => setShow(prev => !prev)}>Reply</Button>
            {show && <div className='py-2 flex items-center gap-2'>
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
            }
        </>
    )
}

export default ReplyInput