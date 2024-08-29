import React from 'react'
import TopFilter from '@/components/mycomponents/topFilter'
import FeedPost from '@/components/mycomponents/feedPost'
import { getPosts } from '@/api/post'

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function Home() {

  const response = await getPosts();

  useEffect(() => {
    const sharedData = getCookie('sharedData');
    console.log('Shared Data:', sharedData); // Output: user123
  }, []);

  return (
    <div className=''>
      <TopFilter />
      <div className=''>
        {response.data.data.map((item, index) => (
          <FeedPost key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Home
