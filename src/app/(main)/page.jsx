import React from 'react'
import TopFilter from '@/components/mycomponents/topFilter'
import FeedPost from '@/components/mycomponents/feedPost'


function Home() {
  return (
    <div className=''>
      <TopFilter />
      <div className=''>
        <FeedPost />
        <FeedPost />
      </div>
    </div>
  )
}

export default Home
