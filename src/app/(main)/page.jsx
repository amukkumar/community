import React from 'react';
import TopFilter from '@/components/mycomponents/topFilter';
import FeedPost from '@/components/mycomponents/feedPost';
import { getPosts } from '@/api/post';
import cookie from 'cookie';

export default async function HomePage({ searchParams }) {
  // Fetch posts on the server side
  const response = await getPosts();

  // Parse the cookies from the incoming request (via searchParams if applicable)
  const cookies = searchParams?.cookies ? cookie.parse(searchParams.cookies) : {};
  const sharedData = cookies.sharedData || null;

  console.log('Shared Data:', sharedData); // Output: user123

  return (
    <div className=''>
      <TopFilter />
      {sharedData}
      adsf
      <div className=''>
        {response.data.data.map((item, index) => (
          <FeedPost key={index} data={item} />
        ))}
      </div>
    </div>
  );
}