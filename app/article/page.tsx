import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
const page = () => {
  return (
      <Layout>
      <h1 className='font-extrabold flex justify-start mx-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-9'>
        Read articles by categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/medical">Medical</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Get to know all new about medical.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Automobile">Automobile</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">All best vehicles with their pros and cons.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/BestApps">Best Apps</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Best apps available in both android and ios.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Fashion">Fashion</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">What's happening in fashion industry.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Technology">Technology</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Discover the latest advancements in technology.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Health">Health</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Stay updated with health and wellness tips.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Travel">Travel</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Explore the world with our travel guides.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Food">Food</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Delicious recipes and food reviews.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Finance">Finance</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Tips and insights on managing your finances effectively.</p>
        </div>

        <div className="mx-2 bg-white p-6 border-gray-200 rounded-lg border-2 text-center max-w-xs">
          <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2"><a href="/article/Lifestyle">Lifestyle</a></h2>
          <p className="text-gray-600 text-sm sm:text-base">Inspiration and ideas for a balanced and fulfilling lifestyle.</p>
        </div>

      </div>

      <h1 className='font-extrabold flex justify-start mx-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-9'>
        Best Article for today
      </h1>
      <h2 className='font-bold flex justify-start mx-4 text-2xl sm:text-3xl md:text-4xl my-9'>
        Topic of Article
      </h2>
      <p className="flex justify-start mx-4 sm:mx-8 md:mx-12 lg:mx-24 my-3 text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos facere at iure dolore praesentium magni voluptate consequuntur placeat eaque, beatae quidem in? Sint necessitatibus vero alias maiores qui in?
      </p>
      </Layout>   
)
}

export default page

