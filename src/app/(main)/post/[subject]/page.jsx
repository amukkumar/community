import React from 'react'
import FeedPost from '@/components/mycomponents/feedPost'

const SubjectPost = ({ params }) => {
    return (
        <div className='flex flex-col items-center gap-2 justify-center mt-2'>
            <FeedPost />
            <FeedPost />
        </div>
    )
}

export default SubjectPost