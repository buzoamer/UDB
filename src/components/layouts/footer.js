import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-pink-700 to-transparent rounded-t-md text-white py-3 bottom-0 w-full">
      <div className="text-center">
        <text className='text-sm font-l'>
          UD Bastion - {''}
          <Link target='_blank' className="font-semibold hover:text-base hover:text-blue-500" href="https://www.linkedin.com/in/amerbuzo/">Amer Bužo</Link>
        </text>
      </div>
    </footer>
  );
}
