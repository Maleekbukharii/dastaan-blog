import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      
      <section className='mx-4 my-8'>
        <h1 className='text-4xl font-extrabold mb-6'>Top News</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <Link href="/news/major">
            <Image src="/top-news-1.jpg" alt="Top News 1" width={455} height={233} className="w-full h-48 object-cover rounded-lg"/>
            <h2 className='text-2xl font-semibold mt-4'>Breaking News: Major Event Unfolds</h2>
            <p className='mt-2 text-gray-600'>Summary of the top news story...</p>
            </Link>
          </div>
        </div>
      </section>

      <section className='mx-4 my-8'>
        <h2 className='text-3xl font-extrabold mb-6'>Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <a href="/news/world-news" className='bg-blue-100 p-4 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold'>World News</h3>
          </a>
          <a href="/news/national-national" className='bg-blue-100 p-4 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold'>National News</h3>
          </a>
        </div>
      </section>

      <section className='mx-4 my-8'>
        <h2 className='text-3xl font-extrabold mb-6'>Feature Articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <Link href="/news/analysis">
            <Image src="/feature-article-1.jpg" alt="Feature Article 1" width={455} height={233} className="w-full h-48 object-cover rounded-lg"/>
            <h3 className='text-2xl font-semibold mt-4'>In-Depth Analysis: Topic</h3>
            <p className='mt-2 text-gray-600'>Summary of the feature article...</p>
            </Link>
          </div>
        </div>
      </section>

      <section className='mx-4 my-8'>
        <h2 className='text-3xl font-extrabold mb-6'>Trending Topics</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <Image src="/trending-topic-1.jpg" alt="Trending Topic 1" width={455} height={233} className="w-full h-48 object-cover rounded-lg"/>
            <h3 className='text-2xl font-semibold mt-4'>Popular Topic: Subject</h3>
            <p className='mt-2 text-gray-600'>Summary of the trending topic...</p>
          </div>
        </div>
      </section>

      <footer className='bg-gray-900 py-6 mt-12'>
        <div className='text-center text-white'>
          <p>&copy; 2023 Dastaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
