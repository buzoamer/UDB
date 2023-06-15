import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import commentService, {load} from '@/services/comments'
import { comment } from 'postcss';

const Comments = () => {
  const [comments, setcomments] = useState();
  async function getcomments(){
    const {data} = await commentService.load()
    setcomments(data)
  }
  useEffect(()=> {
    getcomments()
    console.log(comments)
  }, [])
  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-8">
          <h1 className="text-2xl font-bold text-black">Comments</h1>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Comment</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
              comments?.map(comment=> (
            <tr key={comment.id}>
              <td className="py-2 px-4 border">{comment.id}</td>
              <td className="py-2 px-4 border">{comment.email}</td>
              <td className="py-2 px-4 border">{comment.content}</td>
              <td className="py-2 px-4 border">14.06.2023.</td>
              <td className="py-2 px-4 flex justify-center border">
                <Link className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-block" href="#">Delete</Link>
              </td>
            </tr>
              ))
}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Comments;
