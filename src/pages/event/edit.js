import Head from 'next/head'
import React from 'react'

const Edit = () => {
  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mt-28">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto pb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-800">
              <h2 className="text-center text-black text-2xl font-bold mb-6">Event editing</h2>
              <form method="post">
                <input type="hidden" />
                <input type="hidden" />
                <div className="mb-4">
                  <label htmlFor="title" className="block font-medium">Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Enter post title"
                    name="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-red-500"></p>
                </div>
                <div className="mb-4">
                  <label htmlFor="shortDescription" className="block font-medium">Short description</label>
                  <textarea
                    id="shortDescription"
                    placeholder="Describe the event"
                    name="shortDescription"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <p className="text-red-500"></p>
                </div>
                <div className="mb-4">
                  <label htmlFor="content" className="block font-medium">Content</label>
                  <textarea
                    id="content"
                    placeholder="Enter post content"
                    name="content"
                    rows="12"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <p className="text-red-500"></p>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Commit changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
