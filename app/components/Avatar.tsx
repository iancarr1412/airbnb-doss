'use client';

import Image from 'next/image';

const Avatar = () => {
   return (
    <Image className="rounded-sm"
        height="38"
        width="30"
        alt="Avatar"
        src="/images/placeholder.jpg"/>
  )
}

export default Avatar