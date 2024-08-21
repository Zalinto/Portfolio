import React from 'react';
import Image from 'next/image';

export default function SocialIcons() {
    return (
        <div className='mt-4'>
            <Image
                width={40}
                height={40}
                src="/hero/Github.svg"
            />
        </div>
    )
}
