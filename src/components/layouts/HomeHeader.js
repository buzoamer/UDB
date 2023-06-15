import Link from 'next/link';
import React from 'react';

export default function HomeHeader() {
  return (
      <nav className="bg-gradient-to-b from-lime-800 to-gray-600 rounded-b-md shadow-md shadow-gray-800 text-white fixed top-0 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
          <div className="relative flex h-16 items-center">
            <Link className="text-white rounded py-2 px-4 hover:bg-zinc-200 hover:text-gray-800" href="/">Event Manager</Link>
            <ul className="flex space-x-4">
                <Link className="text-white rounded py-2 px-4 hover:bg-zinc-200 hover:text-gray-800" href="/event/dashboard">Events</Link>
            </ul>
            <button
              className="text-white rounded py-2 px-4 hover:bg-zinc-200 hover:text-slate-800"
              aria-label="Toggle navigation">Menu</button>
          </div>
        </div>
      </nav>
    );
  }