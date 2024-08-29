import React from 'react'
import { Input } from "@/components/ui/input"
import { Bookmark, Gem, Newspaper, Plus, Search, Settings2, TrendingUp } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import CreatePost from '@/components/mycomponents/createPost'

const TopFilter = () => {
    return (
        <div className='flex justify-center bg-white sticky top-16 z-10'>
            <div className=' md:w-[560px] sm:w-[calc(100vw-70px)] w-[calc(100vw-55px)] inline-flex gap-2 py-2 overflow-auto'>
                <Dialog>
                    <DialogTrigger className='flex bg-primary text-center text-white text-sm font-semibold px-2 rounded-md gap-1 items-center justify-center'><Plus size={20} />Create&nbsp;Post&nbsp;&nbsp;</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create Post</DialogTitle>
                            <DialogDescription>Uplod Image or Text and share with people.</DialogDescription>
                            <CreatePost />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <div className='bg-white px-3 flex-1 py-[3px] rounded-md border'>All</div>
                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Curriculum" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Grade" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Chapter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="h-8">
                        <SelectValue placeholder="Sub-Topic" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className='border p-1 rounded-md ml-2'>
                        <Settings2 size={20} className='flex-none' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='mr-2 lg:mr-24'>
                    <DropdownMenuLabel>Sort</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><TrendingUp size={16} /> &nbsp; Trending</DropdownMenuItem>
                    <DropdownMenuItem><Newspaper size={16} /> &nbsp; Latest</DropdownMenuItem>
                    <DropdownMenuItem><Gem size={16} /> &nbsp; For Me</DropdownMenuItem>
                    <DropdownMenuItem><Bookmark size={16} /> &nbsp; Bookmark</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default TopFilter