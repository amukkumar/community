// "use client"
// import { useEffect } from 'react';

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }

// export default function HomePage() {
//   useEffect(() => {
//     const sharedData = getCookie('sharedData');
//     console.log('Shared Data:', sharedData); // Output: user123
//   }, []);

//   return <div>Welcome to the Community!</div>;
// }


import { cookies } from 'next/headers';

export default function HomePage() {
  // Use the cookies() utility to access cookies in a server component
  const cookieStore = cookies();
  const sharedData = cookieStore.get('sharedData')?.value || 'No shared data';
  console.log(sharedData);

  return <div>Shared Data: {sharedData}</div>;
}