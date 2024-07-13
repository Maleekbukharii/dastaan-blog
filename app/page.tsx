import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <title>blogs</title>
      <Navbar />
      <h1 className="font-extrabold flex justify-start mx-4 my-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Featured Blog No 1
      </h1>
      <p className="flex justify-start mr-4 ml-4 my-3 text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos facere
        at iure dolore praesentium magni voluptate consequuntur placeat eaque,
        beatae quidem in? Sint necessitatibus vero alias maiores qui in?
      </p>
      <h2 className="font-extrabold flex justify-start mx-4 my-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Featured Blog No 2
      </h2>
      <p className="flex justify-start mr-4 ml-4 my-3 text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos facere
        at iure dolore praesentium magni voluptate consequuntur placeat eaque,
        beatae quidem in? Sint necessitatibus vero alias maiores qui in?
      </p>
      <h3 className="font-extrabold flex justify-start mx-4 my-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Featured Blog No 3
      </h3>
      <p className="flex justify-start mr-4 ml-4 my-3 text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos facere
        at iure dolore praesentium magni voluptate consequuntur placeat eaque,
        beatae quidem in? Sint necessitatibus vero alias maiores qui in?
      </p>

      <h3 className="font-extrabold flex justify-start mx-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-9">
        Breaking News
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/breakingnews1"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/breakingnews2"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href={"/breakingnews3"}><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

      </div>

      <h4 className="font-extrabold flex justify-start mx-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-9">
        International News
      </h4>
      <div className="flex flex-wrap justify-center gap-4">
      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/IN1"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/IN2"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/IN3"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>
      </div>

      <h5 className="font-extrabold flex justify-start mx-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-9">
        Top Stories
      </h5>
      <div className="flex flex-wrap justify-center gap-4">
        
      <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/topstory1"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

        <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/topstory2"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>

        <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Image src="/.png" alt="dastan logo" width={455} height={233} className="h-30 w-60"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Title</h2>
            <p className="text-gray-900 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo reiciendis porro sequi! Sapiente voluptatem modi corrupti odit sed, fuga, consequatur minus culpa suscipit optio ea eius quaerat nesciunt officia!</p>
            <Link href="/topstory3"><button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Learn more</button></Link>
          </div>
      </div>
      </div>
      
      <footer className='bg-gray-900 py-6 mt-12'>
        <div className='text-center text-white'>
          <p>&copy; 2023 Dastaan. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
