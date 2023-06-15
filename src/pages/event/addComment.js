import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import commentService from '@/services/comments'

const AddComment = () => {
  const router = useRouter();
  const [message, setMessage] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
      const comment = await commentService.create(data);
        router.push('/event/dashboard');
  };

  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="mt-28">
        <div className="container mx-auto">
          <div className="max-w-md pb-12 mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-800">
              <h2 className="text-center text-black text-2xl font-bold mb-6">Comment form</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="title" className="block font-medium">Your email</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      placeholder="Enter your email"
                      {...register('email')}/>
                  <p className="text-red-500"></p>
                </div>

                <div className="mb-4">
                  <label htmlFor="shortDescription" className="block font-medium">Your comment</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      placeholder="Enter your comment here"
                      {...register('content')}>
                      </textarea>
                  <p className="text-red-500"></p>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComment
