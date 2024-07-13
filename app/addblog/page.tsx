'use client'; // Marking the component as client-side rendered

import Layout from '@/components/layout';
import React, { useState, ChangeEvent } from 'react';

const categories: string[] = [
  "Business",
  "Automobile",
  "BestApps",
  "Fashion",
  "Technology",
  "Health",
  "Travel",
  "Food",
  "Finance",
  "Lifestyle",
  "Education",
  "Entertainment",
  "Environment",
  "Culture",
  "Politics",
];

const Page: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [postedBlog, setPostedBlog] = useState<any>(null); // State to store posted blog details

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handlePostBlog = () => {
    const blog = {
      title,
      content,
      image,
      category: selectedCategory,
    };
    setPostedBlog(blog);
  };

  return (
    <Layout>
      <div className='mx-4 my-4'>
        <h1 className='text-2xl font-bold'>Choose Category</h1>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex my-4 items-center bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none px-4 py-2 mt-2"
        >
          {selectedCategory ? selectedCategory : "Categories"}
          <svg
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-lg z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category} className="px-4 py-2 hover:bg-gray-100">
                <a onClick={() => handleCategorySelect(category)}>{category}</a>
              </div>
            ))}
          </div>
        )}
        <div className='mt-4'>
          <label className='block text-lg font-medium text-gray-700' htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mt-4'>
          <label className='block text-lg font-medium text-gray-700' htmlFor='content'>Content</label>
          <textarea
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mt-4'>
          <label className='block text-lg font-medium text-gray-700' htmlFor='image'>Add Image</label>
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={handleImageChange}
            className='mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
          />
          {image && (
            <div className='relative mt-4'>
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                x
              </button>
              <img src={image} alt='Selected' className='max-w-full h-auto rounded-md shadow-sm' />
            </div>
          )}
        </div>
        <div className='mt-4'>
          <button
            onClick={handlePostBlog}
            className='bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Post Blog
          </button>
        </div>
        {postedBlog && (
          <div className='mt-4'>
            <h2 className='text-xl font-semibold mb-2'>Posted Blog</h2>
            <div className='bg-white p-4 rounded-md shadow-md'>
              <h3 className='text-lg font-medium'>{postedBlog.title}</h3>
              {postedBlog.image && (
                <img src={postedBlog.image} alt='Blog Image' className='mt-2 rounded-md shadow-sm' />
              )}
              <p className='mt-2'>{postedBlog.content}</p>
              <p className='mt-2 text-sm text-gray-500'>Category: {postedBlog.category}</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
